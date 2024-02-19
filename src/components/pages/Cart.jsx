import { useDispatch, useSelector } from "react-redux";
import cartSlice, { cartActions } from "../../redux/slices/cartSlice";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";



const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);
  //const carttotalItems = useSelector(state => state.cart.totalQuantity);

  const total=  cartItems.reduce((a,b) => (a + b.totalprice), 0);
  const shippingCharges = (!total===0 &&  total < 20 ? 5 : 0);
  const tax =(total * 5)/100;
  const checkoutPrice= total+shippingCharges+tax;
  
  console.log("total", total);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cancelOrderHandler = () => { 
    dispatch(cartActions.reset());
    navigate("/");};

  return (
    <>
    <div className="padded-boxes">
      <section>
        <h3 className="heading border-bottom">Shopping Cart</h3>
        <div className="padded">
          {/* <ul>
        
          {items.cart.map((item) => (
          <li key={item.id} >{item.name }
          <div>{item.qty}</div></li>
        ))}
      </ul>  */}
          
          {cartItems.length === 0 &&
          <div className="row text-center p-2">
           <p>Cart is empty.</p> 
           </div>}
          <ul>
            {cartItems.map((item) => (
              <li className="item " key={item.id}>
                <div className="row border-bottom  ">
                  <div className="col-4 mb-2">
                    <img
                      className="itemimg"
                      src="../src/images/beef-tacos.jpg"
                      alt="image of food"
                    ></img>
                  </div>
                  <div className="col-4 mt-3 ">
                    <div className="row">{item.name}</div>
                    <div className="row mt-3">${item.price}/item</div>
                  </div>
                  <div className="col-4">
                    {/* <Link variant="outline-primary mx-2">
                      <span className="icon-wrapper">
                        <i className="fa fa-trash-alt icon-grey"></i>
                      </span>
                    </Link> */}
                    <div className="row ">
                      <div className="actions">
                     
                        <Button className="btn btn-light"
                          onClick={() =>
                            dispatch(cartActions.removeItemFromCart(item.id))
                          }
                        >
                          -
                        </Button>
                        <span className="mx-2 mt-2">{item.qty}</span>
                        <Button className="btn btn-light "
                          onClick={() =>
                            dispatch(
                              cartActions.addItem({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                image: item.image,
                              })
                            )
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="row  "> ${item.totalprice.toFixed(2)}</div>
                  </div>
                </div>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ordersummery">
        <h3 className="heading">Order Summery</h3>
        <div className="padded mb-5">
          {/* {items.cart.map((item) => (
        
        <li key={item.id}>
         
          <div>{item.name}</div>
          <div>{item.price}</div>
          
          <div>{qty++}</div> 
          
          
        </li>
       ))} */}
       <div className="row px-4 py-2">
        <div className="col-10">
        <span className="fw-bold">Subtotal: </span>
        </div>
        <div className="col-2">
        <span className="fw-normal">{total.toFixed(2)}</span>
        </div>
       </div>
       <div className="row px-4 py-1">
        <div className="col-10">
        <span className="fw-bold">Total Item: </span>
        </div>
        <div className="col-2">
        <span className="fw-normal">{cartItems.length}</span>
        </div>
       </div>
       <div className="row px-4 py-1">
        <div className="col-10">
        <span className="fw-bold">Shipping Charges: </span>
        </div>
        <div className="col-2">
        <span className="fw-normal">{shippingCharges}</span>
        </div>
       </div>
       <div className="row px-4 py-1">
        <div className="col-10">
        <span className="fw-bold">Tax: </span>
        </div>
        <div className="col-2">
        <span className="fw-normal">{tax.toFixed(2)}</span>
        </div>
       </div>
       <div className="row px-4 py-2 border-top">
        <div className="col-10">
        <span className="fw-bold">Checkout Price: </span>
        </div>
        <div className="col-2">
        <span className="fw-normal">{checkoutPrice.toFixed(2)}</span>
        </div>
       </div>
      
         <div className="row px-4 py-1 border-top">
          <Button  variant="primary mx-2" type="button" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
        </div>
        
        <div className="row px-4 py-1 ">
          <Button  variant="primary mx-2" type="button" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </div>
  
        <div className="row px-4 py-1">
          <Button  variant="primary mx-2" type="button" onClick={cancelOrderHandler}>
            Empty Cart
          </Button>
        </div>
        

      
        </div>
       
      </section>
    </div>
   
    </>
  );
};

export default Cart;
