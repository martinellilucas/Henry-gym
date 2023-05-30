import React, { useEffect, useState } from "react";
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
  Button,
  Divider,
} from "@chakra-ui/react";
import { FiCompass, FiMenu } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  adminUser,
  banComentario,
  deleteClase,
  getClases,
  getClientes,
  getComentarios,
  getUserByEmail,
  searchClaseByName,
  searchClientByEmail,
  searchComentarioByName,
} from "../../redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import { calculoMembresias } from "./calculoMembresias";
import { banUser } from "../../redux/Actions/index";
import Swal from "sweetalert2";
import Search from "./Search/Search";

const LinkItems = [
  {
    name: "Back to Web Site",
    icon: FiCompass,
    url: "https://henry-gym.onrender.com/home",
  },
  { name: "Clients", url: "https://henry-gym.onrender.com/dashboard/clients" },
  {
    name: "Membership Stadistics",
    url: "https://henry-gym.onrender.com/dashboard/stadistics",
  },
  { name: "Classes", url: "https://henry-gym.onrender.com/dashboard/classes" },
  {
    name: "Comments",
    url: "https://henry-gym.onrender.com/dashboard/comments",
  },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const admin = useSelector((state) => state.user);
  const { user } = useAuth0();
  const clientes = useSelector((state) => state.clientes);
  const comentarios = useSelector((state) => state.comentarios);
  const clases = useSelector((state) => state.clases);
  const [client, setClient] = useState("");
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [clase, setClase] = useState("");
  const [comentario, setComentario] = useState("");
  useEffect(() => {
    dispatch(getClientes());
    dispatch(getUserByEmail(user?.email));
    dispatch(getComentarios());
    dispatch(getClases());
  }, [dispatch, user?.email]);

  const handleSubmitClient = (e) => {
    e.preventDefault();
    dispatch(searchClientByEmail(client));
  };
  const handleSubmitClase = (e) => {
    e.preventDefault();
    dispatch(searchClaseByName(clase));
  };
  const handleSubmitComentario = (e) => {
    e.preventDefault();
    dispatch(searchComentarioByName(comentario));
  };
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

      <MobileNav onOpen={onOpen} admin={admin} />
      <Contenido
        onOpen={onOpen}
        clientes={clientes}
        comentarios={comentarios}
        clases={clases}
        pathname={pathname}
        client={client}
        setClient={setClient}
        handleSubmitClient={handleSubmitClient}
        clase={clase}
        setClase={setClase}
        handleSubmitClase={handleSubmitClase}
        comentario={comentario}
        setComentario={setComentario}
        handleSubmitComentario={handleSubmitComentario}
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
      href={url}
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
      <Divider></Divider>
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
      <Divider orientation="vertical" marginRight={"30px"}></Divider>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        marginLeft="-100px"
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

const Contenido = ({
  clientes,
  comentarios,
  clases,
  pathname,
  client,
  setClient,
  handleSubmitClient,
  clase,
  setClase,
  handleSubmitClase,
  comentario,
  setComentario,
  handleSubmitComentario,
}) => {
  function refreshPage() {
    window.location.reload(false);
  }
  const dispatch = useDispatch();

  const handleBan = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to ban/unban the user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ban the user!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Banned", "The user has been banned/unbanned", "success");
        if (item?.isBanned) dispatch(banUser(item?.email, { isBanned: false }));
        else dispatch(banUser(item?.email, { isBanned: true }));
      }
    });
  };

  const handleAdmin = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You about to make a user admin or remove his admin privileges",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Done", "The user is / is not now an admin", "success");
        if (item?.isAdmin) dispatch(adminUser(item?.email, { isAdmin: false }));
        else dispatch(adminUser(item?.email, { isAdmin: true }));
      }
    });
  };
  const handleBanComent = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ban it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "The comment is not visible in the page and the user has been banned",
          "success"
        );
        if (item?.isBanned) {
          dispatch(banComentario(item?.id, { isBanned: false }));
        } else {
          dispatch(banComentario(item?.id, { isBanned: true }));
          dispatch(banUser(item?.emailCliente, { isBanned: true }));
        }
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "The class has been deleted from the data base",
          "success"
        );
        dispatch(deleteClase(id));
      }
    });
  };
  return (
    <Box className={style.container}>
      <div className={style.titleContainer}>
        <Text className={style.title}>Admin's Dashboard</Text>

        <Button
          colorScheme="blue"
          className={style.refreshButton}
          onClick={refreshPage}
        >
          Refresh Data
        </Button>
      </div>
      <Divider
        marginTop={"50px"}
        w={"80%"}
        border={"5px solid white"}
      ></Divider>
      {pathname === "/dashboard/stadistics" || pathname === "/dashboard" ? (
        <div className={style.titleestadisticas}>
          <div>
            <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
              Membership stadistics:
            </Text>
          </div>
          <div>
            <Box>
              <Flex align="center" height="300px">
                
                <div className={style.circulo}>
                  
                <CircularProgress
                  value={calculoMembresias(clientes, "Silver")}
                  color="gray"
                  size="200px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgressLabel>Sil.</CircularProgressLabel>
                </CircularProgress>
                <CircularProgress
                  value={calculoMembresias(clientes, "Gold")}
                  color="gold"
                  size="200px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgressLabel>Gold</CircularProgressLabel>
                </CircularProgress>
                <CircularProgress
                  value={calculoMembresias(clientes, "Platinum")}
                  color="teal"
                  size="200px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgressLabel>Plat.</CircularProgressLabel>
                </CircularProgress>
                </div>
              </Flex>
            </Box>
          </div>
        </div>
      ) : (
        <></>
      )}
      {pathname === "/dashboard/clients" ? (
        <>
          <div className={style.clientSearch}>
            <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
              Clients List:
            </Text>
            <Search
              search={client}
              setSearch={setClient}
              handleSubmit={handleSubmitClient}
            />
          </div>
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
                    <td>{item?.nombre}</td>
                    <td>{item?.email}</td>
                    <td>{item?.tipoDeSuscripcion}</td>
                    <td>{item?.isBanned.toString()}</td>
                    <td>{item?.isAdmin.toString()}</td>
                    <td className={style.buttonO}>
                      <Button colorScheme="red" onClick={() => handleBan(item)}>
                        BAN
                      </Button>
                      <Button
                        colorScheme="green"
                        onClick={() => handleAdmin(item)}
                      >
                        ADMIN
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </>
      ) : (
        <></>
      )}
      {pathname === "/dashboard/classes" ? (
        <>
          <div className={style.clientSearch}>
            <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
              Classes:
            </Text>
            <Search
              search={clase}
              setSearch={setClase}
              handleSubmit={handleSubmitClase}
            />
          </div>
          <Box className={style.listado}>
            <table className={style.tabla}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Days</th>
                  <th>Start time</th>
                  <th>Delete Class</th>
                </tr>
              </thead>
              <tbody>
                {clases?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.nombre.toUpperCase()}</td>
                    <td>{item?.dias.join(" ")}</td>
                    <td>{item?.horario}</td>
                    <td className={style.button}>
                      {" "}
                      <Button
                        colorScheme="red"
                        onClick={() => handleDelete(item.id)}
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </>
      ) : (
        <></>
      )}
      {pathname === "/dashboard/comments" ? (
        <>
          <div className={style.clientSearch}>
            <Text className={style.clientlist} fontSize="2xl" fontWeight="bold">
              Clients Comments:
            </Text>
            <Search
              search={comentario}
              setSearch={setComentario}
              handleSubmit={handleSubmitComentario}
            />
          </div>
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
                    <td>{item?.nombreCliente}</td>
                    <td>{item?.emailCliente}</td>
                    <td>{item.nombreClase}</td>
                    <textarea disabled={true}>{item?.texto}</textarea>
                    <td>{item?.isBanned.toString()}</td>
                    <td>
                      <Button
                        onClick={() => handleBanComent(item)}
                        colorScheme="red"
                      >
                        BAN
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
