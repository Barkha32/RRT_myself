import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  //const dispatch = useDispatch();
 // const items = useSelector(state => state);
//  console.log("items:" , items);
  //const totalItems= items.cart.length;
const cartQty = useSelector(state =>  state.cart.totalQuantity);

const allFoodCount = useSelector((state) => state.food.foodsdata)

  return (
    <nav>
      <Link to="/" className="title">
         Foodie Cafe({allFoodCount.length}) 
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
       
        <li>
          <NavLink>Login</NavLink>
        </li>
       
        <li>
          <NavLink to="/addnewfood">Add Food Item</NavLink>
        </li>
        {/* <li>
          {/* <NavLink to="/cart">Cart({totalItems ? totalItems : 0})</NavLink> end comment
          <NavLink to="/cart">Cart ({cartQty})</NavLink>
        </li> */}
        <li>
          {/* <NavLink to="/cart">Cart({totalItems ? totalItems : 0})</NavLink> */}
          <NavLink to="/cart">Cart({cartQty})</NavLink>
        </li>
      </ul>
    </nav>
  );
}
