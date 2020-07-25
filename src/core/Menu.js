import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import styled from "styled-components";

const MenuWrapper = styled.div`
background: none;
display: flex;
justify-content: flex-end;
/* color: #FFFAFA; */



ul{
  display: flex;
  padding: 5px;
  justify-content: space-around
}

li{
  padding: 20px;
  text-decoration: none;
  list-style-type: none;
}

.nav-link{
  text-decoration: none;
  font-family: "Apple Chancery";
  font-weight: 100;
  color: pink;
}
`


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "white" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <MenuWrapper>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/")}
          to="/"
        >
          Home
                </Link>
      </li>

      {/* <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/shop")}
          to="/shop"
        >
          Shop
                </Link>
      </li> */}

      {/* <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/cart")}
          to="/cart"
        >
          Cart{" "}
          <sup>
            <small className="cart-badge">{itemTotal()}</small>
          </sup>
        </Link>
      </li> */}

      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/user/dashboard")}
            to="/user/dashboard"
          >
            Wine Dashboard
                    </Link>
        </li>
      )}

      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/admin/dashboard")}
            to="/admin/dashboard"
          >
            Wine Dashboard
                    </Link>
        </li>
      )}

      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              Signin
                        </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              Signup
                        </Link>
          </li>
        </Fragment>
      )}

      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff" }}
            onClick={() =>
              signout(() => {
                history.push("/");
              })
            }
          >
            Signout
                    </span>
        </li>
      )}
    </ul>
  </MenuWrapper>
);

export default withRouter(Menu);
