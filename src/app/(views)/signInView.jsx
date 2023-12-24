import { useRouter } from "next/navigation";

export default function SignInView(props) {
  async function handleOnSubmitACB(e) {
    e.preventDefault();
    props.handleSigningIn(e.target.email.value, e.target.password.value);
  }

  return (
    <>
      <div className="h-screen w-full fixed bg-gray-900 -z-50"></div>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleOnSubmitACB}
          className="bg-gray-800 text-white py-8 px-16 mx-4 rounded-md"
        >
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-2 mb-2 rounded-md bg-gray-700 text-gray-200"
          />
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-700 text-gray-200"
          />

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 mx-2 rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
