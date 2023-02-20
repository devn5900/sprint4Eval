import Navbar from "@/components/navbar";
import { getTodo, getUser } from "@/utils/api";
import { staticPropT, todosT } from "@/utils/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Container, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
const Todos = () => {
  const router = useRouter();
  const [todos, setTodo] = useState<todosT[]>([]);
  useEffect(() => {
    getTodo(Number(router.query.id)).then((res) => {
      setTodo(res);
    });
  }, [router.query.id]);

  return (
    <>
      <Navbar />
      <Container textAlign={"center"}>
        <Heading>User Id: {router.query.id}</Heading>
        <List spacing={3}>
          {todos.length > 0 &&
            todos?.map((el) => {
              return (
                <ListItem key={el.id} boxShadow={"lg"} p="1rem">
                  <ListIcon
                    as={CheckCircleIcon}
                    color={el.completed ? "green.500" : "red.500"}
                  />
                  {el.title}
                </ListItem>
              );
            })}
        </List>
      </Container>
    </>
  );
};

export default Todos;
