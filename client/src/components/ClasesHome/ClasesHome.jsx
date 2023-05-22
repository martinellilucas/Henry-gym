import Crossfit from "../../assets/crossfit.jpg";
import Entrenador3 from "../../assets/personaltrainer3.jpg";
import style from "../Clases/Clases.module.css";
import Yoga from "../../assets/yoga.jpg";
import Pilates from "../../assets/pilates.jpg";
import Zumba from "../../assets/zumba.jpg";
import Funcional from "../../assets/funcional.jpg";
import Musculacion from "../../assets/musculacion.jpg";
import Entrenador2 from "../../assets/personaltrainer2.jpg";
import Entrenador1 from "../../assets/personaltrainer.jpg";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ClasesHome() {
  return (
    <Center className={style.boxes}>
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
          <img src={Crossfit} alt="Crossfit" layout={"fill"} />
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
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={Entrenador2} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Robert Gaviria</Text>
            <Text color={"gray.500"}>Feb 21, 2023 ·</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
