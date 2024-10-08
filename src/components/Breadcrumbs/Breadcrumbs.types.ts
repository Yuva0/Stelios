export interface BreadcrumbsProps {
  children: React.ReactNode | React.ReactNode[];
  delimiter?: string;
  variant?: "contained" | "outlined" | "soft" | "text"; 
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
  style?: React.CSSProperties;

  // Test Props
  "data-testid"?: string;
}