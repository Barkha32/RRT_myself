import  "../Product/Product.css";
import Button from 'react-bootstrap/Button'; 
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomModal from "../CustomModal";
import { deleteFood } from "../../redux/slices/foodSlice";

 const FoodCardItem =(fooditem)=>{
    const dispatch = useDispatch();

    const[id, setId] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    
    const addToCartHandler =() => {
        dispatch(cartActions.addItem({
          id:fooditem.id,
          name:fooditem.name,
          price:fooditem.price,
          image:fooditem.image,
          description:fooditem.description

        }))
      }

     

    const imgStyle= {
        backgroundImage: `url(${fooditem.image})`
      };

      return (
        
       
        // <div className="productcard">
        //  <ul>
        //     <li>
        //         <h3>Product Name: {product.name}</h3>
        //         <img  src={`../src/Images/${product.image}`}  alt={product.name}></img>
        //         <p>{product.price}</p>
        //         <button onClick={() => {dispatch(addItem({name: product.name, price: product.price, image: product.image}))}}>Add to Cart</button>
        //     </li>
        // </ul>
        // </div>

            <li>
               {showPopUp && <CustomModal id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp} />}
<div className="blog-card">
<div className="meta">
  <div className="photo"  style={imgStyle}></div>
  {/* <ul className="details">
        <li>
        </li>
    </ul> */}
</div>
<div className="description">
  <button className="linkbtn"  onClick={()=> [setId(fooditem.id), setShowPopUp(true)]}>{fooditem.name} </button>
  <h2>${fooditem.price}</h2>
 
             
  <div className="center">
  {/* <button className="button" onClick={() => {dispatch(addItem({id: product.id,name: product.name, price: product.price, image: product.image  }))}}> */}
  <Button  variant="outline-primary mx-2" onClick={addToCartHandler}>
        Add to Cart
      </Button>
      <Link  variant="outline-primary mx-2" to={`/updatefood/${fooditem.id}`}>
        Update
      </Link>
      <Link onClick={()=>dispatch(deleteFood(fooditem.id))}  variant="outline-primary mx-2" >
        Delete
      </Link>
  </div>
  
   {/* <button  onClick={() => {dispatch(addItem({name: product.name, price: product.price, image: product.image}))}}>Add to Cart</button>  */}
     {/* <p>{fooditem.description}</p> */}
</div>
</div>
</li>
  
    );
}

 export default FoodCardItem;