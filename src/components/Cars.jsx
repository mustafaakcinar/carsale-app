import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarOffcanvas from "./CarOffcanvas";

const Cars = ({ cars, handleAddNewClient }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [car, setCar] = useState({});

  const handleCloseCanvas = () => setShowOffcanvas(false);
  const handleShowCanvas = (car) => {
    setShowOffcanvas(true);
    setCar(car);
  };

  return (
    <Container className="text-center card-div-head">
      <h2>CARS ON SALE</h2>
      <Row className="gap-3 mb-2 card-div">
        {cars.map((car) => (
          <Col key={car.id}>
            <img
              onClick={() => handleShowCanvas(car)}
              className="cars-img"
              src={car.img}
              alt={car.brand}
              title={car.brand}
            />
          </Col>
        ))}
      </Row>

      <CarOffcanvas
        car={car}
        handleCloseCanvas={handleCloseCanvas}
        handleShowCanvas={handleShowCanvas}
        showOffcanvas={showOffcanvas}
        handleAddNewClient={handleAddNewClient}
      />
    </Container>
  );
};

export default Cars;
