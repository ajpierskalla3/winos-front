import React from 'react';
import Menu from './Menu';
import styled from "styled-components";

const LayoutStyle = styled.div`
    background-color: #83677B;
`

const Layout = ({ title = "Title", description = "Description", children }) => {
    return (
        <LayoutStyle>
            <Menu />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                {children}
            </div>
        </LayoutStyle>
    )
}


export default Layout;