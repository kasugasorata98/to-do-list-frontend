import { colors } from "@/styles/colors";
import { Box } from "@chakra-ui/react";

import React, { CSSProperties, ReactNode } from "react";

const MainLayout: React.FC<{
  children: ReactNode;
  style?: CSSProperties;
}> = ({ children, style }) => {
  return (
    <Box
      height={"100%"}
      bg={colors.grey}
      display={"flex"}
      justifyContent="center"
      style={{ ...style }}
    >
      {children}
    </Box>
  );
};
export default MainLayout;
