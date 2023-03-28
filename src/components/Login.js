import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleLogin = (e) => {

    };

    const submitLogin = (e) => {
        // if username is sonu and password is sonu, login successful

    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <form onSubmit={submitLogin}>
                    <input type='text' name='username' onChange={handleLogin} />
                    <br />
                    <input type='password' name='password' onChange={handleLogin} />
                    <br />
                    <input type='submit' value='Login' onChange={handleLogin} />
                </form>

            </div>
        </div>
    );

};

export default Login;