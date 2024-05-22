"use client";

import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [userIP, setUserIP] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('/api/ip'); // Correct API route
            console.log(response.data.ip)
            setUserIP(response.data.ip);
        } catch (error) {
            console.error('Error retrieving user IP:', error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
            {userIP && <p>Users IP Address: {userIP}</p>}
            {/* Your login form and other components */}
        </div>
    );
};

export default LoginPage;