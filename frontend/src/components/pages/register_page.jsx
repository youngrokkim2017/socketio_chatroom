import React from 'react';
import axios from 'axios';

const LoginPage = (props) => {
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const loginUser = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios
            .post('http://localhost:5000/user/login', {
                email,
                password,
            })
            .then((res) => {
                localStorage.setItem('CC_Token', res.data.token);
                props.history.push('/dashroad');
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
                Login
            </div>
            <div>
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
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;