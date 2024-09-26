import React, { useState } from 'react';
import { register } from '../services/authService'; // Adjust path if necessary

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            alert('Registration successful');
        } catch (error) {
            alert('Error: ' + error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
