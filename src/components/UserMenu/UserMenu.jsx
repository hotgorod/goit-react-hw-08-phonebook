import { Avatar, Button, HStack, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';

const UserMenu = () => {
    const userState = useSelector(selectAuthUserData)
   
  return (
    <>
      <HStack spacing="24px">
        <Tag size="lg" colorScheme="orange">
          <Avatar src="https://bit.ly/sage-adebayo" size="xs" ml={-1} mr={2} />
          <TagLabel>{userState.email}</TagLabel>
        </Tag>
        <Button colorScheme="orange" size="sm">
          Logout
        </Button>
      </HStack>
    </>
  );
}

export default UserMenu;
