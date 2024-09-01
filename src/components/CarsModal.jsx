import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";


const CarsModal = ({ handleClose, show, brand, handleAddNewClient,handleCloseCanvas }) => {
  // console.log(doctor);

  const [client, setClient] = useState("")
  const [offerDate, setOfferDate] = useState("")
  const [offer, setOffer] = useState(0)
  const handleSubmit = (e) => {
    if(client && offerDate && offer){
    e.preventDefault()
    const newClient = {
      id:new Date().getTime(),
      client : client[0].toUpperCase()+client.slice(1),
      day: offerDate,
      soldOut: false,
      brand:brand,
      offer: offer
    }
    handleAddNewClient(newClient)
    handleClose()
    handleCloseCanvas()
    Swal.fire({
      title: `Merhaba ${client}`,
      text: `${offer}$ olan teklifiniz alınmıştır.`,
      icon: "success",
      background:"#A3B2B8"
    });}else{
      Swal.fire({
        title: `Merhaba`,
        text: `Bütün bilgilerinizi eksiksiz girmeniz gerekmektedir.`,
        icon: "error",
        background:"#A3B2B8"
      })
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make an offer for {brand}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="name">Name & Surname</Form.Label>
          <Form.Control
            type="text"
            id="name"
            onChange={(e) => setClient(e.target.value)} 
            required
          />
          <Form.Label htmlFor="offer">Your Offer</Form.Label>
          <Form.Control
            type="number" 
            min="0"
            id="offer"
            onChange={(e) => setOffer(e.target.value)} 
            required
          />
          <Form.Label htmlFor="date">Your Offer Date</Form.Label>
          <Form.Control
            type="date" 
            min="0"
            id="date"
            onChange={(e) => setOfferDate(e.target.value)} 
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={(e) => handleSubmit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarsModal;
