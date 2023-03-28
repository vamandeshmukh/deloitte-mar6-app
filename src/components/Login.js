import axios from "axios";
import { useState } from "react";

const dataUrl = 'https://jsonplaceholder.typicode.com/users';
let isLoggedIn = false;

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    // const submitLogin = (e) => {
    //     e.preventDefault();
    //     axios.get(dataUrl)
    //         .then((resp) => {
    //             console.log(resp.data);
    //             for (let abc of resp.data) {
    //                 if (loginData.username === abc.username) {
    //                     isLoggedIn = true;
    //                 }
    //             }
    //             if (isLoggedIn)
    //                 alert('Success');
    //             else
    //                 alert('Not success');
    //         })
    //         .catch((e) => { console.log(e) });
    // };

    const submitLogin = (e) => {
        axios.get(dataUrl)
            .then((resp) => {
                resp.data.forEach(elem => {
                    if (elem.username === loginData.username) {
                        isLoggedIn = true;
                    }
                });
                if (isLoggedIn === true) {
                    alert(`${loginData.username} logged in successfully`);
                    setLoginData({ username: '', password: '' });
                }
                else {
                    alert('Invalid credentials!');
                    setLoginData({ username: '', password: '' });
                }
            })
            .catch(e => alert(e));
        isLoggedIn = false;
        e.preventDefault();
    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <form onSubmit={submitLogin}>
                    <input type='text' name='username' value={loginData.username} onChange={handleLogin} autoFocus required />
                    <br />
                    <input type='password' name='password' value={loginData.password} onChange={handleLogin} required />
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

//     const [loginData, setLoginData] = useState({ username: '', password: '' });

//     const handleLogin = (e) => {
//         console.log(e.target.value);
//         setLoginData(
//             { ...loginData, [e.target.name]: e.target.value }
//         );
//     };

//     const submitLogin = (e) => {
//         if (loginData.username === 'sonu' && loginData.password === 'sonu') {
//             alert(`${loginData.username} logged in successfully`);
//             setLoginData({ username: '', password: '' });
//         }
//         else {
//             alert('Invalid credentials!');
//             setLoginData({ username: '', password: '' });
//         }
//         e.preventDefault();
//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <form onSubmit={submitLogin}>
//                     <input type='text' name='username' value={loginData.username} onChange={handleLogin} autoFocus required />
//                     <br />
//                     <input type='password' name='password' value={loginData.password} onChange={handleLogin} required />
//                     <br />
//                     <input type='submit' value='Login' onChange={handleLogin} />
//                 </form>
//             </div>
//         </div>
//     );

// };

// export default Login;


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