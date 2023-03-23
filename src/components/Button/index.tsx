import { CSSProperties, ReactNode } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { colors } from "@/styles/colors";

const Button: React.FC<{
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
}> = ({ style, children, onClick }) => {
  return (
    <ChakraButton
      style={{
        color: colors.grey,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
