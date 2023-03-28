import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleLogin = (e) => {

    };

    const submitLogin = (e) => {

    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <form onSubmit={submitLogin}>
                    <input type='text' value='username' onChange={handleLogin} />
                    <input type='password' value='password' onChange={handleLogin} />
                    <input type='submit' value='Login' onChange={handleLogin} />
                </form>

            </div>
        </div>
    );

};

export default Login;