import React from "react";
import styled from "styled-components";
import { SideBarItemProps, SideBarItemStyleProps } from "./SideBarItem.types";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const SideBarItem = ({
  children,
  className,
  style,
  size,
  selected,
  color = colorTokens.default.primary.main,
  //Events
  onClick,
  "data-testid": dataTestId,
  ...props
}: SideBarItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledSideBarItem
      $colorPalette={colorPalette}
      $color={color}
      onClick={onClick}
      $selected={selected}
      className={className}
      style={style}
      data-testid={dataTestId}
      {...props}
    >
      {typeof children === "string" ? (
        <Link
          tabIndex={onClick ? 0 : undefined}
          preciseColor={selected ? colorPalette![color].accentScale[10] : colorPalette![color].grayScale[11]}
          size={size}
          variant="hover"
          className={className}
          style={style}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledSideBarItem>
  );
};
export default SideBarItem;

const StyledSideBarItem = styled.div<SideBarItemStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  width: fit-content;
  positon: relative;
  color: ${(props) =>
    props.$selected
      ? props.$colorPalette[props.$color].accentScale[11]
      : props.$colorPalette[props.$color].grayScale[11]};
`;