import style from "./Landing.module.css";
import Video from "../../assets/Video.mp4";
import Logo from "../../assets/logo.png";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <Box className={style.body}>
      <Box className={style.videoContainer}>
        <video className={style.video} autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </Box>

      <Box className={style.bottomContainer}>
        <h1 className={style.msg}>Welcome, click 'explore' button to enter.</h1>

        <Box className={style.logoContainer}>
          <Image className={style.logo} src={Logo} alt="logo" />
          <h1 className={style.title}>HENRY'S GYM</h1>
        </Box>
        <NavLink to="/home">
          <Button className={style.btn} colorScheme="blackAlpha" size="lg">
            EXPLORE
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Landing;
