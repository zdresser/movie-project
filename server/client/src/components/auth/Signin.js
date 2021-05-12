import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema)
  });

  const handleFormSubmit = (data) => {
    // TO DO
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='form-group'>
        <label>email</label>
        <input
          className='form-control'
          name='email' ref={register({ required: true })}></input>
          {errors.email?.message}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input 
          className="form-control"
          name='password' ref={register({ required: true })}></input>
          {errors.password?.message}
      </div>

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
};

export default Signup;