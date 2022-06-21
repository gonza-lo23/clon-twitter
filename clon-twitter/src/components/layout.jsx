import React from 'react'
import {Link, useLocation, useRouteMatch} from 'react-router-dom'
import { StackDivider, Button, Container, Stack,Icon,useColorMode,useColorModeValue, Box, Text} from "@chakra-ui/react"
import {FaHome,FaEnvelope,FaBookmark,FaList,FaUser, FaHashtag, FaBell, FaTwitter, FaEllipsisH} from "react-icons/fa";

const ListLink = [
  {
    href: "/home",
    text: "inicio",
    activeIcon: FaHome,
    inactiveIcon: FaHome,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: FaHashtag,
    inactiveIcon: FaHashtag,
  },
  {
    href: "/notifications",
    text: "notificaciones",
    activeIcon: FaBell,
    inactiveIcon: FaBell,
  },
];

const Layout = ({children}) =>{
 const match = useRouteMatch();
 const {pathname}= useLocation();
 const {toggleColorMode}= useColorMode();
 const logoColor = useColorModeValue("primary.500", undefined);

  return (
    <Container height="100%"  alignSelf="center" maxWidth="container.md">
     <Stack direction="row" divider={<StackDivider/>} height="100%" >
      <Stack paddingY={4} 
      paddingLeft={4}
      paddingRight={12}  
      borderRightColor='gray.700'
      borderRightWidth={1} 
      spacing={8}
      >
      <Icon as={FaTwitter} color={logoColor} height={7} width={7} onClick={toggleColorMode} />
     
      <Stack fontSize='xl' fontWeight="bold" spacing={7}>
      {LINKS.map((link)=>(
        <Link key={link.href} to={link.href}>
        <Stack 
         alignItems='center'
         color={pathname === link.href ? "primary.500" : "inherit"}         
         direction='row' 
         spacing={4}
         >

        <Icon 
        as={pathname === link.href ? link.activeIcon : link.inactiveIcon}
        height={6} 
        width={6} />
        <Text>Inicio</Text>
        </Stack>
        </Link>
        ))}
        <Stack alignItems='center' direction='row' spacing={4}>
        <Icon as={FaHashtag}height={6} width={6}/>
        <Text>Explorar</Text>
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
        <Button fontSize='lg'color="primary"> Twittear
        </Button>
      </Stack>
      <Box  paddingX={4}> {children}</Box>
      </Stack>
     </Stack>
    </Container>
  );
};

export default Layout;