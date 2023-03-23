import withAuth from "@/utils/withAuth";
import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ApiService } from "@/api";
import { ToDoItem } from "@/entities/to-do-list.entity";
import AddTask from "@/components/AddTaskInput";
import ToDo from "@/components/ToDo";
import { GoSignOut } from "react-icons/go";
import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import { useRouter } from "next/router";
import Icon from "@/components/Icon";

const Home = () => {
  const [list, setList] = useState<Array<ToDoItem>>([]);
  const router = useRouter();
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
    router.push("/login");
  };

  return (
    <VStack paddingBlock={20}>
      <Icon as={GoSignOut} onClick={signOut} />
      <AddTask onEnterPressed={(text) => addToList(text)} />
      {list.map((item: ToDoItem) => {
        return <ToDo key={item._id} item={item} />;
      })}
    </VStack>
  );
};

export default withAuth(Home);
