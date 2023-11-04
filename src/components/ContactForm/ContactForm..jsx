
import { useDispatch} from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Box, Button, FormControl, FormLabel, Heading, Input, useColorModeValue } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
 const dispatch = useDispatch();


  const handleAddContact = data => {
    

    // const name = event.currentTarget.elements.name.value;
    // const number = event.currentTarget.elements.number.value;

    // const newContact = {
    //  data
    // };
    dispatch(addContact(data));
    
    reset();
  };

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      mb="24px"
    >
      <Heading size="lg" m="auto">
        Add contacts to your Phonebook
      </Heading>
      <form onSubmit={handleSubmit(handleAddContact)}>
        <FormControl>
          <FormLabel>
            Name:
            <Input
              {...register('name', { required: true })}
              type="text"
             
            />
          </FormLabel>
       
        </FormControl>
        <FormControl>
          <FormLabel>
            Number
            <Input
              {...register('number', { required: true })}
              type="tel"
              
            />
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
