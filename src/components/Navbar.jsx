import { useState, useContext } from "react";// conectamos tambien el navbar
import "../css/Main.css";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/ALTERMARKET.svg";
import shopping from '../assets/icons/icon_shopping_cart.svg';
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";



const Navbar = ({data}) => {

  const [toggle, setToggle] = useState(false); // no se muestra nada hasta que la funcion cambie el estado
  const { state } = useContext(AppContext); // se trae el estado y se conecta con lo importado arrriba
  const hanldeToggle = () => {
    setToggle(!toggle);
  }//con esta funcion se busca cambiar el estado inicial de toggle y lo va a cambiar a la inversa cada que se de click
  const [filteredData,setFilteredData]= useState([])

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    //se movera sobre todo el data y po rcada elemento lo almacenara dentro de value
    const newFilter = data.products.filter((value)=>{
      // si value.name incluye la search word entonces la dejaremos
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.type.toLowerCase().includes(searchWord.toLowerCase()) 
       
    });
    if (searchWord === ""){
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
    
  };
  
  return (
    <nav>
      <img src={menu} alt="menu" className="menu"  />
      

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>

      <div className="search">
        <div className="searchInput">
         <input className="input" type="text" placeholder="Search..." onChange={handleFilter}/> 
        </div>
       { filteredData.length > 0 && (
        <div className="dataResult">
          {filteredData.map((value, key)=> {
           return <a className="dataItem" key={key}><p>{value.name}</p></a>
          })}
        </div>
        )}
      </div>

      <div className="navbar-right">
        <ul>
          <li
            className="navbar-shopping-cart" onClick={()=>setToggle(!toggle)}
          >
            <img src={shopping} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
          </li>
        </ul>
      </div>
      {toggle && <MyOrder/>}
    </nav>
  );
};

export default Navbar;