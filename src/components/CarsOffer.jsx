import { Col, Container, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import img1 from "../assets/49586626_9264409.jpg";

const CarsOffer = ({ carSale, handleDelete, handleDoubleClick }) => {
  return (
    <Container className="gap-5">
      <h2 className="text-center text-warning">Cars Offers</h2>
      <div className="list">
        {carSale.length === 0 ? <img src={img1} alt="" /> :
        carSale.map(({ id, day, client, soldOut, brand, offer }) => (
          <Row
            key={id}
            className={`text-center app-list ${soldOut ? "soldOut" : ""}`}
            onDoubleClick={() => handleDoubleClick(id)}
          >
            <Col>
              <h5>Client : {client}</h5>
              <h6>Brand : {brand}</h6>
            </Col>

            <Col>
              <h5>Date : {new Date(day).toLocaleDateString("tr")}</h5>
              <h6>Offer : {offer}$</h6>
            </Col>

            <Col>
              <TiDelete
                onClick={() => handleDelete(id)}
                className="text-danger fw-bold fs-1"
                role="button"
              />
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default CarsOffer;
