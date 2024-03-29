import "./FoodCartItem.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomModal from "../CustomModal";
import { deleteFood } from "../../redux/slices/foodSlice";
//import "../Product/Product"
import { Image } from "react-bootstrap";

const FoodCardItem = (fooditem) => {
  const dispatch = useDispatch();

  const [id, setId] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: fooditem.id,
        name: fooditem.name,
        price: fooditem.price,
        image: fooditem.image,
        description: fooditem.description,
        calories: fooditem.calories,
      })
    );
  };

  const imgStyle = {
    backgroundImage: `url(../src/images/${fooditem.image})`,
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
      {showPopUp && (
        <CustomModal
          id={id}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      )}
      <main className="grid">
        <article>
          <Image
            src={`./${fooditem.image}`}
            alt={`Image of ${fooditem.name}`}
            onClick={() => [setId(fooditem.id), setShowPopUp(true)]}
          />
          <div className="text">
            <h4 className="foodname fw-bold">{fooditem.name}</h4>
            <p>{fooditem.description}</p>
            <div className="row">
              <div className="col-md-6 text-left">
                <Button
                  variant="outline-primary mx-2"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="col-md-3  text-end"></div>
              <div className="col-md-3  text-end">
                <div className="row">
                  <div className="col-3">
                    <Link
                      variant="outline-primary mx-2"
                      to={`/updatefood/${fooditem.id}`}
                    >
                      <span className="icon-wrapper">
                        <i className="fa fa-edit icon-grey"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="col-3">
                    <Link
                      onClick={() => dispatch(deleteFood(fooditem.id))}
                      variant="outline-primary mx-2"
                    >
                      <span className="icon-wrapper">
                        <i className="fa fa-trash-alt icon-grey"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="col-6"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
    </li>
  );
};

export default FoodCardItem;
