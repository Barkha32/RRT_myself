
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Home} from './components/pages/Home';
import Cart from './components/pages/Cart.jsx';
import Product from './components/Product/Product.jsx';
import AddNewFood from './components/AddNewFood.jsx';
import UpdateFoodItem from './components/UpdateFoodItem.jsx';






function App() {

  return (
    <div className='App'> 
      
      <Navbar></Navbar>
      <Routes>
      
        <Route path="/" element={<Home></Home>} />
        <Route exact path="/cart" element={<Cart></Cart>} />
        <Route exact path="/addnewfood" element={<AddNewFood></AddNewFood>} />
        <Route path="/updatefood/:id" element={<UpdateFoodItem></UpdateFoodItem>} />
       
      </Routes>
    </div>
  )
}

export default App
