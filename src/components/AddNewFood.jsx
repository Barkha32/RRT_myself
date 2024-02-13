import React, { useCallback, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { createUserFood } from "../redux/slices/foodSlice";
import { useNavigate } from "react-router-dom";

const AddNewFood = () => {
  const [fooddata, setFooddata] = useState({});
 // setUsers({...users , [e.target.name] : e.target.value});
  // const getUserData = useCallback((event) => 
  //    const {name, value} = event.target;
  //  setUsers(users => {
  //    return {
  //      ...users,
  //      [name]: value,
  //    };
  //  });
  // )
const navigate = useNavigate();

const dispatch = useDispatch();

const getFoodData = e => {
  fooddata[e.target.name] = e.target.value;
  setFooddata(fooddata)
  
}

const handleSubmit =(e) =>{
  e.preventDefault();
  console.log("fooddata",fooddata);
  dispatch(createUserFood(fooddata));
  navigate("/");
}

    return (
        <Form className="mx-auto bg-white mb-3 mt-5 p-3 w-50 " onSubmit={handleSubmit}>
          <h5>Enter your food detail:</h5>
          <Form.Group className="p-2"  >
            <Form.Label>Food Name</Form.Label>
            <Form.Control type="text" name="name" onChange={getFoodData}/>
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label>description</Form.Label>
            <Form.Control type="text" name="description" onChange={getFoodData}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>price</Form.Label>
            <Form.Control type="text" name="price" onChange={getFoodData}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>image</Form.Label>
            <Form.Control type="text" name="image" onChange={getFoodData}/>
          </Form.Group>
          <Form.Group className="mb-3" >
          <Button  variant="outline-primary mx-2" type="submit">
            Submit
          </Button>
          <Button  variant="outline-primary mx-2" type="button">
            cancel
          </Button>
          </Form.Group>
        </Form>
      );
}

export default AddNewFood;