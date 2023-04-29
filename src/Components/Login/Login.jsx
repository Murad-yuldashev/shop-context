import React, { useContext, useState } from 'react';
import { Contexts } from '../Context/Context';

const Login = () => {
    const {login, setLogin} = useContext(Contexts);

    const [email, setEmail] = useState('');

    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder='email' value={email} />
            <input type="text" placeholder='password' />
            <button onClick={() => setLogin(true)}>Click</button>
        </div>
    );
}

export default Login;
