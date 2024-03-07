import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from '../FormInOut/FormInOut.module.css';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export const Form = ({ onDataSubmit, formType, values }) => {
  const [type, setType] = useState('password');
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });

  const submit = data => {
    console.log(data);
    onDataSubmit(data);
    reset();
  };

  return (
    <div className={s.wrapperForm}>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        {formType !== 'login' && (
          <div className={s.inputField}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              placeholder="Enter name..."
              {...register('name', {
                required: { message: 'Name is required!', value: true },
                minLength: {
                  value: 3,
                  message: 'Name must be more than 3 chars!',
                },
                maxLength: {
                  value: 12,
                  message: 'Name must be less than 12 chars!',
                },
              })}
            />
            {errors?.name && <span>{errors.name.message}</span>}
          </div>
        )}
        <div className={s.inputField}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="Enter email..."
            {...register('email', {
              required: { message: 'Email is required!', value: true },
              minLength: {
                value: 10,
                message: 'Name must be more than 10 chars!',
              },
              maxLength: {
                value: 24,
                message: 'Name must be less than 24 chars!',
              },
            })}
            type="email"
          />
          {errors?.email && <span>{errors.email.message}</span>}
        </div>
        <div className={s.inputField}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            placeholder="Enter pass..."
            {...register('password', {
              required: { message: 'Password is required!', value: true },
              minLength: {
                value: 6,
                message: 'Password must be more than 6 chars!',
              },
              maxLength: {
                value: 20,
                message: 'Password must be less than 20 chars!',
              },
            })}
            type={type}
          />
          <div
            onClick={() => setType(type === 'password' ? 'text' : 'password')}
            className={s.iconBtn}
          >
            {type === 'password' ? <FaEyeSlash /> : <FaEye />}
          </div>

          {errors?.password && <span>{errors.password.message}</span>}
        </div>
        <button>{formType === 'login' ? 'Login' : 'Register'}</button>
        <p className={s.link}>
          {formType !== 'login'
            ? 'You already have account?'
            : 'You do not have account?'}
          {formType === 'login' ? (
            <Link to="/register">Sign in!</Link>
          ) : (
            <Link to="/login">Sign up!</Link>
          )}
        </p>
      </form>
    </div>
  );
};
