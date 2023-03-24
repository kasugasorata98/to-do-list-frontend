import React, { CSSProperties, ReactNode } from "react";
import { Text as ChakraText } from "@chakra-ui/react";
import { colors } from "@/styles/colors";

const Text: React.FC<{
  style?: CSSProperties | undefined;
  children?: ReactNode;
}> = ({ style, children, ...rest }) => {
  return (
    <ChakraText
      style={{
        color: colors.textColor,
        ...style,
      }}
      {...rest}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
