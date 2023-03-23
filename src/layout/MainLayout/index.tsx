import { colors } from "@/styles/colors";
import { Box } from "@chakra-ui/react";

import React, { ReactNode } from "react";

const MainLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Box bg={colors.grey} display={"flex"}>
      {children}
    </Box>
  );
};
export default MainLayout;
