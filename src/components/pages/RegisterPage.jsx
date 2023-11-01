import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <input
          defaultValue="test"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <span>Name:</span>
        <input
          defaultValue="test"
          {...register('name', { required: true })}
          type="text"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Password:</span>
        <input
          defaultValue="test"
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button type='submit'>Sing Up</button>
    </form>
  );
};

export default RegisterPage;
