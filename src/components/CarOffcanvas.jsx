import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CarsModal from './CarsModal'


function CarOffcanvas({
  handleCloseCanvas,
  handleShowCanvas,
  showOffcanvas,
  car, handleAddNewClient
}) {
  // console.log(cars);
  const [show, setShow] = useState(false);
  const { brand, img, model, km, year, price, color } = car;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Offcanvas className="bg-offcanvas" show={showOffcanvas} onHide={handleCloseCanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={img} width="320px" height="200px" alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>
            <strong>Brand :</strong> {brand}
          </h5>
          <h5>
            <strong>Model :</strong> {model}
          </h5>
          <p>
            <strong>Year :</strong> {year}
          </p>
          <p>
            <strong>Color :</strong> {color}
          </p>
          <p>
            <strong>Km :</strong> {km}
          </p>
          <p>
            <strong>Price :</strong> {price}$
          </p>
          <Button onClick={handleShow}>Make an Offer</Button>
          <CarsModal
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
            brand={brand}
            handleAddNewClient={handleAddNewClient} 
            handleCloseCanvas={handleCloseCanvas}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CarOffcanvas;
