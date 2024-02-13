import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateFood } from "../redux/slices/foodSlice";

const UpdateFoodItem = () => {
    const {id}= useParams();
    console.log("id:" ,id);
    const {foodsdata, loading} = useSelector((state) => state.food);

    const [updatedData, setUpdatedData] = useState();
    const dispatch = useDispatch();
    const navigate= useNavigate();

    
    useEffect(()=>{

        if(id){
            const getFooddata = foodsdata.filter((fooditem) => fooditem.id === id);
            setUpdatedData(getFooddata[0]);

        }
    },[]);
    

    const getNewUpdatedData = (e) =>{
        setUpdatedData({
            ...updatedData, [e.target.name] : e.target.value
        })
    }

    const handleUpdate=(e) =>{
        e.preventDefault();
        dispatch(UpdateFood(updatedData));
        navigate("/");
    }

    console.log("updatedData:" ,updatedData);
  return (
    <Form
      className="mx-auto bg-white mb-3 mt-5 p-3 w-50 "
      onSubmit={handleUpdate}
    >
      <h5>Enter your food detail:</h5>
      <Form.Group className="p-2">
        <Form.Label>Food Name</Form.Label>
        <Form.Control 
        type="text" 
        name="name" 
        value={updatedData && updatedData.name}
        onChange={getNewUpdatedData}
         />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control
        type="text" 
        name="description" 
        value={updatedData && updatedData.description}
        onChange={getNewUpdatedData}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control 
        type="text" 
        name="price" 
        value={updatedData && updatedData.price}
        onChange={getNewUpdatedData}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>image</Form.Label>
        <Form.Control 
        type="text" 
        name="image" 
        value={updatedData && updatedData.image}
        onChange={getNewUpdatedData}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="outline-primary mx-2" 
        type="submit">
          Submit
        </Button>
        <Button variant="outline-primary mx-2"
         type="button">
          cancel
        </Button>
      </Form.Group>
    </Form>
  );
};

export default UpdateFoodItem;
