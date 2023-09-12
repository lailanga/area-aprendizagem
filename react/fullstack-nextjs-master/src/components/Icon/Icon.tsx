import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from './svgs/_index';

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px',
} as const;

interface IconProps {
  name?: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
  [key: string] : any; 
}

export default function Icon({ size, name, ...props}: IconProps) {
  const CurrentIcon = icons[name];
  if(!CurrentIcon) return <>"${name}" is not a valid <Icon /></>;
  return (
    <BaseComponent 
      as="svg" //se por tag some o erro no navegador
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
      }}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md',
}

/*
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_104)">
<path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM16.441 16.892C14.339 17.036 9.657 17.036 7.558 16.892C5.282 16.736 5.017 15.622 5 12C5.017 8.371 5.285 7.264 7.558 7.108C9.657 6.964 14.34 6.964 16.441 7.108C18.718 7.264 18.982 8.378 19 12C18.982 15.629 18.715 16.736 16.441 16.892ZM10 9.658L14.917 11.996L10 14.342V9.658Z" fill="#111111"/>
</g>
<defs>
<clipPath id="clip0_5_104">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
*/
