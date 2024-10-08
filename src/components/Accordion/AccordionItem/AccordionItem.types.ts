export interface AccordionItemProps {
  children: React.ReactNode | React.ReactNode[];
  expanded?: boolean;
  title?: React.ReactNode;
  variant?: "contained" | "outlined" | "soft" | "outlined-soft" | "transparent";
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
  "data-testid-title"?: string;
}

export interface AccordionItemPvtProps {
  pvtKey?: number;
}

export interface AccordionItemStyleProps {
  $expanded?: boolean;
  $colorPalette: any;
  $color: string;
  $variant: "contained" | "outlined" | "soft" | "outlined-soft" | "transparent";
}

export interface AccordionItemContentStyleProps {
  $expanded?: boolean;
  $colorPalette: any;
  $color: string;
  $variant: "contained" | "outlined" | "soft" | "outlined-soft" | "transparent";
}