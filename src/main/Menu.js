import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import styled from "styled-components";
import { signout, isAuthenticated } from '../auth'


const NavContainer = styled.div`
  position: sticky;
  /* display: flex; */
  justify-content: center;
  top: 0;
  border-bottom: 1px solid #dfdfdf;
  background-color: white;
  width: 100%;
  height: 54px;
  z-index: 100;


  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* width: 100%; */
    background-color: #501b1d;
    left: 0;

  }

  ul {
    display: flex;
    justify-content: flex-end;
  }

 li {
    margin-left: 22px;
    padding-top: 6px;

  }

  .nav-link{
    color: maroon;
    text-decoration: none;
    color: #adadad;
  }


 `
const Menu = ({ history }) => (
  <NavContainer>
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>

        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li>
            <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li>
            <Link className="nav-link" to="/user/dashboard">Dashboard</Link>
          </li>
        )}
        {!isAuthenticated() && (
          <>
            <li>
              <Link className="nav-link" to="/signin">Signin</Link>
            </li>
            <li>
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </>
        )}

        {isAuthenticated() && (
          <li className="nav-link">
            <Link>
              <span className="nav-link" onClick={() => signout(() => {
                history.push('/')
              })}>
                Signout
            </span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  </NavContainer>
)

export default withRouter(Menu);