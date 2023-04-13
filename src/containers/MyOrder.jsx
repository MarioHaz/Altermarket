import  { useContext } from "react";
import OrderItem from '../components/OrderItem'
import AppContext from "../context/AppContext";
import "../css/Main.css";
import arrow from "../assets/icons/flechita.svg";
import { saveAs } from 'file-saver';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }; 

  const handleCheckout = () => {
    const products = state.cart.reduce((acc, item) => {
      const index = acc.findIndex((product) => product.name === item.name);
      if (index === -1) {
        acc.push({
          name: item.name,
          price: item.price,
          quantity: 1,
          total: item.price
        });
      } else {
        acc[index].quantity += 1;
        acc[index].total += item.price;
      }
      return acc;
    }, []);
  
    const totalPrice = sumTotal();
    const order = {
      products: products,
      totalPrice: totalPrice
    };
    const json = JSON.stringify(order);
    console.log(json);

    const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
  saveAs(blob, 'order.json');
};
  
   


  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
      <div className="seccion-scroll">
        {state.cart.map((item, index) => (
          <OrderItem product={item} key={`orderItem-${index}`} />
        ))}
        </div>
        
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button" id="checkout" onClick={handleCheckout}>Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
