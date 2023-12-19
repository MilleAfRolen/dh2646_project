import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig.js";
import { useState} from "react";

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebase_app);

export default function firebaseModel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function setTheEmail(newEmail) {
      setEmail(newEmail);
    }

    function setThePassword(newPass) {
      setPassword(newPass);
    }

    const handleSignUp = async (event) => {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log({result})

      } catch (error) {
        console.log(error)
      }
    }

  return { setTheEmail, setThePassword, handleSignUp };
}