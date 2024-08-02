import React from "react";
import { ListItemProps } from "./ListItem.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

interface ListItemStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}

const StyledListItem = styled.li<ListItemStyleProps>`
  margin: 0.5rem 0;
`;

const ListItem = ({ children }: ListItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  const ChildrenElement =
    typeof children === "string" ? (
      <Text variant="paragraph">{children}</Text>
    ) : (
      children
    );

  return (
    <StyledListItem $colorPalette={colorPalette}>
      {ChildrenElement}
    </StyledListItem>
  );
};

export default ListItem;