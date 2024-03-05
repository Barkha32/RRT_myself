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
          <Modal.Title className='col-11 modal-title text-center border-bottom fw-bold'>{singleFood[0].name}</Modal.Title>
          <Button  variant="light" onClick={()=> setShowPopUp(false)}>X</Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1 border-bottom" controlId="exampleForm.ControlInput1">
              <div>
              <Image className='imgModal' src={`./${singleFood[0].image}`} fluid />
              </div>
           
              {/* <Form.Label>Food Title: {singleFood[0].name}</Form.Label> */}
              <Form.Label> {singleFood[0].description}</Form.Label>
              
              <div className='row ' >
                <div className='col-6'>
                <Form.Label ><span className='fw-bold'>Price :</span> ${singleFood[0].price}</Form.Label>
                </div>
                <div className='col-6'>
                <Form.Label><span className='fw-bold'>Total Calories :</span> {singleFood[0].calories}</Form.Label>
               </div>
              </div>
             </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer >
       
          <Button variant="secondary" className='mx-2 ' onClick={()=> setShowPopUp(false)}>
            Close
          </Button>
        
        </Modal.Footer>
 
      </div>
      </div>
 
  );
}

export default CustomModal;