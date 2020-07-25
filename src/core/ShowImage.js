import React from "react";
import { API } from "../config";
import styled from 'styled-components';

const ImageWrapper = styled.div`
img{
    height: 500px;
    width: 500px;
}
`

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <ImageWrapper>
            <img
                src={`${API}/${url}/photo/${item._id}`}
                alt={item.name}
                className="mb-3"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
        </ImageWrapper>
    </div>
);

export default ShowImage;
