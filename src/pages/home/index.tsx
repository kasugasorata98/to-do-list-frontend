import withAuth from "@/utils/withAuth";
import { Box, HStack, Tooltip, useToast, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ApiService } from "@/api";
import { ToDoItem } from "@/entities/to-do-list.entity";
import AddTask from "@/components/AddTaskInput";
import ToDo from "@/components/ToDo";
import { GoSignOut } from "react-icons/go";
import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import Icon from "@/components/Icon";
import { Constants } from "@/constants";
import { DeleteIcon } from "@chakra-ui/icons";
import AlertDialog from "@/components/AlertDialog";
import { type } from "os";
import { AxiosError } from "axios";

const Home = () => {
  const [list, setList] = useState<Array<ToDoItem>>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const toast = useToast();
  useEffect(() => {
    ApiService.getList()
      .then(({ data }) => {
        setList(data.toDoList);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Something Went Wrong",
          status: "error",
        });
      });
  }, []);

  const addToList = (title: string) => {
    ApiService.addToList(title)
      .then(({ data }) => {
        setList([...list, data]);
        toast({
          title: "Task has been added into the list",
          status: "success",
        });
      })
      .catch((err: AxiosError) => {
        console.log(err);
        toast({
          title: "Something Went Wrong",
          status: "error",
        });
      });
  };

  const deleteAll = () => {
    ApiService.deleteList("DELETE_ALL")
      .then(({ data }) => {
        console.log(data);
        setList([]);
        toast({
          title: "All task has been deleted",
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
        setOpenDialog(false);
      });
  };

  const signOut = () => {
    LocalStorageHandler.removeUserToken();
    window.location.href = Constants.ENDPOINTS.logout;
  };

  return (
    <VStack paddingBlock={20}>
      <AlertDialog
        isOpen={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
        header="Delete all tasks?"
        description="This will delete all tasks"
        confirm={{
          title: "Confirm",
          onClick: () => {
            deleteAll();
          },
        }}
        cancel={{
          title: "Cancel",
          onClick: () => {
            setOpenDialog(false);
          },
        }}
      />
      <Tooltip label="Sign out">
        <Box alignSelf={"end"} position={"absolute"} right={5} top={5}>
          <Icon as={GoSignOut} onClick={signOut} />
        </Box>
      </Tooltip>
      <HStack width={"100%"}>
        <AddTask onEnterPressed={(text) => addToList(text)} />
        <Tooltip label="Delete all">
          <Box display={list.length > 0 ? "flex" : "none"}>
            <Icon
              style={{
                alignSelf: "center",
              }}
              as={DeleteIcon}
              onClick={() => setOpenDialog(true)}
            />
          </Box>
        </Tooltip>
      </HStack>
      {list.map((item: ToDoItem) => {
        return <ToDo key={item._id} item={item} setList={setList} />;
      })}
    </VStack>
  );
};

export default withAuth(Home);
