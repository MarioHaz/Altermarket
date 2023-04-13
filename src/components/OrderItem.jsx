import React from "react";

import "../css/Main.css";


const OrderItem = ({ product}) => {
  
  const { name, price, image } = product;

  

  return (
    <div className="OrderItem">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name}</p>
      <p>${price}</p>
     
    </div>
  );
};

export default OrderItem;
