export interface ButtonInternalProps {
  // Accessibility Props
  ariaLabel?: string;
  ariaHidden?: boolean;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft" | "outlined-soft" | "neumorph";
  color?: string;
  children?: React.ReactNode | React.ReactNode[];
  rounded?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
}

export interface ButtonStyleProps {
  $size: NonNullable<ButtonProps["size"]>;
  $variant: NonNullable<ButtonProps["variant"]>;
  $color: NonNullable<ButtonProps["color"]>;
  $rounded: NonNullable<ButtonProps["rounded"]>;
  $disabled?: NonNullable<ButtonProps["disabled"]>;
  $isFullWidth?: NonNullable<ButtonProps["isFullWidth"]>;
  $borderRadius: string;
  // Theme: To be fixed
  $colorPalette: any;
}
