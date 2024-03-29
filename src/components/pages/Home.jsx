
import  "../Product/Product.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFood } from '../../redux/slices/foodSlice';
import FoodCardItem from "./FoodCardItem";
import coverImg from "../../images/margherita-pizza.jpg";
import "./Home.css";

export default function Home() {
  const coverimgStyle={backgroundImage: `url(${coverImg})`};

const dispatch =useDispatch();
const { foodsdata, loading} = useSelector((state) => state.food);



useEffect(()=>{
  dispatch(showFood());

},[dispatch]);

if(loading){
  return (
  <div className="row text-center p-4 fw-bold">
    <p>Please wait.. Loading Data.</p>
  </div>);
}

  return (
    
   <>
{/*     
     <div className="CoverImage" style={coverimgStyle}></div> */}
   <div className="foodCard">
         <ul>
    {foodsdata && foodsdata.map((fooditem) =>
           ( 
            <FoodCardItem {...fooditem} key={fooditem.id}>
            
              </FoodCardItem>
         ))};
         </ul>
         </div>
   </>
        
     
   

   
  );
}
