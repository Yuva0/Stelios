import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface NavigationBarItemProps {
  children: string | React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
}

export interface NavigationBarItemStyleProps {
  $paletteColors: DefaultTheme["theme"]["paletteColors"];
}