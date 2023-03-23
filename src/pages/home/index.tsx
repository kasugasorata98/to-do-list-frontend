import withAuth from "@/utils/withAuth";
import {
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { DragHandleIcon, SettingsIcon } from "@chakra-ui/icons";
import { colors } from "@/styles/colors";
import Text from "@/components/Text";
import { useEffect, useState } from "react";
import { ApiService } from "@/api";
import { ToDoItem } from "@/entities/to-do-list.entity";
const Home = () => {
  const [list, setList] = useState<Array<ToDoItem>>([]);
  useEffect(() => {
    ApiService.getList()
      .then(({ data }) => {
        setList(data.toDoList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <VStack>
      <InputGroup
        borderColor={colors.dividerColor}
        borderRadius={8}
        background={colors.dividerColor}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<DragHandleIcon color="gray.300" />}
        />
        <Input
          type="text"
          color={colors.textColor}
          placeholder="Add a task..."
        />
      </InputGroup>
      {list.map((item: ToDoItem) => {
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
      })}
    </VStack>
  );
};

export default withAuth(Home);
