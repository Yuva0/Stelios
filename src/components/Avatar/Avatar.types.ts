export interface AvatarImageProps {
  src: string;
  alt: string;
  type: "image";
  icon?: never;
}
export interface AvatarInitialsProps {
  src?: never;
  alt?: never;
  type: "initials";
  initials: string;
}
interface AvatarCommonProps {
  size?: "small" | "medium" | "large" | "xlarge";
  shape?: "rounded" | "square";
  color?: string;
  variant?: "contained" | "outlined" | "neumorph";
  type: "image" | "initials";
  initials?: string;
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  
  // Test Props
  "data-testid"?: string;
}
export type AvatarProps = AvatarCommonProps &
  (AvatarImageProps  | AvatarInitialsProps);

export interface AvatarStyledProps {
  $size: string;
  $shape: string;
  $variant: string;
  $colorPalette: any;
  $color: string;
}
