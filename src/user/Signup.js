import React, { useState } from 'react';
import Layout from '../main/Layout';
import styled from 'styled-components';
import { API } from '../config';


const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const signup = (user) => {
        fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        signup({ name, email, password })

    }

    const signUpForm = () => (
        <form>
            <div className="signup-form">
                <label className="text">Name</label>
                <input onChange={handleChange('name')} type="text" className="input" />
            </div>
            <div className="signup-form">
                <label className="text">Email</label>
                <input onChange={handleChange('email')} type="email" className="input" />
            </div>
            <div className="signup-form">
                <label className="text">Password</label>
                <input onChange={handleChange('password')} type="password" className="input" />
            </div>
            <button onClick={clickSubmit}>Submit</button>

        </form>
    )
    return (
        <div>
            <Layout title='Signup' description="Signup to the worlds greates wine app.">

            </Layout>
            {signUpForm()}
            {/* {JSON.stringify(values)} */}
        </div>

    )
}
export default Signup;