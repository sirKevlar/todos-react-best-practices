import { SignInOutProps } from "../lib/types/types";
import Button from "./Button";

export default function SignInOut({setIsRegisteredUser, setIsModalVisible}: SignInOutProps) {
    const handleSignIn = () => {
        setIsRegisteredUser(true)
        setIsModalVisible(true)
    }
    const handleRegister = () => {
        setIsModalVisible(true)
    }

  return (
    <form id='sign-in-out'>
        <Button id='sign-in-button' type='button' onClick={handleSignIn}>SIGN IN</Button>
        <Button id='register-button' type='button' onClick={handleRegister}>REGISTER</Button>
    </form>
  )
}
