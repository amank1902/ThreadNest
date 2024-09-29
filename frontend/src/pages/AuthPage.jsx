import { useRecoilValue } from "recoil"
import LoginCard from "../components/LoginCard"
import SignupCard from "../components/SignupCard"
import authscreenAtom from "../atoms/authAtom"


const AuthPage = () => {
  const authScreenState = useRecoilValue(authscreenAtom)
  return (
    <>
      {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </>
  )
}

export default AuthPage
