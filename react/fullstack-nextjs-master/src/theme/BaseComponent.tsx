import React from "react";
import styled from "styled-components";
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from "@displaykit/responsive_styles";
//import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
  ref: any;
}

//base da aplicação em flex box
//estudar flexbox froggy
const StyledBaseComponent = styled.div<StyledBaseComponent>` 
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;


interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string] : any; 
};

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props, ref) => {
  const id = React.useId().replaceAll(":", "");
  return (
    <StyledBaseComponent ref={ref} className={id} {...props} />
  )
});

BaseComponent.defaultProps = {
  styleSheet: {},
}

// componente receber e repasssar 


/*
const StyledBaseComponent = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet, $uniqueId }) => parseStyleSheet(styleSheet, $uniqueId)}
`;

*/
