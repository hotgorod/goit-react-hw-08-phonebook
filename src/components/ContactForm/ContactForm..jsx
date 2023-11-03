
import { useDispatch} from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Box, Button, FormControl, FormLabel, Heading, Input, useColorModeValue } from '@chakra-ui/react';


export const ContactForm = () => {
 const dispatch = useDispatch();


  const handleAddContact = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    
    event.currentTarget.reset();
  };

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      mb='24px'
    >
      
      <Heading size="lg" m="auto">
        Add contacts to your Phonebook
      </Heading>
      <form onSubmit={handleAddContact}>
        <FormControl>
          <FormLabel>
            Name
            <Input type="text" name="name" required />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            Number
            <Input type="tel" name="number" required />
          </FormLabel>
        </FormControl>
        <Button type="submit" colorScheme="orange">
          Add contact
        </Button>
      </form>
    </Box>
  );
};


export default ContactForm;
