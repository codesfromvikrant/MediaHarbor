import { auth } from "@/firebase/firebase.js"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const googleAuth = async () => {

  try {
    const result = await signInWithPopup(auth, provider)
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const user = result.user;
  } catch (error) {
    console.log(error.code, error.message);
    // const email = error.customData.email;
    // const credential = GoogleAuthProvider.credentialFromError(error);
  }
}

export { googleAuth }

