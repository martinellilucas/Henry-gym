import s from './Landing.module.css'
import Video from '../../assets/Video.mp4'
import Logo from '../../assets/logo.png'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box, Grid } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <Box display='flex' flexDirection="column" position='relative' scrollMarginY='0px'>

      <Box position='fixed'>
        <video className={s.video} autoPlay muted loop>
          <source src={Video} type='video/mp4' />
        </video>
      </Box>

      <Box width='100%' height='339px' background='#28242b' display='flex' justifyContent='space-evenly' alignItems='center' position='absolute' top='600px'>
        <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8} height='100px' width='150px'>
          Button
        </Box>
        <Box borderRadius='50%' bg='white' height='400px' width='400px' display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' marginBottom='250px'>
          <Image height='250px' width='250px' src={Logo} alt="Aca va el logo" marginBottom='20px' />
          <h1>Henry gym</h1>
        </Box>
        <NavLink to='/home'>
          <Button colorScheme='blackAlpha' size='lg'  >
            Explorar
          </Button>
        </NavLink>

      </Box>
    </Box>


  );
};

export default Landing;
