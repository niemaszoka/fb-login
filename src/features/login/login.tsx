import './login.scss';
import { useAppDispatch } from '../../app/hooks';

import { loginWithFb } from './loginSlice';
import React from 'react';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const login = () => dispatch(loginWithFb());

  return (
    <div className='login'>
        <p className='login__prompt'>Please login to see the list of your accounts</p>
        <button className='login__button button-default' onClick={() => login()}>
            Login  with facebook
        </button>
    </div>
  );
};
