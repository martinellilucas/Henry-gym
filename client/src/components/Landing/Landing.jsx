import style from "./Landing.module.css";
import Video from "../../assets/Video.mp4";
import Logo from "../../assets/logo.png";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Landing = () => {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  return (
    <Box>
      <Box className={style.videoContainer}>
        <video className={style.video} autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </Box>

      <Box className={style.bottomContainer}>
        {!isLoading && !user ? (
          <Button
            onClick={() =>
              loginWithRedirect({ returnTo: window.location.origin + "home" })
            }
            className={style.btn}
            colorScheme="blackAlpha"
            size="lg"
          >
            LOGIN
          </Button>
        ) : (
          <h1 className={style.title} color="white">
            Welcome, you are logged in
          </h1>
        )}
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
