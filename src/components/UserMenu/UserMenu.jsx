import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';

const UserMenu = () => {
    const userState = useSelector(selectAuthUserData)
   
  return (
    <HStack spacing='24px'>
      <p>{userState.email}</p>
      <Button colorScheme='orange'>Logout</Button>
    </HStack>
  );
}

export default UserMenu;
