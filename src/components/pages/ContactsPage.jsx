
import ContactForm from 'components/ContactForm/ContactForm.';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
    const contacts = useSelector(state => state.contacts.contacts);

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
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
