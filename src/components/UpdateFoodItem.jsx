import { useEffect, useRef, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateFood } from "../redux/slices/foodSlice";

const UpdateFoodItem = () => {
    const {id}= useParams();
    console.log("id:" ,id);
    const {foodsdata, loading} = useSelector((state) => state.food);

    const [updatedData, setUpdatedData] = useState();
    const [pickedImage, setPickedImage] = useState();
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const inputImage= useRef();
    function handlePickClick(){
      inputImage.current.click();
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
    setUpdatedData({
      ...updatedData, [event.target.name] : x
  })
      
    }
    

    
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
        navigate("/RRT_myself/");
    }

    console.log("updatedData:" ,updatedData);
  return (
    <Form
      className="mx-auto bg-white mb-3 mt-5 p-3 w-50 "
      onSubmit={handleUpdate}
    >
      <h5>Update food detail:</h5>
      <Form.Group className="mb-3">
        <Form.Label>Food Name:</Form.Label>
        <Form.Control 
        type="text" 
        name="name" 
        value={updatedData && updatedData.name}
        onChange={getNewUpdatedData}
        required
         />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <Form.Control
        type="text" 
        name="description" 
        value={updatedData && updatedData.description}
        onChange={getNewUpdatedData}
        required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price:</Form.Label>
        <Form.Control 
        type="number" 
        name="price" 
        value={updatedData && updatedData.price}
        onChange={getNewUpdatedData}
        required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Total Calories:</Form.Label>
        <Form.Control 
        type="number" 
        name="calories" 
        value={updatedData && updatedData.price}
        onChange={getNewUpdatedData}
        required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <div className="controls">
        <div className="preview">
          {/* {!pickedImage && <p>No image picked yet.</p>} */}
          {updatedData && 
            (<div  className="limit">
              <Image className="img" src={pickedImage ? pickedImage : updatedData.image }
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
        
        <button
        className="button"
        type="button"
        onClick={handlePickClick}>Upload Image</button>
      </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="outline-primary mx-2" 
        type="submit">
          Submit
        </Button>
        <Button variant="outline-primary mx-2"
         type="button"
         onClick={()=>navigate("/RRT_myself/")}>
          cancel
        </Button>
      </Form.Group>
    </Form>
  );
};

export default UpdateFoodItem;
