import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig.js";
import { useState} from "react";
import { useRouter } from 'next/navigation'


let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebase_app);

export default function firebaseModel() {
  async function createUser(email, password) {
      let result = null,
          error = null;
      try {
          result = await createUserWithEmailAndPassword(auth, email, password);
      } catch (e) {
          error = e;
      }

      return { result, error };
  }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await createUser(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result);
        return router.push("/")
    }

  return { createUser, setEmail, setPassword, handleForm };
}