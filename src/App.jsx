
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
// import Login from './components/Login.jsx';






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
      <Home ></Home>
      <Routes>
      
         <Route path="/" element={<Home foodsdata={foodsdata} loading={loading}></Home>} /> 
        <Route exact path="/cart" element={<Cart></Cart>} />
        {/* <Route exact path="/login" element={<Login></Login>} /> */}
        <Route exact path="/addnewfood" element={<AddNewFood></AddNewFood>} />
        <Route path="/updatefood/:id" element={<UpdateFoodItem></UpdateFoodItem>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
       
      </Routes>
    </div>
  )
}

export default App
