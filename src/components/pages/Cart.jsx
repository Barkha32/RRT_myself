import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import "./Cart.css";
const  Cart = () => {
  
 const cartItems = useSelector(state => state.cart.items);
 //const carttotalItems = useSelector(state => state.cart.totalQuantity);

 //const total=  items.cart.reduce((a,b) => (a + b.price), 0);
 const dispatch = useDispatch();

//  const removeItemHandler = () =>{
//   dispatch(cartActions.removeItemFromCart(item.id));
//  };

 

  return (
    


    <div className="padded-boxes">
    <section >
        <h3 className="heading">Shopping Cart</h3>
        <div className="padded">
        {/* <ul>
        
          {items.cart.map((item) => (
          <li key={item.id} >{item.name }
          <div>{item.qty}</div></li>
        ))}
      </ul>  */}
            <ul>
              {cartItems.map((item) =>
               <li className="item" key={item.id} >
                <div >
                <img className="itemimg" src="../src/images/beef-tacos.jpg" alt="image of food"></img>
                </div>
                  <div className="header">
                 
                    <h3>{item.name}</h3>
                    <div className="price">{item.price}${item.totalprice}
                    <span className="itemprice">(${item.price}/item)</span></div>
                  </div>
                 
                  <div className="details">
                  <div className="quantity"> X <span>{item.qty}</span></div>
                  <div className="actions">
                    <button onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}>-</button>
                    <button onClick={() => dispatch(cartActions.addItem({
                       id:item.id,
                       name:item.name,
                       price:item.price,
                       image:item.image
                    }))}>+</button>
                    </div>
                  </div>
               </li> )}
            </ul>

        </div>
    </section>
    <section >
        <h3 className="heading">Order Summery</h3>
        <div className="padded">
       {/* {items.cart.map((item) => (
        
        <li key={item.id}>
         
          <div>{item.name}</div>
          <div>{item.price}</div>
          
          <div>{qty++}</div> 
          
          
        </li>
       ))} */}
         </div>
    </section>
</div>
  );
};

export default Cart;

