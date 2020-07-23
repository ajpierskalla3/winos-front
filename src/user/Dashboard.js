import React from 'react';
import Layout from '../main/Layout';
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'


const Dashboard = () => {


    const { user: { _id, name, email, role } } = isAuthenticated()

    const userLinks = () => {
        return (
            <div className="dash-links">
                <h4 className='dash-links-header'>User Dashboard</h4>
                <ul className='dash-list'>
                    <li className="dash-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="dash-item">
                        <Link className="nav-link" to="/profile/update">Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => {
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

    const purchaseHistory = () => {
        return (
            <div className='card'>
                <h3 className='card-header'>Purchase History</h3>
                <ul className='card-list'>
                    <li className='card-item'>History</li>
                </ul>
            </div>
        )
    }



    return (
        <Layout title='Dashboard' description={`Hello ${name}`} className="container">
            <>
                {userLinks()}
                {userInfo()}
                {purchaseHistory()}
            </>
        </Layout>
    )
}


export default Dashboard;