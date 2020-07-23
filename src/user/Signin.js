import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import Layout from '../main/Layout';
import styled from 'styled-components';
import { API } from '../config';
import { signin, authenticate, isAuthenticated } from '../auth'


const Signin = () => {
    const [values, setValues] = useState({
        email: 'e@gmail.com',
        password: 'google5',
        error: '',
        loading: false,
        redirectAfterSignin: false
    });

    const { email, password, loading, error, redirectAfterSignin } = values;
    const { user } = isAuthenticated()

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }



    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                console.log(data)
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false });
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectAfterSignin: true
                        })

                    });
                }
            }).catch(err => {
                console.log("error")
            })
    };

    const signinForm = () => (
        <form>
            <div className="signup-form">
                <label className="text">Email</label>
                <input onChange={handleChange('email')} type="email" className="input" value={email} />
            </div>
            <div className="signup-form">
                <label className="text">Password</label>
                <input onChange={handleChange('password')} type="password" className="input" value={password} />
            </div>
            <button onClick={clickSubmit}>Submit</button>

        </form>
    )

    const showError = () => (
        loading && (
            <div className="loading">
                <h2>loading...</h2>
            </div>)
    )

    const redirectUser = () => {
        if (redirectAfterSignin) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }

        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }


    return (
        <div>
            <Layout title='Signin' description="Signin to the worlds greates wine app.">

            </Layout>
            {showError()}
            {signinForm()}
            {redirectUser()}

        </div>

    )
}
export default Signin;