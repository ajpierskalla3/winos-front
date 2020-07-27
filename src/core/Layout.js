import React from "react";
import Menu from "./Menu";
import styled from "styled-components";

const LayoutWrapper = styled.div`
 background: rgba(76, 100, 80, 0.3);
 color: white;
 font-family: "Apple Chancery";
 font-weight: 100;
 align-content: center
 /* display: flex;
 flex-flow: row;
 justify-content: space-between; */




 .title{
     font-weight: 500;
 }

 .nav-links{
     color: white;
 }
`

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
        <>
            <Menu />

            <LayoutWrapper>
                <h1>WINOS</h1>
                <div className="jumbotron">
                    <h2 className='title'>{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </LayoutWrapper>
        </>
    );

export default Layout;
