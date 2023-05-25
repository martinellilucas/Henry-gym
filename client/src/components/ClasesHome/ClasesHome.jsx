import Crossfit from "../../assets/crossfit.jpg";
import Entrenador3 from "../../assets/personaltrainer3.jpg";
import style from "./ClasesHome.module.css";
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
  Button,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClases } from "../../redux/Actions";

export default function ClasesHome() {
  const client = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const clases = useSelector((state) => state.clases);
  const crossfit = clases.filter((clases) => clases.nombre === "crossfit");
  const functional = clases.filter((clases) => clases.nombre === "functional");
  const yoga = clases.filter((clases) => clases.nombre === "yoga");
  const zumba = clases.filter((clases) => clases.nombre === "zumba");
  const pilates = clases.filter((clases) => clases.nombre === "pilates");
  const musculacion = clases.filter(
    (clases) => clases.nombre === "musculacion"
  );
  useEffect(() => {
    dispatch(getClases());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Center className={style.boxes}>
      <Box
        maxW={"445px"}
        w={"55%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          className={style.classImage}
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-77}
          mb={6}
          pos={"relative"}
        >
          <img src={Crossfit} alt="Crossfit" layout={"fill"} />
          <Box
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
            className={style.overlay}
            _hover={{ opacity: 1 }}
          >
            <Text className={style.overlayText}>Learn More</Text>
          </Box>
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
            <Text color={"gray.500"}>Feb 08, 2023 ·</Text>
          </Stack>
          <Popover>
            <PopoverTrigger>
              <Button backgroundColor="#aaaaaa">Subscribe</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select your schedule</PopoverHeader>
              <PopoverBody>
                <RadioGroup defaultValue={null}>
                  <Stack spacing={2}>
                    {crossfit.map((clase) => {
                      return (
                        <Radio value={clase.id}>
                          {clase.dias.map((dia) => {
                            return `${dia} `;
                          })}
                          {clase.horario}HS
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
                {client?.tipoDeSuscripcion === "Silver" ? (
                  <text mt={4} colorScheme="red">
                    Upgrade your membership to subscribe.
                  </text>
                ) : (
                  <Button mt={4} colorScheme="blue">
                    Confirm
                  </Button>
                )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>

      <Box
        maxW={"445px"}
        w={"55%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          className={style.classImage}
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-77}
          mb={6}
          pos={"relative"}
        >
          <img src={Funcional} alt="Crossfit" layout={"fill"} />{" "}
          <Box
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
            className={style.overlay}
            _hover={{ opacity: 1 }}
          >
            <Text className={style.overlayText}>Learn More</Text>
          </Box>
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
          <Avatar src={Entrenador3} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Sebastian Gaviria</Text>
            <Text color={"gray.500"}>Feb 21, 2023 ·</Text>
          </Stack>
          <Popover>
            <PopoverTrigger>
              <Button backgroundColor={"#aaaaaa"}>Subscribe</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select your schedule</PopoverHeader>
              <PopoverBody>
                <RadioGroup defaultValue={null}>
                  <Stack spacing={2}>
                    {functional.map((clase) => {
                      return (
                        <Radio value={clase.id}>
                          {clase.dias.map((dia) => {
                            return `${dia} `;
                          })}
                          {clase.horario}HS
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
                <Button mt={4} colorScheme="blue">
                  Confirm
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>
      <Box
        maxW={"445px"}
        w={"55%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          className={style.classImage}
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-77}
          mb={6}
          pos={"relative"}
        >
          <img src={Yoga} alt="Crossfit" layout={"fill"} />{" "}
          <Box
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
            className={style.overlay}
            _hover={{ opacity: 1 }}
          >
            <Text className={style.overlayText}>Learn More</Text>
          </Box>
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
          <Popover>
            <PopoverTrigger>
              <Button backgroundColor={"#aaaaaa"}>Subscribe</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select your schedule</PopoverHeader>
              <PopoverBody>
                <RadioGroup defaultValue={null}>
                  <Stack spacing={2}>
                    {yoga.map((clase) => {
                      return (
                        <Radio value={clase.id}>
                          {clase.dias.map((dia) => {
                            return `${dia} `;
                          })}
                          {clase.horario}HS
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
                <Button mt={4} colorScheme="blue">
                  Confirm
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>
      <Box
        maxW={"445px"}
        w={"55%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          className={style.classImage}
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-77}
          mb={6}
          pos={"relative"}
        >
          <img src={Zumba} alt="Crossfit" layout={"fill"} />{" "}
          <Box
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
            className={style.overlay}
            _hover={{ opacity: 1 }}
          >
            <Text className={style.overlayText}>Learn More</Text>
          </Box>
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
            <Text color={"gray.500"}>Feb 08, 2023· </Text>
          </Stack>
          <Popover>
            <PopoverTrigger>
              <Button backgroundColor={"#aaaaaa"}>Subscribe</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select your schedule</PopoverHeader>
              <PopoverBody>
                <RadioGroup defaultValue={null}>
                  <Stack spacing={2}>
                    {zumba.map((clase) => {
                      return (
                        <Radio value={clase.id}>
                          {clase.dias.map((dia) => {
                            return `${dia} `;
                          })}
                          {clase.horario}HS
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
                <Button mt={4} colorScheme="blue">
                  Confirm
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>
      <Box
        maxW={"445px"}
        w={"55%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          className={style.classImage}
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-77}
          mb={6}
          pos={"relative"}
        >
          <img src={Pilates} alt="Crossfit" layout={"fill"} />{" "}
          <Box
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
            className={style.overlay}
            _hover={{ opacity: 1 }}
          >
            <Text className={style.overlayText}>Learn More</Text>
          </Box>
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
          <Popover>
            <PopoverTrigger>
              <Button backgroundColor={"#aaaaaa"}>Subscribe</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select your schedule</PopoverHeader>
              <PopoverBody>
                <RadioGroup defaultValue={null}>
                  <Stack spacing={2}>
                    {pilates.map((clase) => {
                      return (
                        <Radio value={clase.id}>
                          {clase.dias.map((dia) => {
                            return `${dia} `;
                          })}
                          {clase.horario}HS
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
                <Button mt={4} colorScheme="blue">
                  Confirm
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>

      <Box
        maxW={"445px"}
        w={"55%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className={style.boxMargin}
      >
        <Box
          className={style.classImage}
          h={"295px"}
          bg={"gray.100"}
          mt={-6}
          mx={-77}
          mb={6}
          pos={"relative"}
        >
          <img src={Musculacion} alt="Crossfit" layout={"fill"} />
          <Box
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
            className={style.overlay}
            _hover={{ opacity: 1 }}
          >
            <Text className={style.overlayText}>Learn More</Text>
          </Box>
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
            <Text color={"gray.500"}>Feb 21, 2023·</Text>
          </Stack>
          <Popover>
            <PopoverTrigger>
              <Button backgroundColor={"#aaaaaa"}>Subscribe</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select your schedule</PopoverHeader>
              <PopoverBody>
                <RadioGroup defaultValue={null}>
                  <Stack spacing={2}>
                    {musculacion.map((clase) => {
                      return (
                        <Radio value={clase.id}>
                          {clase.dias.map((dia) => {
                            return `${dia} `;
                          })}
                          {clase.horario}HS
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
                <Button mt={4} colorScheme="blue">
                  Confirm
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>
    </Center>
  );
}
