import React, { CSSProperties, ReactNode } from "react";
import { Text as ChakraText } from "@chakra-ui/react";
import { colors } from "@/styles/colors";

const Text: React.FC<{
  style?: CSSProperties | undefined;
  children?: ReactNode;
}> = ({ style, children }) => {
  return (
    <ChakraText
      style={{
        color: colors.textColor,
        ...style,
      }}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
