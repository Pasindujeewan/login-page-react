import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

// this service function for handle google login
// this function call in SocialLoginButton.tsx file
export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  //get token after login
  const accessToken = await result.user.getIdToken();

  //Save token in sessionStorage for use in other components
  sessionStorage.setItem("accessToken", accessToken);

  //if log failed user become undefined
  return result.user;
};
