import { colors } from "@/styles/colors";
import { Icon as ChakraIcon } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { IconType } from "react-icons";

const Icon: React.FC<{
  style?: CSSProperties;
  onClick?: () => void;
  as?: IconType | undefined;
}> = ({ style, onClick, as }) => {
  return (
    <ChakraIcon
      _hover={{
        cursor: "pointer",
      }}
      style={style}
      onClick={onClick}
      alignSelf={"end"}
      boxSize="5"
      color={colors.textColor}
      as={as}
    />
  );
};

export default Icon;
