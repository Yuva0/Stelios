import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface NavigationBarHeaderProps {
  children: string | React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  size?: "small" | "medium" | "large";
}

export interface NavigationBarHeaderStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}
