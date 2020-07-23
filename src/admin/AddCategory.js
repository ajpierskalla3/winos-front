import React, { useState } from 'react';
import Layout from '../main/Layout';
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom';
import { createCategory } from './apiAdmin';


const AddCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const { user, key } = isAuthenticated()

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)
        createCategory(user._id, key, { name })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setError('')
                    setSuccess(true)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h3 className="text">{name} was created</h3>
        }
    }

    const showError = () => {
        if (error) {
            return <h3 className="text-error">{name} needs to be unique</h3>
        }
    }

    return (
        <Layout title='Add a new category' description={`Hello ${name}, add a new category`} className="container">
            {showSuccess()}
            {showError()}
            {newCategoryForm()}

        </Layout>
    )
}

export default AddCategory;