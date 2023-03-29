import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const dataUrl = 'https://jsonplaceholder.typicode.com/users/';

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '', confirmpassword: '' });
    const [canRegister, setCanRegister] = useState(false);

    const handleRegister = (e) => {
        console.log(registerData.username);
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const submitRegister = (e) => {
        e.preventDefault();
        if (registerData.password === registerData.confirmpassword) {
            axios.get(dataUrl)
                .then((resp) => {
                    resp.data.forEach(elem => {
                        if (elem.username !== registerData.username) {
                            setCanRegister(true);
                        }
                        else {
                            alert('User already exists!');
                            setRegisterData({ username: '', password: '', confirmpassword: '' });
                            setCanRegister(false);
                        }
                    });

                    if (canRegister === true) {
                        console.log(registerData);
                        axios.post(dataUrl, { username: registerData.username })
                            .then((resp) => {
                                console.log(resp);
                                alert(`${resp.data.username} registered successfully`);
                                setRegisterData({ username: '', password: '', confirmpassword: '' });
                            })
                            .catch(e => alert(e));
                    }
                })
                .catch(e => alert(e));
        }
        else {
            alert('Password and conform password mismatch!');
            setRegisterData({ username: '', password: '', confirmpassword: '' });
            setCanRegister(false);
        }
    };


    return (
        <div>
            <div className="container py-3 my-3">
                <p className="display-4 text-primary py-2">Register</p>
                <hr />
                <div className="col-6 shadow px-2 py-2">
                    <p className="lead">Register here to continue</p>
                    <form className="form form-group"
                        onSubmit={submitRegister} >
                        <input className="form-control my-2 py-2 text-light"
                            placeholder="Please enter username"
                            type='text' name='username'
                            value={registerData.username}
                            onChange={handleRegister}
                            autoFocus required />
                        <input className="form-control my-2 py-2"
                            placeholder="Please enter password"
                            type='password' name='password'
                            value={registerData.password}
                            onChange={handleRegister}
                            required />
                        <input className="form-control my-2 py-2"
                            placeholder="Please confirm password"
                            type='password' name='confirmpassword'
                            value={registerData.confirmpassword}
                            onChange={handleRegister}
                            required />
                        <input className="form-control my-3 py-2"
                            type='submit'
                            value='Register'
                            onChange={handleRegister}
                        />
                    </form>
                </div>
            </div>
            <div className="col-6 px-2 py-2">
                <p>Already registered? <Link to='/login'>Login</Link></p>
            </div>

        </div>
    );

};

export default Register;


