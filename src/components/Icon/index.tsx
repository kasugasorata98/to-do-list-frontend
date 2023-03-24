import { colors } from "@/styles/colors";
import { Icon as ChakraIcon } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { IconType } from "react-icons";
import * as _chakra_ui_system from "@chakra-ui/system";
import * as _chakra_ui_icon from "@chakra-ui/icon";

const Icon: React.FC<{
  style?: CSSProperties;
  onClick?: () => void;
  as?:
    | IconType
    | _chakra_ui_system.ComponentWithAs<"svg", _chakra_ui_icon.IconProps>
    | undefined;
}> = ({ style, onClick, as, ...rest }) => {
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
      {...rest}
    />
  );
};

export default Icon;
