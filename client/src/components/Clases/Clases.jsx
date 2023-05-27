import Crossfit from "../../assets/crossfit.jpg";
import Entrenador3 from "../../assets/personaltrainer3.jpg";
import style from "./Clases.module.css";
import Yoga from "../../assets/yoga.jpg";
import Pilates from "../../assets/pilates.jpg";
import Zumba from "../../assets/zumba.jpg";
import Funcional from "../../assets/funcional.jpg";
import Musculacion from "../../assets/musculacion.jpg";
import Entrenador2 from "../../assets/personaltrainer2.jpg";
import Entrenador1 from "../../assets/personaltrainer.jpg";
import Comment from "../Comment/Comment/Comment";

import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function ClasesMembresia() {
  const usuario = useSelector((state) => state.usuario);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByEmail(user?.email));
    console.log(usuario);
  });
  return (
    <Center className={style.boxes}>
      <h1 className={style.title}>OUR CLASSES</h1>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img
            className={style.img}
            src={Crossfit}
            alt="Crossfit"
            layout={"fill"}
          />
        </Box>
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
          <Text color={"gray.500"}>
            <b>CrossFit</b> is a type of functional exercise training,
            constantly varied, executed at high intensity. CrossFit is a total
            physical conditioning and strength program, which is based on the
            increase of the ten most recognized physical capacities by
            specialists in sports training with weights.
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador3} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Sebastian Gaviria</Text>
            <Text color={"gray.500"}>Feb 08, 2023 · 6min read</Text>
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
        className={style.boxMargin}
      >
        <Box
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img src={Funcional} alt="Crossfit" layout={"fill"} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Functional
          </Text>
          <Text color={"gray.500"}>
            <b>Functional</b> training is based on performing exercises that
            adapt to the natural movements of the human body to work muscles and
            joints globally. One of its main advantages is that they fully adapt
            to the physical conditions of each person. that is why it is very
            effective as personal training.
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador1} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Victoria Magallanes</Text>
            <Text color={"gray.500"}>Feb 21, 2023 ·</Text>
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
        className={style.boxMargin}
      >
        <Box
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img src={Yoga} alt="Crossfit" layout={"fill"} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Yoga
          </Text>
          <Text color={"gray.500"}>
            <b>Yoga</b> is a practice that connects the body, breath and mind.
            This practice uses physical postures, breathing exercises, and
            meditation to improve overall health. Yoga developed as a spiritual
            practice thousands of years ago. Nowadays, most people in the west
            who practice yoga do so for exercise or to reduce stress.
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador1} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Victoria Magallanes</Text>
            <Text color={"gray.500"}>Feb 08, 2023 ·</Text>
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
        className={style.boxMargin}
      >
        <Box
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img src={Zumba} alt="Crossfit" layout={"fill"} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Zumba
          </Text>
          <Text color={"gray.500"}>
            <b>Zumba</b> is a sports discipline that is taught in guided classes
            in which aerobic exercises are performed to the rhythm of Latin
            music (merengue, samba, reggaeton, cumbia and salsa) in order to
            lose weight in a fun way and improve the mood of the athletes.
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador2} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Robert Gaviria</Text>
            <Text color={"gray.500"}>Feb 08, 2023 ·</Text>
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
        className={style.boxMargin}
      >
        <Box
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img src={Pilates} alt="Crossfit" layout={"fill"} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Pilates
          </Text>
          <Text color={"gray.500"}>
            <b>Pilates</b> is a physical and mental training system created by
            early 20th century by Joseph Hubertus Pilates. Has as purpose
            strengthen the body and mind from the deepest to the most
            superficial, increasing and uniting dynamism and muscular power with
            mental control, relaxation and breathing.{" "}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador1} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Victoria Magallanes</Text>
            <Text color={"gray.500"}>Feb 23, 2023 · </Text>
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
        className={style.boxMargin}
      >
        <Box
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img src={Musculacion} alt="Crossfit" layout={"fill"} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Musculation
          </Text>
          <Text color={"gray.500"}>
            <b>Musculation</b> is the increase or development of the muscles of
            the body, generally increasing its volume. It is also related to
            definition, to improve its appearance or aesthetics. A good training
            table, prepared by a professional, can help you achieve your
            bodybuilding goals much faster.
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador2} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Robert Gaviria</Text>
            <Text color={"gray.500"}>Feb 21, 2023 ·</Text>
          </Stack>
        </Stack>
      </Box>
      <div className={style.comment}>
        <Comment usuario={usuario} />
      </div>
    </Center>
  );
}
