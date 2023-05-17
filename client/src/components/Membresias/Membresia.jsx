import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Plata from "../../assets/Plata.png";
import Platino from "../../assets/Platino.png";
import Oro from "../../assets/Oro.png";
import style from "./Membresia.module.css";
import { NavLink } from "react-router-dom";

function PriceWrapper({ children }) {
  return (
    <Box
      width="25%"
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="5xl" fontWeight="bolder" textAlign="center">
          ¡Join one of our plans!
        </Heading>
        <Text
          textAlign="center"
          fontSize="lg"
          fontWeight="bolder"
          color={"gray.500"}
        >
          ¡Choose the one that best suits you and start right away!
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Silver
            </Text>
            <img
              className={style.img2}
              src={Plata}
              alt="Plata"
              width="40%"
              height="40%"
            />
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                U$D
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                30
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /monthly
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Free time.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Bodybuilding.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Rutines every day.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <NavLink to="/home">
                <Button
                  className={style.Button}
                  colorScheme="red"
                  variant="outline"
                >
                  Start now
                </Button>
              </NavLink>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("red.300", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Gold
              </Text>
              <img
                className={style.img}
                src={Oro}
                alt="Oro"
                width="50%"
                height="50%"
              />
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  U$D
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  50
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /monthly
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Bodybuilding and one of our classes of your choice.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free schedule and group classes with schedules.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Rutines every day.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />A
                  professional teacher guiding you.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <NavLink to="/about">
                  <Button className={style.Button} colorScheme="red">
                    Start now
                  </Button>
                </NavLink>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Platinum
            </Text>
            <img
              className={style.img3}
              src={Platino}
              alt="Platino"
              width="55%"
              height="55%"
            />
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                U$D
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                100
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /monthly
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Bodybuilding and three of our classes of your choice
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Free schedule.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Rutines every day.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />A professional
                teacher guiding you.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <NavLink to="/home">
                <Button
                  className={style.Button}
                  colorScheme="red"
                  variant="outline"
                >
                  Start now
                </Button>
              </NavLink>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
