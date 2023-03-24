import withAuth from "@/utils/withAuth";
import { Box, Tooltip, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ApiService } from "@/api";
import { ToDoItem } from "@/entities/to-do-list.entity";
import AddTask from "@/components/AddTaskInput";
import ToDo from "@/components/ToDo";
import { GoSignOut } from "react-icons/go";
import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import Icon from "@/components/Icon";
import { Constants } from "@/constants";

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

  const addToList = (title: string) => {
    ApiService.addToList(title)
      .then(({ data }) => {
        setList([...list, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    LocalStorageHandler.removeUserToken();
    window.location.href = Constants.ENDPOINTS.logout;
  };

  return (
    <VStack paddingBlock={20}>
      <Tooltip label="Sign out">
        <Box alignSelf={"end"} position={"absolute"} right={5} top={5}>
          <Icon as={GoSignOut} onClick={signOut} />
        </Box>
      </Tooltip>
      <AddTask onEnterPressed={(text) => addToList(text)} />
      {list.map((item: ToDoItem) => {
        return <ToDo key={item._id} item={item} />;
      })}
    </VStack>
  );
};

export default withAuth(Home);
