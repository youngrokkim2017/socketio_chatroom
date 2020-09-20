import React from 'react';
import axios from 'axios';

const RegisterPage = (props) => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const registerUser = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios
            .post('http://localhost:5000/user/register', {
                name,
                email,
                password,
            })
            .then((res) => {
                props.history.push('/login');
            })
            .catch((err) => {
                if (
                    err &&
                    err.res &&
                    err.res.data &&
                    err.res.data.message
                ) {
                    console.log(err.res.data.message);
                }
            })
    }

    return (
        <div>
            <div>
                Register
            </div>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        ref={nameRef}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@email.com"
                        ref={emailRef}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        ref={passwordRef}
                    />
                </div>
                <button onClick={registerUser}>Register</button>
            </div>
        </div>
    )
}

export default RegisterPage;