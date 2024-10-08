export interface SideBarGroupProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: string;
  selected?: boolean;
  // Events
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  "data-testid"?: string;
}

export interface SideBarGroupStyleProps {
  $colorPalette: any;
  $color: string;
}
