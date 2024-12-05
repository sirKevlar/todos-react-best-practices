import { useContext } from "react";
import { auth } from "../firebase/firebase";
import { SignInOutProps } from "../lib/types/types";
import Button from "./Button";
import { UserContext } from "../contexts/UserContext";
import { GUEST_USER } from "../lib/constants/constants";


export default function SignInOut({setIsRegisteredUser, setIsModalVisible, setCurrentUser}: SignInOutProps) {
    const user = useContext(UserContext)

    const handleSignIn = () => {
        setIsModalVisible(true)
        setIsRegisteredUser(true)
    }
    const handleRegister = () => {
        setIsModalVisible(true)
        setIsRegisteredUser(false)
    }
    const handleSignOut = () => {
        auth.signOut()
        setIsRegisteredUser(false)
        setCurrentUser(GUEST_USER)
    }
    
    return (
      <form id='sign-in-out'>
        {
        user?.uid ? 
        <Button id='sign-out-button' type='button' onClick={handleSignOut}>SIGN OUT</Button> 
        : 
        <>
          <Button id='sign-in-button' type='button' onClick={handleSignIn}>SIGN IN</Button>
          <Button id='register-button' type='button' onClick={handleRegister}>REGISTER</Button>
        </>
        }
    </form>
  )
}
