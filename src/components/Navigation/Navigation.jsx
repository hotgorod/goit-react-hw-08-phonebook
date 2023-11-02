import { Box, Flex, HStack } from '@chakra-ui/react';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const Navigation = () => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);

  return (
    
      <Box as="header" bg="grey" color="white" minH="50px" p="10px" >
        <Flex justifyContent={'space-between'} alignItems="center">
          <NavLink to="/">Home</NavLink>

          {isSignedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
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
