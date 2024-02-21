
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import Cart from './components/pages/Cart.jsx';
import AddNewFood from './components/AddNewFood.jsx';
import UpdateFoodItem from './components/UpdateFoodItem.jsx';
import Checkout from './components/Checkout.jsx';
// import Login from './components/Login.jsx';






function App() {

  return (
    <div className='App'> 
      
      <Navbar></Navbar>
      <Routes>
      
        <Route path="/" element={<Home></Home>} />
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
