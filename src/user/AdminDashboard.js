import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminWrapper = styled.div`
.list-grp{
    text-decoration: none;
    list-style-type: none;
    color: white;
}

.nav-link:visited{
    color: white;
}
`

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Wine Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">

                        <Link className="nav-link" to="/create/category">
                            Add a New Wine Varietal
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">
                            Add New Wine
                        </Link>
                    </li>
                    {/* <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">
                            View Orders
                        </Link>
                    </li> */}
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            Update Wine List
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout

            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
        >
            <AdminWrapper>
                <div className="row">
                    <div className="col-3">{adminLinks()}</div>
                    {/* <div className="col-9">{adminInfo()}</div> */}
                </div>
            </AdminWrapper>
        </Layout>
    );
};

export default AdminDashboard;
