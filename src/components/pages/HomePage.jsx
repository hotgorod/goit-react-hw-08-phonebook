import { Link as ChakraLink } from '@chakra-ui/react';
import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const HomePage = () => {
  const { pathname } = useLocation();
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Create your own <br />
            <Text as={'span'} color={'orange'}>
              Phonebook
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Welcome to the Phone Book Application. You can easily manage your
            contacts here. You can add, delete and find contacts
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            {!isSignedIn ? (
              <>
                <Button as={Link} to='/register' colorScheme={'orange'}>Get Started</Button>
                <ChakraLink
                  to="/login"
                  as={Link}
                  _hover={{
                    color: 'orange',
                  }}
                  fontWeight="bold"
                  color={pathname === '/login' ? 'orange' : 'black'}
                >
                  Login if you already have an account
                </ChakraLink>
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;

// <ChakraLink
//       to="/"
//       as={Link}
//       _hover={{
//         textDecoration: 'none',
//         bg: 'orange',
//         color: 'black',
//         rounded: '4px',
//       }}
//       fontWeight="bold"
//       color={pathname === '/' ? 'orange' : 'white'}
//     >
//       Home
//     </ChakraLink>

//     {isSignedIn ? (
//       <>
//         <ChakraLink
//           to="/contacts"
//           as={Link}
//           _active={{ color: 'red' }}
//           _hover={{
//             textDecoration: 'none',
//             bg: 'orange',
//             color: 'black',
//             rounded: '4px',
//           }}
//           fontWeight="bold"
//           color={pathname === '/contacts' ? 'orange' : 'white'}
//         >
//           Contacts
//         </ChakraLink>
//         <UserMenu />
//       </>
//     ) : (
//       <>
//         <ChakraLink
//           to="/register"
//           as={Link}
//           _hover={{
//             textDecoration: 'none',
//             bg: 'orange',
//             color: 'black',
//             rounded: '4px',
//           }}
//           fontWeight="bold"
//           color={pathname === '/register' ? 'orange' : 'white'}
//         >
//           Register
//         </ChakraLink>
//         <ChakraLink
//           to="/login"
//           as={Link}
//           _hover={{
//             textDecoration: 'none',
//             bg: 'orange',
//             color: 'black',
//             rounded: '4px',
//           }}
//           fontWeight="bold"
//           color={pathname === '/login' ? 'orange' : 'white'}
//         >
//           Login
//         </ChakraLink>
