
import ContactForm from 'components/ContactForm/ContactForm.';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts.selectors';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isContactItemExist = useSelector(selectItems);

    const addContactToPhonebook = (contactName, contactNumber) => {
      const isDuplicate = contacts.some(
        contact => contact.contactName === contactName
      );

      if (isDuplicate) {
        alert('The contact already exist');
        return;
      }
    };
  return (
    <div>
      <ContactForm addContactCallback={addContactToPhonebook} />
      {(isContactItemExist.length > 0)  && <Filter />}

      <ContactList />
    </div>
  );
}

export default ContactsPage;
