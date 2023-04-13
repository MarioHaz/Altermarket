import React from "react";
import "../css/Main.css";
import ProductItem from "../components/ProductItem";


const ProductList = ({ data }) => {
 
    return (
      <section className="main-container">
        <div className="ProductList">
          {data.products.map((product) => (
            <ProductItem
              key={product.name}
              name={product.name}
              price={product.unit_price}
              stock={product.stock}
              type={product.type}
              image={product.img}
            />
          ))}
        </div>
      </section>
    );
  };

export default ProductList;