import React from "react";
import Menu from "./Menu";
import "../styles.css";




const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
        <div>
            <Menu />
            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
            <footer className="copyright" style={{ textAlign: "center", fontSize: "8px" }}>Copyright AJP</footer>
        </div>

    );

export default Layout;
