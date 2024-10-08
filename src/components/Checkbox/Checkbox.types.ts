export interface CheckboxProps {
  id?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  "data-testid"?: string;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxStyleProps {
  $checked?: boolean;
  $disabled?: boolean;
  $size: NonNullable<CheckboxProps["size"]>;
  $color: NonNullable<CheckboxProps["color"]>;
  $colorPalette: any;
}
