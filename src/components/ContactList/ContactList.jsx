import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/contactSlice';
import {
  selectItems,
  selectItemsError,
  selectItemsFilter,
  selectItemsIsloading,
} from 'redux/contacts.selectors';
import { IconButton } from '@chakra-ui/react';
import { HiX } from 'react-icons/hi';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectItemsFilter);

  const items = useSelector(selectItems);
  const isLoading = useSelector(selectItemsIsloading);
  const error = useSelector(selectItemsError);

  const filteredContacts =
    items !== null &&
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase().trim()));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <ul className={css.list}>
        {filteredContacts &&
          filteredContacts.map(item => {
            return (
              <li className={css.contactListItem} key={item.id}>
                <p className={css.contactListItemText}>
                  {item.name}: {item.phone}
                </p>
                <IconButton
                  isRound={true}
                  // variant="solid"
                  // colorScheme="red"
                  aria-label="Delete"
                  fontSize="20px"
                  icon={<HiX />}
                  type="button"
                  onClick={() => handleDeleteContact(item.id)}
                >
                  Delete
                </IconButton>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;
