import axios from "axios";

const contactsInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
    headers: {
        Authorization: "Bearer ..."
    }
});

export const requestRegister = async (FormData) => {
    const { data } = await contactsInstance.post('/users/signup', FormData);
    return data;
}

export const requestLogin = async FormData => {
  const { data } = await contactsInstance.post('/users/login', FormData);
  return data;
};

export const requestLogout = async() => {
  const { data } = await contactsInstance.post('/users/logout');
  return data;
};


export const requestRefreshUser = async() => {
  const { data } = await contactsInstance.get('/users/current');
  return data;
};