import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,

} from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
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
            <Button
              colorScheme={'orange'}
             
            >
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default HomePage;
