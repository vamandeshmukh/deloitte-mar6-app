
const Register = () => {

    return (
        <div>
            <div className="container py-3 my-3">
                <p className="display-4 text-primary py-2">Register</p>
                <hr />
                <div className="col-6 shadow px-2 py-2">
                    <p className="lead">Register here to continue</p>
                    <form className="form form-group">
                        <input className="form-control my-2 py-2" type='text' name='username' autoFocus required />
                        <input className="form-control my-2 py-2" type='password' name='password' required />
                        <input className="form-control my-3 py-2 btn border" type='submit' value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Register;


