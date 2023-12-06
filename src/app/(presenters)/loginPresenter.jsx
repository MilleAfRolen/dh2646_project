
import { useState } from 'react';

export const useLoginPresenter = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        // Call the authenticateUser function from the Model
        const user = await authenticateUser(username, password);
        alert(`Login successful! Welcome, ${user.username}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
    };

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
  };
};