import  "./Product.css";
import  {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice.js"


export default function Product(product){

  //Home.js
   {/* <div className="products">
        {products.map((product) => (
          <Product {...product} key={product.id}/>
        ))}
      </div> */}
   // const Yourimage= {`../src/Images/${product.image}`};
    const imgStyle= {
        backgroundImage: `url(../src/${product.image})`
      };
    const dispatch = useDispatch();
      console.log(imgStyle);
     
      const addToCartHandler =() => {
        dispatch(cartActions.addItem({
          id:product.id,
          name:product.name,
          price:product.price,
          image:product.image

        }))
      }

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
<div className="productcard">
         <ul>
            <li>
<div className="blog-card">
<div className="meta">
  <div className="photo"  style={imgStyle}></div>
  {/* <ul className="details">
        <li>
        </li>
    </ul> */}
</div>
<div className="description">
  <h1>{product.name}</h1>
  <h2>${product.price}</h2>
  <div className="center">
  {/* <button className="button" onClick={() => {dispatch(addItem({id: product.id,name: product.name, price: product.price, image: product.image  }))}}> */}
  <button className="button" onClick={addToCartHandler}>
        <svg width="180px" height="60px" viewBox="0 0 250 100" className="border" >
          <polyline points="249,1 249,67 1,67 1,1 249,1" className="bg-line" />
          <polyline points="249,1 249,67 1,67 1,1 249,1" className="hl-line" />
        </svg>
        <span>Add to Cart</span>
      </button>
  </div>
  
   {/* <button  onClick={() => {dispatch(addItem({name: product.name, price: product.price, image: product.image}))}}>Add to Cart</button>  */}
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dolorem.</p>
</div>
</div>
</li></ul></div>
    
    );
}