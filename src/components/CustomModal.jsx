import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./CustomModal.css";
import { useSelector } from 'react-redux';
import { CloseButton } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const CustomModal = ({id, showPopUp, setShowPopUp}) => {
    const allFood = useSelector((state) => state.food.foodsdata);
    const singleFood = allFood.filter((fooditem) => fooditem.id === id);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
    

      
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
          <Button  variant="light" onClick={()=> setShowPopUp(false)}>X</Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <div>
              <Image className='imgModal' src={singleFood[0].image} fluid />
              </div>
           
              <Form.Label> {singleFood[0].name}</Form.Label>
              <Form.Label>{singleFood[0].description}</Form.Label>
              <Form.Label>$ {singleFood[0].price}</Form.Label>
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='mx-2' onClick={()=> setShowPopUp(false)}>
            Close
          </Button>
        
        </Modal.Footer>
 
      </div>
      </div>
 
  );
}

export default CustomModal;