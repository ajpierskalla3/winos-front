import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import styled from "styled-components";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
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
    <Layout
      title="Welcome to Winos"
      description="A place to save and rate all your favorite wines"
      className="container-fluid"
    >
      {/* <Checkbox /> */}
      <h2 className="mb-4">My Wines</h2>
      <homeWrapper>
        <div style={{ display: "unset" }} className="row">
          {productsByArrival.map((product, i) => (
            <div key={i} className="mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </homeWrapper>
    </Layout>
  );
};

export default Home;
