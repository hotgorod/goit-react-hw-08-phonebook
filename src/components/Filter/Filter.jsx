
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { selectItemsFilter } from 'redux/contacts.selectors';
import { setFilter } from 'redux/contactSlice';
import { Box, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react';



const Filter = () => {
  const filter = useSelector(selectItemsFilter);
  
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Box
      rounded={'lg'}
      bg='grey'
      
      p={8}
      color='white'
    >
      <Heading size="lg" mb='1'>Find Contact</Heading>
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
