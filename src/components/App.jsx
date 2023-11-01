import React, { Suspense} from 'react';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from './ContactForm/ContactForm.';
import css from './App.module.css';
import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';



export const App = () => {
  
  const contacts = useSelector(state => state.contacts.contacts);
  
  const addContactToPhonebook = (contactName, contactNumber) => {
    const isDuplicate = contacts.some(
      contact => contact.contactName === contactName
    );

    if (isDuplicate) {
      alert('The contact already exist');
      return; 
    }
   
  }
   return (
     <div className={css.container}>
       <Suspense fallback="Loading...">
         <Routes>
           <Route
             path="/"
             element={
               <>
                 
                 <ContactForm addContactCallback={addContactToPhonebook} />
                 
                 <Filter />
                 <ContactList />
               </>
             }
           />
               </Routes>
       </Suspense>
     </div>
   );
};


