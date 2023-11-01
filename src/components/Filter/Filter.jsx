import css from './Filter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { selectItemsFilter } from 'redux/contacts.selectors';
import { setFilter } from 'redux/contactSlice';
import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';



const Filter = () => {
  const filter = useSelector(selectItemsFilter);
  
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Box maxW="100%" m="auto">
      <Heading size="lg">Contacts</Heading>
      <form>
        <FormControl>
          <FormLabel>
            Find contacts by name
            <Input type="text" value={filter} onChange={handleFilter}></Input>
          </FormLabel>
        </FormControl>
      </form>
    </Box>
  );
};

export default Filter;
