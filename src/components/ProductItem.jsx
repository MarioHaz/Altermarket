
import '../css/Main.css';
import cart from '../assets/icons/bt_add_to_cart.svg';
import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const ProductItem = ({ name, price, stock, type, image}) => {
  const { addToCart } = useContext(AppContext);
  const [remainingStock, setRemainingStock] = useState(stock);
  
  
  

    const handleClick = ({}) => {// se recibe un producto
      if (remainingStock > 0 ){ 
        addToCart({ name, price, stock, type, image });
        setRemainingStock(remainingStock - 1);
       }
    }

	return (
        <div className="ProductItem">
           <img src={image} alt="" />
          <div className="product-info">
            <div>
              <p>Price: ${price}</p>
              <p>{name}</p>

              {remainingStock === 0 ? (
              <p>No more in stock</p>
              ) : (
              <p>Stock: {remainingStock}</p>
              )}
              
              <p>Catgeory: {type}</p>
            </div>
            <figure className="addToCart" onClick={() => handleClick({ item: { name, price, stock, type, image } })}>
              <img src={cart} alt=""/>
            </figure>
          </div>
        </div>
      );
}

export default ProductItem;