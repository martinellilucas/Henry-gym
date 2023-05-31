import React, { useEffect } from "react";
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
  Divider,
} from "@chakra-ui/react";
import { FiCompass, FiLink2, FiMenu } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getClases,
  getClientes,
  getComentarios,
  getUserByEmail,
} from "../../redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";

import Contenido from "./Contenido/Contenido";

const LinkItems = [
  {
    name: "Back to Web Site",
    icon: FiCompass,
    url: "https://henrygym.onrender.com/home",
  },
  {
    name: "Clients",
    icon: FiLink2,
    url: "https://henrygym.onrender.com/dashboard/clients",
  },
  {
    name: "Membership Stadistics",
    icon: FiLink2,
    url: "https://henrygym.onrender.com/dashboard/stadistics",
  },
  {
    name: "Classes",
    icon: FiLink2,
    url: "https://henrygym.onrender.com/dashboard/classes",
  },
  {
    name: "Comments",
    icon: FiLink2,
    url: "https://henrygym.onrender.com/dashboard/comments",
  },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const admin = useSelector((state) => state.user);
  const { user } = useAuth0();
  const clientes = useSelector((state) => state.clientes);
  const comentarios = useSelector((state) => state.comentarios);
  const clases = useSelector((state) => state.clases);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
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

      <MobileNav onOpen={onOpen} admin={admin} />
      <Contenido
        onOpen={onOpen}
        clientes={clientes}
        comentarios={comentarios}
        clases={clases}
        pathname={pathname}
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
      fontFamily='"Titillium Web", sans-serif'
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
        fontWeight="bold"
        fontFamily='"Titillium Web", sans-serif;'
      >
        Henry's Gym
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
