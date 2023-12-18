
export default function SignUpView(props) {
    console.log(props);

    function handleOnSubmitACB(e) {
        props.handleSubmit(e.target.value);
    }

    function inputUsernameChangeACB(e) {
        props.onInputUsernameChange(e.target.value);
    }

    function inputPasswordChangeACB(e) {
        props.onInputPasswordChange(e.target.value);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">    
            <form onSubmit={handleOnSubmitACB} className="bg-gray-700 text-white py-4 px-4 mx-2 rounded">
                <label htmlFor="email" className="font-bold">
                    <p>Email</p>
                    <input
                        className="py-1 px-1 mx-2 rounded text-black"
                        onChange={inputUsernameChangeACB} 
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
                        onChange={inputPasswordChangeACB} 
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
        </div>
    );
}