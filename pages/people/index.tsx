import Navbar from "@/components/navbar";
import { getUser } from "@/utils/api";
import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import { userProps } from "@/utils/types";
import Link from "next/link";
const index = ({ users }: userProps) => {
  return (
    <>
      <Navbar />
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        p={"3rem"}
        gap="20px"
      >
        {users?.map((el) => {
          return (
            <Card boxShadow={"md"} align={"center"} key={el.id}>
              <CardHeader textAlign={"center"}>
                <Box
                  bg="orange"
                  p="2rem"
                  fontSize={"1.4rem"}
                  color="white"
                  borderRadius={"full"}
                  textAlign={"center"}
                  minW={"100px"}
                  maxW={"100px"}
                  minH={"100px"}
                  maxH={"100px"}
                >
                  {...el?.name.split(" ").map((el, i) => {
                    if (i < 2) {
                      return el[0];
                    } else {
                      return false;
                    }
                  })}
                </Box>
                <Heading size="md"> {el.name}</Heading>
                <Text color={"gray.800"}>{el.username}</Text>
              </CardHeader>
              <CardBody>
                <Text>
                  {el.address.street} {el.address.suite},...
                </Text>
              </CardBody>
              <CardFooter>
                <Link href={`/people/${el.id}`}>
                  <Button colorScheme="orange">Get Todos</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

export async function getServerSideProps() {
  let res = await getUser();
  const users = res;
  return {
    props: {
      users,
    },
  };
}

export default index;
