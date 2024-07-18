import React from "react";
import { SideBarGroupProps } from "./SideBarGroup.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import Link from "../../Link/Link";
import colors from "../../../tokens/colors.json";

const StyledSideBarGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const StyledSideBarGroupHeader = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
`;

const SideBarGroup = ({
  children,
  className,
  style,
  title,
  leadingIcon,
  trailingIcon,

  // Events
  onClick,
}: SideBarGroupProps) => {
  return (
    <StyledSideBarGroup className={className} style={style}>
      {(title || leadingIcon || trailingIcon) && (
        <StyledSideBarGroupHeader>
          {leadingIcon && <span>{leadingIcon}</span>}
          {title && typeof title === "string" ? (
            onClick ? (
              <Link variant="hover" color={colors.black[0]} onClick={onClick}>{title}</Link>
            ) : (
              <Text variant="span">{title}</Text>
            )
          ) : (
            title
          )}
          {trailingIcon && <span>{trailingIcon}</span>}
        </StyledSideBarGroupHeader>
      )}
      {children}
    </StyledSideBarGroup>
  );
};

export default SideBarGroup;