import React from 'react';
import Layout from '../main/Layout';
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'


const AdminDashboard = () => {


    const { user: { _id, name, email, role } } = isAuthenticated()

    const adminLinks = () => {
        return (
            <div className="dash-links">
                <h4 className='dash-links-header'>Admin</h4>
                <ul className='dash-list'>
                    <li className="dash-item">
                        <Link className="nav-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="dash-item">
                        <Link className="nav-link" to="/create/product">Create Product</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminInfo = () => {
        return (
            <div className="dash-container">
                <h2 className="dash-header">User Information</h2>
                <ul className='dash-list'>
                    <li className="dash-item">{name}</li>
                    <li className="dash-item">{email}</li>
                    <li className="dash-item">{role === 1 ? 'Admin' : "User"}</li>
                </ul>
            </div>
        )
    }





    return (
        <Layout title='Dashboard' description={`Hello ${name}`} className="container">
            <>
                {adminLinks()}
                {adminInfo()}
            </>
        </Layout>
    )
}


export default AdminDashboard;