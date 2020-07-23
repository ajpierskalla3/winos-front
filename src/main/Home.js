import React from 'react';
import Layout from './Layout';
import styled from "styled-components";


const Image = styled.div`
background-image: url('./grapes.jpg');
`


const Home = () => {
    return (
        <Layout title="Home Page" description="The best wine store in America"><Image></Image></Layout>

    )
}


export default Home;