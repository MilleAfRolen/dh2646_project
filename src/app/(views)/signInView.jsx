import Link from "next/link";

export default function SignInView(props) {

    function handleOnSubmitACB(e) {
        props.handleSigningIn(e.target.value);
    }

    function inputUsernameChangeACB(e) {
        props.onInputUsernameChange(e.target.value);
    }

    function inputPasswordChangeACB(e) {
        props.onInputPasswordChange(e.target.value);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form onSubmit={handleOnSubmitACB} className="bg-gray-800 text-white py-8 px-6 mx-4 rounded-md">
                <label htmlFor="email" className="block text-sm font-semibold">
                    Email
                </label>
                <input
                    required
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="example@mail.com" 
                    onChange={inputUsernameChangeACB}
                    className="w-full py-2 px-3 mt-1 mb-4 rounded-md bg-gray-700 text-gray-200"
                />
                
                <label htmlFor="password" className="block text-sm font-semibold">
                    Password
                </label>
                <input
                    required
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password"
                    onChange={inputPasswordChangeACB} 
                    className="w-full py-2 px-3 mt-1 mb-4 rounded-md bg-gray-700 text-gray-200"
                />

                <div className="flex items-center justify-center">
                    <Link href="/">
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 mx-2 rounded-md focus:outline-none focus:shadow-outline-blue"
                        >
                            Sign in
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}