import React from "react";
import styled from "styled-components";
import { DrawerProps, DrawerStyleProps } from "./Drawer.types";
import Text from "../Text/Text";
import IconButton from "../IconButton/IconButton";
import { IconX } from "@tabler/icons-react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useDebounce } from "../../helpers/CustomHooks";
import { getColorPalette, useWindowSize } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";
// import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";

type DrawerBackdropProps = {
  $backdropStrength: DrawerProps["backdropStrength"];
};

const Drawer = ({
  children,
  open = false,
  position = "left",
  size = "medium",
  className,
  style,
  hideOnOutsideClick = true,
  zIndex = 1000,
  backdropStrength = "normal",
  title,
  hasCloseIcon = true,
  color = colorTokens.default.primary.main,
  // Events
  onClose,
  "data-testid": dataTestId,
  "data-testid-backdrop": dataTestIdBackdrop,
  ...props
}: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const debouncedOpen = useDebounce(open, 300);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 480;

  React.useEffect(() => {
    setIsOpen(open);

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        onClose && onClose(e);
      }
    };

    if (open) document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open, onClose]);

  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const _onOutsideClick = (e: React.MouseEvent) => {
    if (hideOnOutsideClick) {
      setIsOpen(false);
      onClose && onClose(e);
    }
  };

  const Title =
    title && typeof title === "string" ? (
      <Text color={color} style={{ flexGrow: 1 }} variant="h5">
        {title}
      </Text>
    ) : (
      title
    );
  const CloseIcon = (
    <span style={{ float: "right" }}>
      <IconButton
        alt="Close"
        size="small"
        variant="outlined"
        color={color}
        icon={<IconX />}
        onClick={_onOutsideClick}
      />
    </span>
  );

  const headerDrawer = (title || hasCloseIcon) && (
    <StyledHeader
      $color={color}
      $size={size}
      $isMobile={isMobile}
      $colorPalette={colorPalette}
      $backdropStrength={backdropStrength}
    >
      <div style={{ flexGrow: 1 }}>{Title}</div>
      {CloseIcon}
    </StyledHeader>
  );

  if (!open && !debouncedOpen) return null;
  return (
    <>
      <StyledDrawer
        $open={isOpen}
        $colorPalette={colorPalette}
        $color={color}
        $position={position}
        $size={size}
        $isMobile={isMobile}
        $backdropStrength={backdropStrength}
        className={className}
        style={style}
        $zIndex={zIndex}
        data-testid={dataTestId}
        {...props}
      >
        {headerDrawer}
        <StyledDrawerContent>{children}</StyledDrawerContent>
      </StyledDrawer>
      {isOpen && (
        <StyledBackdrop
          data-testid={dataTestIdBackdrop}
          $backdropStrength={backdropStrength}
          onClick={_onOutsideClick}
        />
      )}
    </>
  );
};
export default Drawer;

const getSize = (size: DrawerStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return 320;
    case "medium":
      return 480;
    case "large":
      return 640;
  }
};
const getBackdropStrength = (strength: DrawerProps["backdropStrength"]) => {
  switch (strength) {
    case "weak":
      return "rgba(0, 0, 0, 0.1)";
    case "normal":
      return "rgba(0, 0, 0, 0.3)";
    case "strong":
      return "rgba(0, 0, 0, 0.5)";
  }
};

const StyledDrawer = styled.div<DrawerStyleProps>`
  width: ${(props) => props.$isMobile ? "100%" : `${getSize(props.$size)}px`};
  position: fixed;
  top: 0;
  ${(props) => props.$position}: ${(props) =>
    props.$open ? 0 : `${-1 * getSize(props.$size)}px`};
  height: 100%;
  background-color: ${(props) => props.$colorPalette[props.$color].background};
  color: ${(props) => props.$colorPalette[props.$color].grayScale[11]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: ${(props) => `${props.$position} 0.3s ease-in-out;`}  
  z-index: ${(props) => props.$zIndex};
  display: flex;
  flex-direction: column;
`;
const StyledDrawerContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
  overflow-y: auto;
`;
const StyledBackdrop = styled.div<DrawerBackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: ${(props) => getBackdropStrength(props.$backdropStrength)};
`;
const StyledHeader = styled.div<DrawerStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: ${(props) =>
    `1px solid ${props.$colorPalette[props.$color].grayScale[5]}`};
`;
