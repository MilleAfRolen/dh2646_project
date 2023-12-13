'use client'
import { useState} from "react";
import signUp from "@/app/(presenters)/signupPresenter";
import { useRouter } from 'next/navigation'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    return (
    <div className="flex justify-center items-center h-screen bg-black">    
        <form onSubmit={handleForm} className="bg-gray-700 text-white py-4 px-4 mx-2 rounded">
            <label htmlFor="email" className="font-bold">
                <p>Email</p>
                <input
                    className="py-1 px-1 mx-2 rounded text-black"
                    onChange={(e) => setEmail(e.target.value)} 
                    required type="email" 
                    name="email" 
                    id="email" 
                    placeholder="example@mail.com" 
                />
            </label>
            <label htmlFor="password" className="font-bold">
                <p>Password</p>
                <input
                    className="py-1 px-1 mx-2 rounded text-black"
                    onChange={(e) => setPassword(e.target.value)} 
                    required type="password" 
                    name="password" 
                    id="password" 
                    placeholder="password"
                />
            </label>
            <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mx-2 rounded"
            >
                Sign up
            </button>
        </form>
    </div>);
}

export default Signup;