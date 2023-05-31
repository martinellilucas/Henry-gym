import { Box } from "@chakra-ui/react";
import style from "./PostCards.module.css";
import Post from './Post/Post'

export default function PostCards({ ejercicios ,form,setForm}) {
    console.log();
  return (
    <Box
      className={style.cards}
      padding={"2%"}
      width="100%"
      justifyContent="center"
    >
      {ejercicios?.map((ej) => (
        <Box>
          <Post
            form={form}
            setForm={setForm}
            ejercicios={ej}
          />
        </Box>
      ))}
    </Box>
  );
}
