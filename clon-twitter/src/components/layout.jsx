import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Container, Stack,Icon, Box, Text} from "@chakra-ui/react"
import {FaHome,FaEnvelope,FaBookmark,FaList,FaUser, FaHashtag, FaBell, FaTwitter, FaEllipsisH} from "react-icons/fa";

const Layout = ({children}) =>{
  return (
    <Container height="100%"  alignSelf="center" maxWidth="container.md">
     <Stack direction="row" height="100%" >
      <Stack paddingY={4} 
      paddingX={4} 
      borderRightColor='gray.700'
      borderRightWidth={1} 
      spacing={8}
      >
        <Link to="/">
      <Icon as={FaTwitter} height={6} width={6} />
      </Link>
      <Link to="/">
      <Stack alignItems='center' direction='row' spacing={3}>
        <Icon as={FaHome}height={6} width={6} />
        <Text fontSize="lg" fontWeight="bold">Inicio</Text>
        </Stack>
        </Link>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaHashtag}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Explorar</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaBell}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Notificaciones</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaEnvelope}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Mensajes</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaBookmark}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Guardados</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaList}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Listas</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaUser}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Perfil</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaEllipsisH}height={6} width={6}/>
        <Text fontSize="lg" fontWeight="bold">Mas opciones</Text>
        </Stack>
        <Stack alignItems='center' direction='row' spacing={4}>
        <Button fontSize='lg'color="primary"> Twittear
        </Button>
        </Stack>
      </Stack>
      <Box paddingX={4}> {children}</Box>
    </Stack>
    </Container>
  );
};

export default Layout;