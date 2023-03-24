import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  HStack,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";
import Text from "@/components/Text";
import { ToDoItem } from "@/entities/to-do-list.entity";
import { ApiService } from "@/api";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Icon from "../Icon";

const ToDo: React.FC<{
  style?: CSSProperties | undefined;
  item: ToDoItem;
  setList: Dispatch<SetStateAction<ToDoItem[]>>;
}> = ({ item, setList }) => {
  const updateList = (title: string, isDone: boolean, toDoListId: string) => {
    ApiService.updateList(title, isDone, toDoListId)
      .then(({ data }) => {
        console.log(data);
        setList((prevList) => {
          const newList = [...prevList];
          const index = newList.findIndex((list) => list._id === toDoListId);
          newList[index].isDone = isDone;
          return newList;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOne = (_id: string) => {
    ApiService.deleteList("DELETE_ONE", _id)
      .then(({ data }) => {
        console.log(data);
        setList((prevList) => {
          const newList = [...prevList];
          return newList.filter((list) => list._id !== _id);
        });
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
        isChecked={item.isDone}
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
          <MenuItem onClick={() => deleteOne(item._id)} icon={<DeleteIcon />}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ToDo;
