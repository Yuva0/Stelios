export interface NumberInputProps {
  id?: string;
  value?: number;
  className?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft";
  color?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent, value?: number) => void;
  onIncrement?: (e: React.MouseEvent, value?: number) => void;
  onDecrement?: (e: React.MouseEvent, value?: number) => void;
  "data-testid"?: string;
  "data-testid-plus"?: string;
  "data-testid-minus"?: string;
  "data-testid-input"?: string;
}
export interface NumberInputStyleProps {
  $colorPalette: any;
  $color: string;
  $position?: "left" | "right";
  $size: "small" | "medium" | "large";
  $variant: "contained" | "outlined" | "soft";
}