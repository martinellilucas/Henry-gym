import React from "react";
//import styles from "./CardComment.module.css";
import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CommentCard({
  texto,
  nombreClase,
  nombreCliente,
  imagenCliente,
}) {
  return (
    <Center>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        m={"8"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {nombreClase}
          </Text>
          <Text color={"gray.500"}>"{texto}"</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={imagenCliente} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{nombreCliente}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
