import React from "react";
import {
  SideBarGroupItemProps,
  SideBarGroupItemStyleProps,
} from "./SideBarGroupItem.types";
import styled from "styled-components";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledSideBarGroupItem = styled(Link)<SideBarGroupItemStyleProps>`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
`;

const StyledSideBarGroupItemLink = styled(Link)`
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
`;

const SideBarGroupItem = ({
  children,
  className,
  style,
  size,
}: SideBarGroupItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  if (typeof children === "string")
    return (
      <StyledSideBarGroupItemLink
        size={size}
        variant="hover"
        className={className}
        style={style}
      >
        {children}
      </StyledSideBarGroupItemLink>
    );

  return (
    <StyledSideBarGroupItem
      variant="hover"
      $colorPalette={colorPalette}
      className={className}
      style={style}
    >
      {children}
    </StyledSideBarGroupItem>
  );
};

export default SideBarGroupItem;
