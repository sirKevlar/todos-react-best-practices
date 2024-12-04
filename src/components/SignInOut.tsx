import { SignInOutProps } from "../lib/types/types";
import Button from "./Button";


export default function SignInOut({setIsRegisteredUser, setIsModalVisible}: SignInOutProps) {

    const handleSignIn = () => {
        setIsModalVisible(true)
        setIsRegisteredUser(true)
    }
    const handleRegister = () => {
        setIsModalVisible(true)
        setIsRegisteredUser(false)
    }

  return (
    <form id='sign-in-out'>
        <Button id='sign-in-button' type='button' onClick={handleSignIn}>SIGN IN</Button>
        <Button id='register-button' type='button' onClick={handleRegister}>REGISTER</Button>
    </form>
  )
}
