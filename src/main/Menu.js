import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Menu = () => (
    <div>
        <ul>
            <li>
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
                <Link className="nav-link" to="/signin">Signin</Link>
            </li>
            <li>
                <Link className="nav-link" to="/signup">Signup</Link>
            </li>
        </ul>
    </div>
)

export default withRouter(Menu);