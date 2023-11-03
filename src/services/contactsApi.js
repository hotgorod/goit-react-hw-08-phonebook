import axios from "axios";

const contactsInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
  
});

export const setToken = (token) => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const requestRegister = async (FormData) => {
  const { data } = await contactsInstance.post('/users/signup', FormData);
  setToken(data.token);
    return data;
}

export const requestLogin = async FormData => {
  const { data } = await contactsInstance.post('/users/login', FormData);
  setToken(data.token);
  return data;
};

export const requestLogout = async() => {
  await contactsInstance.post('/users/logout');
  
  return ;
};


export const requestRefreshUser = async() => {
  const { data } = await contactsInstance.get('/users/current');
  return data;
};

// ==================== get contacts ========================

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
}; 
// ==================== post contacts ========================
export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};

// ==================== delete contacts ========================
export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};