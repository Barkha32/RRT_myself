
import  "../Product/Product.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFood } from '../../redux/slices/foodSlice';
import FoodCardItem from "./FoodCardItem";
import coverImg from "../../images/margherita-pizza.jpg";
import "./Home.css";

export  function Home() {
  const coverimgStyle={backgroundImage: `url(${coverImg})`};

const dispatch =useDispatch();
const { foodsdata, loading} = useSelector((state) => state.food);



useEffect(()=>{
  dispatch(showFood());

},[dispatch]);

if(loading){
  return (<h2>Loading</h2>);
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
