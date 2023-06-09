import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  HStack,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import React, {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Text from "@/components/Text";
import { ToDoItem } from "@/entities/to-do-list.entity";
import { ApiService } from "@/api";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Icon from "../Icon";
import Modal from "../Modal";

const ToDo: React.FC<{
  style?: CSSProperties | undefined;
  item: ToDoItem;
  setList: Dispatch<SetStateAction<ToDoItem[]>>;
}> = ({ item, setList, ...rest }) => {
  const toast = useToast();
  const [editOverlay, setEditOverlay] = useState<boolean>(false);

  const updateList = (title: string, isDone: boolean, toDoListId: string) => {
    ApiService.updateList(title, isDone, toDoListId)
      .then(({ data }) => {
        console.log(data);
        setList((prevList) => {
          const newList = [...prevList];
          const index = newList.findIndex((list) => list._id === toDoListId);
          newList[index].isDone = isDone;
          newList[index].title = title;
          return newList;
        });
        toast({
          title: "Task has been updated",
          status: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Something Went Wrong",
          status: "error",
        });
      })
      .finally(() => {
        setEditOverlay(false);
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
        toast({
          title: "Task has been deleted",
          status: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Something Went Wrong",
          status: "error",
        });
      });
  };

  return (
    <HStack key={item._id} width={"100%"} {...rest}>
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
          marginTop: -2,
        }}
      >
        {item.title}
      </Text>
      <Modal
        title="Task"
        placeholder="Enter task title"
        header="Edit Title"
        value={item.title}
        isOpen={editOverlay}
        onClose={() => {
          setEditOverlay(false);
        }}
        cancel={{
          title: "Cancel",
          onClick: () => {},
        }}
        confirm={{
          title: "Save",
          onClick: (text) => {
            updateList(text, item.isDone, item._id);
          },
        }}
      />
      <Menu>
        <MenuButton>
          <Icon as={BiDotsHorizontalRounded} />
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              setEditOverlay(true);
            }}
            icon={<EditIcon />}
          >
            Edit
          </MenuItem>
          <MenuItem onClick={() => deleteOne(item._id)} icon={<DeleteIcon />}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ToDo;
