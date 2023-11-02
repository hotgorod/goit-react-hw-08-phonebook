import css from './Filter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { selectItemsFilter } from 'redux/contacts.selectors';
import { setFilter } from 'redux/contactSlice';
import { Box, FormControl, FormLabel, Heading, Input, useColorModeValue } from '@chakra-ui/react';



const Filter = () => {
  const filter = useSelector(selectItemsFilter);
  
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Box
      rounded={'lg'}
      bg='darkgrey'
      boxShadow={'lg'}
      p={8}
    >
      <Heading size="lg">Find Contact</Heading>
      <form>
        <FormControl>
          <FormLabel>
            Find contact by name
            <Input type="text" value={filter} onChange={handleFilter}></Input>
          </FormLabel>
        </FormControl>
      </form>
    </Box>
  );
};

export default Filter;
