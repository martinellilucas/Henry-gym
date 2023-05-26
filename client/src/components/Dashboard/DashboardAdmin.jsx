import React, { useEffect } from "react";
import style from "./DashboardAdmin.module.css";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiCompass, FiMenu } from "react-icons/fi";

import Logo from "../../assets/logo.png";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminUser,
  banComentario,
  getClases,
  getClientes,
  getComentarios,
  getUserByEmail,
} from "../../redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import { calculoMembresias } from "./calculoMembresias";
import { banUser } from "../../redux/Actions/index";

const LinkItems = [{ name: "Back to Web Site", icon: FiCompass }];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const admin = useSelector((state) => state.user);
  const { user } = useAuth0();
  const clientes = useSelector((state) => state.clientes);
  const comentarios = useSelector((state) => state.comentarios);
  const clases = useSelector((state) => state.clases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientes());
    dispatch(getUserByEmail(user?.email));
    dispatch(getComentarios());
    dispatch(getClases());
  }, [dispatch, user?.email]);

  return (
    <Box minH="100vh" bg={useColorModeValue("red.100", "gray.900")}>
      <SidebarContent
        fontFamily='"Titillium Web", sans-serif;'
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} admin={admin} />
      <Contenido
        onOpen={onOpen}
        clientes={clientes}
        comentarios={comentarios}
        clases={clases}
      />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Henrys Gym
        </Text>
        <Avatar size={"sm"} src={Logo} />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, url, ...rest }) => {
  return (
    <Link
      href="home"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ admin, onOpen, ...rest }) => {
  return (
    <Flex
      fontFamily='"Titillium Web", sans-serif;'
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }} marginRight="30px">
        <Flex alignItems={"center"}>
          <HStack>
            <Avatar size={"sm"} src={Logo} />

            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{admin?.nombre}</Text>
              <Text fontSize="xs" color="gray.600">
                Admin
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Contenido = ({ clientes, comentarios, clases }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  const dispatch = useDispatch();
  const handleBan = (item) => {
    if (item?.isBanned) dispatch(banUser(item?.email, { isBanned: false }));
    else dispatch(banUser(item?.email, { isBanned: true }));
  };

  const handleAdmin = (item) => {
    if (item?.isAdmin) dispatch(adminUser(item?.email, { isAdmin: false }));
    else dispatch(adminUser(item?.email, { isAdmin: true }));
  };
  const handleBanComent = (item) => {
    if (item?.isBanned) {
      dispatch(banComentario(item?.id, { isBanned: false }));
    } else {
      dispatch(banComentario(item?.id, { isBanned: true }));
      dispatch(banUser(item?.emailCliente, { isBanned: true }));
    }
  };
  return (
    <Box className={style.container}>
      <Text className={style.text1} fontSize="5xl" fontWeight="bold">
        Admin's Dashboard
        <button className={style.refreshButton} onClick={refreshPage}>
          Refresh Data
        </button>
      </Text>
      <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
        Membership stadistics:
      </Text>
      <Box className={style.estadisticas}>
        <Flex align="center" justify="space-evenly" height="300px">
          <CircularProgress
            value={calculoMembresias(clientes, "Silver")}
            color="gray"
            size="200px"
          >
            <CircularProgressLabel>Sil.</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={calculoMembresias(clientes, "Gold")}
            color="gold"
            size="200px"
          >
            <CircularProgressLabel>Gold</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={calculoMembresias(clientes, "Platinum")}
            color="teal"
            size="200px"
          >
            <CircularProgressLabel>Plat.</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Box>
      <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
        Clients List:
      </Text>
      <Box className={style.listado}>
        <table className={style.tabla}>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Suscription</th>
              <th>Is Banned</th>
              <th>Is Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clientes?.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.email}</td>
                <td>{item.tipoDeSuscripcion}</td>
                <td>{item.isBanned.toString()}</td>
                <td>{item.isAdmin.toString()}</td>
                <td className={style.buttonO}>
                  <button
                    className={style.button3}
                    onClick={() => handleBan(item)}
                  >
                    BAN
                  </button>
                  <button
                    className={style.button3}
                    onClick={() => handleAdmin(item)}
                  >
                    ADM
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
        Classes
      </Text>
      <Box className={style.listado}>
        <table className={style.tabla}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Days</th>
              <th>Start time</th>
            </tr>
          </thead>
          <tbody>
            {clases?.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre.toUpperCase()}</td>
                <td>{item.dias.join(" ")}</td>
                <td>{item.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
        Client Comments
      </Text>
      <Box className={style.listado}>
        <table className={style.tabla}>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Class</th>
              <th>Comment</th>
              <th>Is Banned</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comentarios?.map((item, index) => (
              <tr key={index}>
                <td>{item.nombreCliente}</td>
                <td>{item.emailCliente}</td>
                <td>{item.nombreClase}</td>
                <textarea disabled={true}>{item.texto}</textarea>
                <td>{item.isBanned.toString()}</td>
                <td>
                  <button
                    onClick={() => handleBanComent(item)}
                    className={style.button3}
                  >
                    BAN
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};
