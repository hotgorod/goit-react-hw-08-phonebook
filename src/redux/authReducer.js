import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestLogin, requestRegister } from 'services/ContactsApi';


export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
        const response = await requestLogin(formData);
        console.log(response);
        return response;
        
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
    //   .addCase(fetchContacts.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   })

    //   .addCase(addContact.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.items.unshift(action.payload);
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   })

    //   .addCase(deleteContact.pending, state => {
    //     state.contacts.isLoading = true;
    //     state.contacts.error = null;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.items = state.contacts.items.filter(
    //       item => item.id !== action.payload.id
    //     );
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.contacts.isLoading = false;
    //     state.contacts.error = action.payload;
    //   }),
});

export const { setFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
