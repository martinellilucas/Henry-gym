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
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
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
          float={'left'}
          src="https://cdn.discordapp.com/attachments/1105187840230441004/1106343139029037067/logo.png"
         
        />
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
        </Stack>
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
            <SocialButton label={"WhatsApp"} href={"#"}>
              <FaWhatsapp />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

// import react from "react"
// import Style from "./App.module.css"
// import { FaInstagram} from "react-icons/fa"
// import { FaWhatsapp } from "react-icons/fa"
// import { Link } from "react-router-dom"

// const Footer = () => {
//   	const imageUrl = 'https://cdn.discordapp.com/attachments/1105187840230441004/1105887915847983204/logo.jpeg.png'

//   return (
//     <div className={Style.All}>
//     <img src={imageUrl} className={Style.imageLogo} alt="Descripcion de la imagen"/>
//     <Link className= {Style.about} to='/about'>Sobre nosotros</Link>
//     <div className={Style.socialIcons}>
//         <a href="https://www.instagram.com/agus_purici/" target="_blank">
//         <p className={Style.ig}>
//           <FaInstagram />
//         </p>
//       </a>
//       <a href="whatsapp://send?phone=NUMERO&text=Hola%20quiero%20contactar%20contigo" target="_blank">
//         <p className={Style.Whatsapp}>
//           <FaWhatsapp />
//         </p>
//       </a>
//     </div>

//       <h3 className={Style.hora}> Horario de atención</h3>
//       <p> Lunes a viernes 6:30hs a 22:30hs </p>
//       <p> Sabados 9hs a 12hs</p>
// </div>
//   )
// }

// export default Footer;
