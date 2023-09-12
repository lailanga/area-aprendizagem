import React from "react";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import { StyleSheet } from '@src/theme/StyleSheet';

interface TextProps {
  //variant?: 'display1';
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'a' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

const Text = React.forwardRef(({
  tag,
  styleSheet,
  variant, 
  ...props
}: TextProps, ref) => {

  //const textVariant = theme.typography.variants.display1;
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent 
      tag={tag}
      styleSheet={{fontFamily: theme.typography.fontFamily,
      ...textVariant,
      ...styleSheet,
      }}
      ref={ref}
      {...props} 
    />
  )
})

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
};

export default Text;
