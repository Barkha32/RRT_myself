
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import Cart from './components/pages/Cart.jsx';
import AddNewFood from './components/AddNewFood.jsx';
import UpdateFoodItem from './components/UpdateFoodItem.jsx';
import Checkout from './components/Checkout.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFood } from './redux/slices/foodSlice.js';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';






function App() {
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(showFood());
  
  },[dispatch]);
  const foodsdata = useSelector((state) => state.food.foodsdata);
  const loading = useSelector((state) => state.food.loading);
  console.log(" state.food", foodsdata);

  
  return (
    <div className='App'> 
      
      <Navbar></Navbar>
     
      <Routes>
      
         <Route path="/RRT_myself/" element={<Home foodsdata={foodsdata} loading={loading}></Home>} /> 
        <Route exact path="/RRT_myself/cart" element={<Cart></Cart>} />
        <Route exact path="/RRT_myself/login" element={<Login></Login>} /> 
        <Route exact path="/RRT_myself/addnewfood" element={<AddNewFood></AddNewFood>} />
        <Route path="/RRT_myself/updatefood/:id" element={<UpdateFoodItem></UpdateFoodItem>} />
        <Route path="/RRT_myself/checkout" element={<Checkout></Checkout>} />
        <Route path="/RRT_myself/register" element={<Register></Register>} />
       
      </Routes>
    </div>
  )
}

export default App
