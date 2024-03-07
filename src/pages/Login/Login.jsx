import React from 'react';
import { Form } from '../../components/FormInOut/FormInOut';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/operations';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(data => {
        toast.success(`Welcome back: ${data.user.name}!`);
        navigate('/main');
      })
      .catch(error => {
        toast.error('Credentials is not valid');
      });
  };
  const value = {
    email: 'AndriiUA@gmail.com',
    password: 'AndriiUA@gmail.com',
  };
  return (
    <div>
      <Form formType="login" onDataSubmit={handleSubmit} values={{}} />
    </div>
  );
};
