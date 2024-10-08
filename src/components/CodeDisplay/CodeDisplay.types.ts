export interface CodeDisplayProps {
  text: string;
  title?: string;
  width?: string;
  language: string;
  style?: React.CSSProperties;
  codeStyle?: React.CSSProperties;
  syntaxHighlighterStyle?: React.CSSProperties;
  className?: string;
  color?: string;
  "data-testid"?: string;
}

export interface CodeDisplayStyleProps {
  $colorPalette: any
  $color: string;
  $width?: string;
  $hasTitle?: boolean;
}