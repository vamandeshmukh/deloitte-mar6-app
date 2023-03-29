// with bootstrap

import axios from "axios";
import { useState } from "react";
import $ from 'jquery';
const dataUrl = 'https://jsonplaceholder.typicode.com/users';
let isLoggedIn = false;

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

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
                    // $('#exampleModal').modal('show');
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
            <div className="container py-3 my-3">
                <p className="display-2 text-primary">Login Component</p>
                <div className="col-6 shadow px-2 py-2">
                    <p className="lead">Login here to continue</p>
                    <form className="form form-group" onSubmit={submitLogin}>
                        <input className="form-control my-2 py-2" type='text' name='username' value={loginData.username} onChange={handleLogin} autoFocus required />
                        <input className="form-control my-2 py-2" type='password' name='password' value={loginData.password} onChange={handleLogin} required />
                        <input className="form-control my-3 py-3 btn border" type='submit' value='Login' onChange={handleLogin} />
                    </form>
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default Login;


// // without bootstrap

// import axios from "axios";
// import { useState } from "react";

// const dataUrl = 'https://jsonplaceholder.typicode.com/users';
// let isLoggedIn = false;

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });

//     const handleLogin = (e) => {
//         setLoginData({ ...loginData, [e.target.name]: e.target.value });
//     };

//     const submitLogin = (e) => {
//         axios.get(dataUrl)
//             .then((resp) => {
//                 resp.data.forEach(elem => {
//                     if (elem.username === loginData.username) {
//                         isLoggedIn = true;
//                     }
//                 });
//                 if (isLoggedIn === true) {
//                     alert(`${loginData.username} logged in successfully`);
//                     setLoginData({ username: '', password: '' });
//                 }
//                 else {
//                     alert('Invalid credentials!');
//                     setLoginData({ username: '', password: '' });
//                 }
//             })
//             .catch(e => alert(e));
//         isLoggedIn = false;
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
