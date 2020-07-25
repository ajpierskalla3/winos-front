import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import styled from "styled-components";


const HomeWrapper = styled.div`

`


const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <HomeWrapper>
            <Layout
                title="Welcome To Winos"
                description="Store and save all your favorite wines"
                className="container-fluid"
            >
                <Search />
                <h2 className="mb-4">Your Most Recent Wines</h2>
                <div className="row">
                    {productsByArrival.map((product, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div>

                {/* <h2 className="mb-4">Favorites</h2>
                <div className="row">
                    {productsBySell.map((product, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card product={product} />
                        </div>
                    ))}
                </div> */}
            </Layout>
        </HomeWrapper>
    );
};

export default Home;
