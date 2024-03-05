import {React,  useCallback, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { createUserFood } from "../redux/slices/foodSlice";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import  "../components/ImageUpload.css";

 

const AddNewFood = () => {
  const [fooddata, setFooddata] = useState({});
  const [pickedImage, setPickedImage] = useState();
//  const dispatch = useDispatch();
const inputImage= useRef();
function handlePickClick(){
  inputImage.current.click();
}
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
  navigate("/RRT_myself/");
}

const handleImageChange = (event) => {
  const file= event.target.files[0];

if(!file){
  return;
}
const fileReader= new FileReader();
fileReader.onload=() =>{
  setPickedImage(fileReader.result);
};
fileReader.readAsDataURL(file);
console.log("file", file);
console.log("file reader", file.name);
const x=file.name;
console.log("event.target.name",event.target.name);
fooddata[event.target.name] = x;

setFooddata(fooddata)
  // dispatch(
  //   imageUploadAction.imageupload({
  //     imageval: file, 
  //     imgname: file.name
  //   })
  // );
}

    return (
        <Form className="mx-auto bg-white mb-3 mt-5 p-3 w-50 " onSubmit={handleSubmit}>
          <h5>Enter food detail:</h5>
          <Form.Group className="mb-3"  >
            <Form.Label>Food Name:</Form.Label>
            <Form.Control type="text" name="name" onChange={getFoodData} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label>Description: </Form.Label>
            <Form.Control type="text" name="description" onChange={getFoodData} required/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" name="price" onChange={getFoodData} required/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Total Calories:</Form.Label>
            <Form.Control  type="number" name="calories" onChange={getFoodData} required />
          </Form.Group>
          <Form.Group className="mb-3 " >
            <Form.Label>Upload your image:</Form.Label>
            {/* <Form.Control type="text" name="image" onChange={getFoodData} required/>  */}
            <div className="controls">
        <div className="preview">
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && 
            (<div  className="limit">
              <Image className="img" src={pickedImage}
                alt="The image selected by user."
              />
            </div>)}
        </div>
        <input
          type="file"
          className="input"
          id="image"
          accept="image/png, image/jpeg, image/jpg"
          name="image"
          ref={inputImage}
          onChange={handleImageChange}
          required
          
        />
        <label name="labelimgname" ></label>
        <button
        className="button"
        type="button"
        onClick={handlePickClick}>Pick an Image</button>
      </div>
          </Form.Group>
          <Form.Group className="mb-3" >
          <Button  variant="outline-primary mx-2" type="submit">
            Submit
          </Button>
          <Button  variant="outline-primary mx-2" type="button" onClick={()=>navigate("/RRT_myself/")}>
            cancel
          </Button>
          </Form.Group>
        </Form>
      );
}

export default AddNewFood;