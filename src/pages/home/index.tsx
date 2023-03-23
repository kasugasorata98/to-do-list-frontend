import withAuth from "@/utils/withAuth";
import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ApiService } from "@/api";
import { ToDoItem } from "@/entities/to-do-list.entity";
import AddTask from "@/components/AddTaskInput";
import ToDo from "@/components/ToDo";
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
        setList({
          ...list,
          ...data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <VStack paddingBlock={20}>
      <AddTask onEnterPressed={(text) => addToList(text)} />
      {list.map((item: ToDoItem) => {
        return <ToDo key={item._id} item={item} />;
      })}
    </VStack>
  );
};

export default withAuth(Home);
