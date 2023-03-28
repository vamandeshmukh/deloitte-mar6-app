import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const handleLogin = (e) => {
        console.log(e.target.value);
        setLoginData(
            { ...loginData, [e.target.name]: e.target.value }
            );
    };

    const submitLogin = (e) => {
        if (loginData.username === 'sonu' && loginData.password === 'sonu') {
            alert(`${loginData.username} logged in successfully`);
            setLoginData({ username: '', password: '' });
        }
        else {
            alert('Invalid credentials!');
            setLoginData({ username: '', password: '' });
        }
        e.preventDefault();
    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <form onSubmit={submitLogin}>
                    <input type='text' name='username' value={loginData.username} onChange={handleLogin} />
                    <br />
                    <input type='password' name='password' value={loginData.password} onChange={handleLogin} />
                    <br />
                    <input type='submit' value='Login' onChange={handleLogin} />
                </form>
            </div>
        </div>
    );

};

export default Login;


// import { useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({});

//     const handleLogin = (e) => {

//     };

//     const submitLogin = (e) => {
//         // if username is sonu and password is sonu, login successful

//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <form onSubmit={submitLogin}>
//                     <input type='text' name='username' onChange={handleLogin} />
//                     <br />
//                     <input type='password' name='password' onChange={handleLogin} />
//                     <br />
//                     <input type='submit' value='Login' onChange={handleLogin} />
//                 </form>
//             </div>
//         </div>
//     );

// };

// export default Login;