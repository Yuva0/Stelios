export interface RadioGroupProps {
  name?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary" | "danger" | "warning" | "success" | "info";
  disabled?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  labelPlacement?: "top" | "bottom" | "start" | "end";
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  orientation?: "horizontal" | "vertical";
}

export interface RadioGroupStyleProps {
  $orientation: NonNullable<RadioGroupProps["orientation"]>;
}