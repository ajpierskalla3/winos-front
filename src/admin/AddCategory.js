import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import styled from 'styled-components';

const categoryWrapper = styled.div`
    .text-warning{
        border: none;
        background: none;
        padding: none;
        text-decoration: none;
    }
    .text{
        padding-right: 10px;
    }
`

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleChange = e => {
        setError("");
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
        createCategory(user._id, token, { name }).then(data => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCategoryFom = () => (
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
            <button className="btn btn-outline-primary">Create Varietal</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h3 className="text">{name} is created</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Varietal should be unique</h3>;
        }
    };

    const goBack = () => (
        <categoryWrapper>
            <div className="text-warning">
                <Link to="/admin/dashboard" className="text-warning">
                    Back to Wine Dashboard
            </Link>
            </div>
        </categoryWrapper>
    );

    return (

        <Layout
            title="Add a new varietal"
            description={`Welcome ${user.name}, ready to add a new varietal?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryFom()}
                    {goBack()}
                </div>
            </div>

        </Layout>

    );
};

export default AddCategory;
