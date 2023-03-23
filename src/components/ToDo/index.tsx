import { colors } from "@/styles/colors";
import { SettingsIcon } from "@chakra-ui/icons";
import { HStack, Checkbox } from "@chakra-ui/react";
import { CSSProperties } from "react";
import Text from "@/components/Text";
import { ToDoItem } from "@/entities/to-do-list.entity";
const ToDo: React.FC<{
  style?: CSSProperties | undefined;
  item: ToDoItem;
}> = ({ item }) => {
  return (
    <HStack key={item._id} width={"100%"}>
      <Checkbox
        checked={item.isDone}
        style={{
          alignSelf: "start",
          marginTop: 4,
          marginLeft: 2,
        }}
      />
      <Text
        style={{
          width: "100%",
        }}
      >
        {item.title}
      </Text>
      <SettingsIcon
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => console.log}
        color={colors.textColor}
      />
    </HStack>
  );
};

export default ToDo;
