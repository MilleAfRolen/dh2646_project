'use client';
import { useLoginPresenter } from '@/app/(presenters)/loginPresenter.jsx';

export default function Login() {
    const {
      username,
      password,
      setUsername,
      setPassword,
      handleLogin,
    } = useLoginPresenter();

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form className="bg-gray-700 text-white py-4 px-4 mx-2 rounded">
        <label htmlFor="username" className="font-bold">Username: </label>
        <input
          className="py-1 px-1 mx-2 rounded"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password" className="font-bold">Password:</label>
        <input
          className="py-1 px-1 mx-2 rounded"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mx-2 rounded"
          >
            Login
        </button>
      </form>
    </div>
  );
}
