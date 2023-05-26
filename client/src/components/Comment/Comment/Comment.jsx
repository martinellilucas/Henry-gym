import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "../Cardcomment/CardComment";
import PostComment from "../CrearComment/PostComment";
import { getComentarios } from "../../../redux/Actions";
import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import styles from "./Comment.module.css";

export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comentarios);
  console.log(comments);

  useEffect(() => {
    dispatch(getComentarios());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.containerReviews}>
        <h2 className={styles.reviews}>REVIEWS</h2>
      </div>
        <div className={styles.postBoton}>
          <PostComment />
        </div>

      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentCard
              id={comment.id}
              texto={comment.texto}
              ClaseID={comment.ClaseID}
              nombreCliente={comment.nombreCliente}
            />
          </div>
        ))}
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
                Crossfit
              </Text>
              <Text color={"gray.500"}>"Muy buena la clase"</Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar src={""} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Sebastian Gaviria</Text>
              </Stack>
            </Stack>
          </Box>
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
                Musculacion
              </Text>
              <Text color={"gray.500"}>
                "Los elementos de muy mala calidad"
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar src={""} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Lucas M</Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </div>
    </div>
  );
}
