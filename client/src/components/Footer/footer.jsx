import Logo from "../../assets/logo.png";
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
      fontFamily='"Titillium Web", sans-serif'
      justifyContent={"center"}
      alignItems={"center"}
      bg={useColorModeValue("blackAlpha.800")}
      color={useColorModeValue("white", "white")}
    >
      <Container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxW={"6xl"}
        py={4}
        spacing={4}
      >
        <Box as={Stack} alignItems={"center"}>
          <Stack
            direction={"row"}
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              border="4px solid black"
              borderRadius="50%"
              padding="4px"
              h="80px"
              w="80px"
              src={Logo}
              background="white"
            />
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
              borderRadius="8px"
              height="max-content"
              px={4}
              py={2}
            >
              ABOUT
            </Link>
          </Stack>
        </Box>

        <Box alignItems={"center"} as={Stack}>
          <Text>Opening hours: </Text>
          <Text>Monday to Friday from 6:30 to 22:30</Text>
          <Text> Saturday from 9:00 to 12:00 </Text>
        </Box>
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
            <SocialButton
              _hover={{ bg: "blue.600" }}
              _active={{ bg: "blue.700" }}
              _focus={{ boxShadow: "outline" }}
              label={"WhatsApp"}
              href={"#"}
            >
              <FaWhatsapp />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "grey" }}
                _focus={{ boxShadow: "outline" }}
              />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
