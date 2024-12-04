import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { RegisterFormProps } from '../lib/types/types';
import {
  auth,
  googleAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../firebase/firebase';

export default function RegisterForm({
  children,
  isModalVisible,
  setIsModalVisible,
  isRegisteredUser,
  setCurrentUser,
}: RegisterFormProps) {
  const [formInputs, setFormInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [authing, setAuthing] = useState(false);
  const [error, setError] = useState('');

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, googleAuth)
      .then(({user}) => {
        setIsModalVisible(false);
        setCurrentUser({displayName: user.displayName, email: user.email, uid: user.uid})
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setError('')
        }, 2000);
        setError(error.message)
        setAuthing(false);
      });
  };
  const signInWithEmail = async () => {
    setAuthing(true);
    setError('');

    signInWithEmailAndPassword(auth, formInputs.username, formInputs.password)
      .then(({user}) => {
        console.log(user.uid);
        setCurrentUser({displayName: user.displayName, email: user.email, uid: user.uid})
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setError('')
        }, 2000);
        setError(error.message);
        setAuthing(false);
      });
  };
  const signUpWithEmail = async () => {
    if (formInputs.password !== formInputs.confirmPassword) {
      setTimeout(() => {
        setError('')
      }, 2000);
      setError('PASSWORDS DO NOT MATCH');
      return;
    }
    setAuthing(true);
    setError('');

    createUserWithEmailAndPassword(
      auth,
      formInputs.username,
      formInputs.password
    )
      .then(({user}) => {
        console.log(user.uid);
        setCurrentUser({displayName: user.displayName, email: user.email, uid: user.uid})
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setError('')
        }, 2000);
        setError(error.message);
        setAuthing(false);
      });
  };
  const handleChange = (value: string, name: string) => {
    setFormInputs((curr) => {
      return { ...curr, [name]: value };
    });
  };
  const closeModal = () => {
    setFormInputs({
      username: '',
      password: '',
      confirmPassword: '',
    });
    setIsModalVisible(false);
  };

  return isModalVisible ? (
    <>
      <section className='modal flex flex-col align-center justify-center'>
        <form
          id='register-form'
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            if (formInputs.username && formInputs.password && isRegisteredUser) {
              signInWithEmail();
              setFormInputs({
                username: '',
                password: '',
                confirmPassword: '',
              });
            } else if(formInputs.username && formInputs.password) {
              signUpWithEmail();
              setFormInputs({
                username: '',
                password: '',
                confirmPassword: '',
              })
            }
          }}
        >
          <div className='flex align-center justify-between'>
            {isRegisteredUser ? 'Sign in' : 'Register'}
            <button className='close-button' onClick={closeModal}>
              ❌
            </button>
          </div>
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
          {!isRegisteredUser && (
            <Input
              id='confirm-password-input'
              name='confirmPassword'
              placeholder='CONFIRM PASSWORD'
              handleChange={handleChange}
              type='text'
              val={formInputs.confirmPassword}
            />
          )}
          <Button id='register-button' disabled={authing} type='submit'>
            {isRegisteredUser ? 'SIGN IN' : 'REGISTER'}
          </Button>
          {error && <p className='warning'>{error}</p>}
          <Button
            id='google-register-button'
            disabled={authing}
            type='button'
            onClick={signInWithGoogle}
          >
            {isRegisteredUser ? 'GOOGLE SIGN IN' : 'GOOGLE REGISTER'}
          </Button>
        </form>
      </section>
      {children}
    </>
  ) : (
    children
  );
}
