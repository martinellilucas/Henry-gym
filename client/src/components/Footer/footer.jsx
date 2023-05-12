
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Image,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};


export default function SmallCentered() {
  return (

    <Box
      bg={useColorModeValue("gray.600", "gray.300")}
      color={useColorModeValue("white", "white")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          h={12}
          float={"left"}
          src="https://cdn.discordapp.com/attachments/1105187840230441004/1106343139029037067/logo.png"
        />
        <Stack direction={"row"} spacing={6}>
          <Link 
           as="a"
           href="/about"
           color="white"
           fontWeight="bold"
           textDecoration="none"
           bg="grey"
           _hover={{ bg: "blue.600" }}
           _active={{ bg: "blue.700" }}
           _focus={{ boxShadow: "outline" }}
           borderRadius="full"
           px={4}
           py={2}
           >Sobre nosotros</Link>
        </Stack>
        <Text>Horario de atención: </Text>
        <Text>Lunes a viernes 6:30hs a 22:30hs</Text>
        <Text> Sabados 9hs a 12hs </Text>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© Henry's gym</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton  _hover={{ bg: "blue.600" }}
           _active={{ bg: "blue.700" }}
           _focus={{ boxShadow: "outline" }} label={"WhatsApp"} href={"#"}>
              <FaWhatsapp />
            </SocialButton>
            <SocialButton  label={"Instagram"} href={"#"}>
              <FaInstagram  _hover={{ bg: "blue.600" }}
           _active={{ bg: "grey" }}
           _focus={{ boxShadow: "outline" }} />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

