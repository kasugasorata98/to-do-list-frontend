import { colors } from "@/styles/colors";
import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import {
  HStack,
  Checkbox,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import Text from "@/components/Text";
import { ToDoItem } from "@/entities/to-do-list.entity";
import { ApiService } from "@/api";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Icon from "../Icon";
const ToDo: React.FC<{
  style?: CSSProperties | undefined;
  item: ToDoItem;
}> = ({ item }) => {
  const [isDone, setIsDone] = useState<boolean>(item.isDone);
  const updateList = (title: string, isDone: boolean, toDoListId: string) => {
    ApiService.updateList(title, isDone, toDoListId)
      .then(({ data }) => {
        console.log(data);
        setIsDone(isDone);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <HStack key={item._id} width={"100%"}>
      <Checkbox
        onChange={(e) => {
          updateList(item.title, e.target.checked, item._id);
        }}
        isChecked={isDone}
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
      <Menu>
        <MenuButton>
          <Icon as={BiDotsHorizontalRounded} />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ToDo;
