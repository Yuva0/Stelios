import React from "react";
import styled from "styled-components";
import { AccordionProps, AccordionStyleProps } from "./Accordion.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import colors from "../../tokens/colors.json";
import { getColorPalette } from "../../helpers/helpers";
import { AccordionItemProps } from "./AccordionItem/AccordionItem.types";

const Accordion = ({
  children,
  variant = "contained",
  width = "400px",
  color = colors.default.primary.main,
  isFullWidth = false,
}: AccordionProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledAccordion
      $variant={variant}
      $width={width}
      $color={color}
      $colorPalette={colorPalette}
      $isFullWidth={isFullWidth}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          variant: child.props.variant ?? variant,
          color: child.props.color ?? color,
        } as AccordionItemProps);
      })}
    </StyledAccordion>
  );
};
export default Accordion;

const StyledAccordion = styled.div<AccordionStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  width: ${({ $width, $isFullWidth }) =>
    $width ?? ($isFullWidth ? "100%" : "auto")};
`;

// const propsHandler = (
//   variant: AccordionStyleProps["$variant"],
//   color: AccordionStyleProps["$color"],
//   colorPalette: AccordionStyleProps["$colorPalette"]
// ) => {
//   return { ...getVariantProps(variant, color, colorPalette) };
// };
// const getVariantProps = (
//   variant: AccordionStyleProps["$variant"],
//   color: AccordionStyleProps["$color"],
//   colorPalette: AccordionStyleProps["$colorPalette"]
// ) => {
//   switch (variant) {
//     case "contained":
//       return {
//         background: {
//           default: colorPalette[color].accentScale[8],
//         }
//       };
//     case "outlined":
//       return {
//         background: {
//           default: "transparent",
//         }
//       };
//   }
// };
