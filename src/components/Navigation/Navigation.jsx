import { Box, Flex, Link as ChakraLink} from '@chakra-ui/react';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';


const Navigation = () => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  const { pathname } = useLocation();

  return (
    <Box
      as="header"
      bg="grey"
      color="white"
      minH="50px"
      p="10px"
      pl="2rem"
      pr="2rem"
    >
      <Flex justifyContent={'space-between'} alignItems="center">
        <ChakraLink
          to="/"
          as={Link}
          _hover={{
            textDecoration: 'none',
            bg: 'orange',
            color: 'black',
            rounded: '4px',
          }}
          fontWeight="bold"
          // bg={pathname === '/' ? 'orange' : 'transparent'}
          // color={pathname === '/' ? 'white' : 'gray.400'}
          color={pathname === '/' ? 'orange' : 'white'}
          // rounded={pathname === '/' ? '10px' : '10px'}
        >
          Home
        </ChakraLink>

        {isSignedIn ? (
          <>
            <ChakraLink
              to="/contacts"
              as={Link}
              _active={{ color: 'red' }}
              _hover={{
                textDecoration: 'none',
                bg: 'orange',
                color: 'black',
                rounded: '4px',
              }}
              fontWeight="bold"
              // bg={pathname === '/contacts' ? 'orange' : 'transparent'}
              color={pathname === '/contacts' ? 'orange' : 'white'}
            >
              Contacts
            </ChakraLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navigation;
