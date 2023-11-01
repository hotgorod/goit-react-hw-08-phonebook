import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authReducer';

const LoginPage = () => {
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();

   const dispatch = useDispatch();

   const onSubmit = data => {
     console.log(data);
     dispatch(loginThunk(data));
     reset();
   };

   return (
     <form onSubmit={handleSubmit(onSubmit)}>
       <label>
         <span>Email:</span>
         <input
           defaultValue=""
           {...register('email', { required: true })}
           type="email"
         />
         {errors.email && <span>This field is required</span>}
       </label>
       
       <label>
         <span>Password:</span>
         <input
           defaultValue=""
           {...register('password', { required: true, minLength: 7 })}
           type="password"
         />
         {errors.password && <span>This field is requared</span>}
       </label>

       <button type="submit">Sing In</button>
     </form>
   );
}

export default LoginPage;
