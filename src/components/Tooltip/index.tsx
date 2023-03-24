import React, { CSSProperties, ReactNode } from "react";
import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
import { colors } from "@/styles/colors";

const Tooltip: React.FC<{
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
  label?: string;
}> = ({ style, children, onClick, label, ...rest }) => {
  return (
    <ChakraTooltip
      style={{
        color: colors.grey,
        ...style,
      }}
      label={label}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
