import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { RegisterFormProps } from '../lib/types/types';

export default function RegisterForm({ children, isModalVisible, setIsModalVisible, isRegisteredUser, setIsRegisteredUser }: RegisterFormProps) {

  const [formInputs, setFormInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (value: string, name: string) => {
    setFormInputs((curr) => {
      return { ...curr, [name]: value };
    });
  };
  const closeModal = () => {
    setFormInputs({
      username: '',
      password: '',
    })
    setIsRegisteredUser(false)
    setIsModalVisible(false)
  }

  return isModalVisible ? (
    <>
      <section className='modal flex flex-col align-center justify-center'>
        <form
          id='register-form'
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            if(formInputs.username && formInputs.password) {
              setIsModalVisible(false);
              setFormInputs({
                username: '',
                password: '',
              })
            }
          }}
        >
          <div className='flex align-center justify-between'>{isRegisteredUser ? 'Sign in' : 'Register'}<button className='close-button' onClick={closeModal}>❌</button></div>
          <Input
            id='username-input'
            name='username'
            placeholder='ENTER E-MAIL'
            handleChange={handleChange}
            type='text'
            val={formInputs.username}
          />
          <Input
            id='password-input'
            name='password'
            placeholder='ENTER PASSWORD'
            handleChange={handleChange}
            type='text'
            val={formInputs.password}
          />
          <Button id='register-button' type='submit'>
            {isRegisteredUser ? 'SIGN IN' : 'REGISTER'}
          </Button>
        </form>
      </section>
      {children}
    </>
  ) : (
    children
  );
}
