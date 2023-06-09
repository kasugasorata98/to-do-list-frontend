import { CSSProperties, ReactNode } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import React from "react";

const Button: React.FC<{
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
}> = ({ style, children, onClick, ...rest }) => {
  return (
    <ChakraButton
      style={{
        color: colors.grey,
        ...style,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
