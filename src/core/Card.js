import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import styled from "styled-components";

const cardWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    .card {
      width: 100%;
    }

    .row {
      display: unset;
    }
  }
`;

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  return (
    <div className="card ">
      <div
        style={{ background: "#ADADAD" }}
        className="card-header card-header-1 "
      >
        {product.name}
      </div>
      <div className="card-body">
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">
          {product.description.substring(0, 1000)}{" "}
        </p>
        <p className="card-p black-7">Price: $ {product.price}</p>
        <p className="black-7">
          Varietal: {product.category && product.category.name}
        </p>
        <p className="black-7">Year: {product.quantity} </p>
        <p className="black-7">
          Added on {moment(product.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default Card;
