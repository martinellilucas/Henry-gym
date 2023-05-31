import crossfit from "../../assets/crossfit.jpg";
import Entrenador3 from "../../assets/personaltrainer3.jpg";
import style from "./ClasesHome.module.css";
import yoga from "../../assets/yoga.jpg";
import pilates from "../../assets/pilates.jpg";
import zumba from "../../assets/zumba.jpg";
import functional from "../../assets/funcional.jpg";
import musculacion from "../../assets/musculacion.jpg";
import Entrenador2 from "../../assets/personaltrainer2.jpg";
import Entrenador1 from "../../assets/personaltrainer.jpg";

import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Radio,
  RadioGroup,
  useToast,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  assignClaseToCliente,
  getClases,
  getClasexCliente,
  getUserByEmail,
} from "../../redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function ClasesHome() {
  const initRef = React.useRef();
  const toast = useToast();
  const { user } = useAuth0();
  const [selectedClaseId, setSelectedClaseId] = useState(null);
  const clasesxCliente = useSelector((state) => state.clasesxCliente);
  const client = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const clases = useSelector((state) => state.clases);

  useEffect(() => {
    dispatch(getClases());
    dispatch(getUserByEmail(user?.email));
  }, [dispatch, user?.email]);

  const soloNombres = [...new Set(clases.map((clase) => clase.nombre))];
  const colorModeValue = useColorModeValue("white", "gray.900");

  const dataClases = [
    { nombre: "crossfit", imagen: crossfit },
    { nombre: "functional", imagen: functional },
    { nombre: "yoga", imagen: yoga },
    { nombre: "zumba", imagen: zumba },
    { nombre: "pilates", imagen: pilates },
    { nombre: "musculacion", imagen: musculacion },
  ];

  const entrenadores = {
    crossfit: { imagen: Entrenador3, nombre: "Sebastian Gaviria" },
    functional: { imagen: Entrenador3, nombre: "Sebastian Gaviria" },
    yoga: { imagen: Entrenador1, nombre: "Victoria Magallanes" },
    pilates: { imagen: Entrenador1, nombre: "Victoria Magallanes" },
    zumba: { imagen: Entrenador2, nombre: "Robert Gaviria" },
    musculacion: { imagen: Entrenador2, nombre: "Robert Gaviria" },
    default: { imagen: Entrenador3, nombre: "Sebastian Gaviria" },
  };

  const goldText = clasesxCliente.length >= 1 ? "Max subs reached" : "Confirm";
  const platText = clasesxCliente.length >= 3 ? "Max subs reached" : "Confirm";

  const handleConfirm = (clienteId, claseId) => {
    dispatch(assignClaseToCliente(clienteId, claseId));
    showToast();
    setSelectedClaseId(null);
  };

  const showToast = () => {
    toast({
      title: "Subscription Successful",
      description: "Your subscription has been successfully completed.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Center className={style.boxes}>
      {soloNombres.map((name) => {
        const claseImage = dataClases.find(
          (clase) => clase.nombre === name
        )?.imagen;
        const entrenador = entrenadores[name] || entrenadores.default;
        return (
          <Box
            maxW={"445px"}
            bg={colorModeValue}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            className={style.boxMargin}
          >
            <Box
              className={style.classImage}
              h={"100%"}
              bg={"gray.100"}
              mt={-6}
              mx={-77}
              mb={6}
              pos={"relative"}
            >
              <img
                src={claseImage ? claseImage : crossfit}
                alt={name}
                layout={"fill"}
              />
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
                textTransform={"capitalize"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar h={"100%"} src={entrenador.imagen} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{entrenador.nombre}</Text>
              </Stack>
              <Popover>
                {({ onClose }) => (
                  <>
                    <PopoverTrigger>
                      <Button
                        className={style.buttom}
                        onClick={() => dispatch(getClasexCliente(client.id))}
                        backgroundColor="#aaaaaa"
                      >
                        Subscribe
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Select your schedule</PopoverHeader>
                      <PopoverBody>
                        <RadioGroup defaultValue={null}>
                          <Stack spacing={2}>
                            {clases
                              .filter((clase) => clase.nombre === name)
                              .map((clase) => (
                                <Radio
                                  value={clase.id}
                                  onChange={(e) =>
                                    setSelectedClaseId(e.target.value)
                                  }
                                >
                                  {clase.dias.map((dia) => `${dia} `)}
                                  {clase.horario.slice(0, 5)}HS
                                </Radio>
                              ))}
                          </Stack>
                        </RadioGroup>

                        {client?.tipoDeSuscripcion === "Silver" ? (
                          <NavLink to="/memberships">
                            <Button
                              mt={4}
                              color="gray.300"
                              backgroundColor="#ac2e2ece"
                            >
                              Upgrade your membership.
                            </Button>
                          </NavLink>
                        ) : (
                          <></>
                        )}
                        {client?.tipoDeSuscripcion === "Gold" ? (
                          <Button
                            onClick={() => {
                              handleConfirm(client.id, selectedClaseId);
                              onClose();
                            }}
                            mt={4}
                            colorScheme="blue"
                            isDisabled={
                              !selectedClaseId || clasesxCliente.length >= 1
                            }
                            ref={initRef}
                          >
                            {goldText}
                          </Button>
                        ) : (
                          <></>
                        )}
                        {client?.tipoDeSuscripcion === "Platinum" ? (
                          <Button
                            onClick={() => {
                              handleConfirm(client.id, selectedClaseId);
                              onClose();
                            }}
                            mt={4}
                            colorScheme="blue"
                            isDisabled={
                              !selectedClaseId || clasesxCliente.length >= 3
                            }
                            ref={initRef}
                          >
                            {platText}
                          </Button>
                        ) : (
                          <></>
                        )}
                      </PopoverBody>
                    </PopoverContent>
                  </>
                )}
              </Popover>
            </Stack>
          </Box>
        );
      })}
    </Center>
  );
}
