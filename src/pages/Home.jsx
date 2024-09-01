import { Container } from "react-bootstrap";
import Cars from "../components/Cars";
import { cars } from "../helpers/data";
import CarsOffer from "../components/CarsOffer";
import { useState } from "react";

const Home = () => {
  const getLocal = JSON.parse(localStorage.getItem("myDeneme")) || []
  const [carSale, setCarSale] = useState(getLocal)

  const handleAddNewClient = (newClient) => {
        setCarSale([...carSale,newClient])
        saveLocalStorage([...carSale,newClient])
  }

  const saveLocalStorage = (data) => {
    localStorage.setItem("myDeneme", JSON.stringify(data))
  }
  
  const handleDelete = (id) => {
      const filteredList = carSale.filter((car) => car.id !== id)
      setCarSale(filteredList)
      saveLocalStorage(filteredList)
  }

  const handleDoubleClick = (id) => {
      const updatedList = carSale.map((car) => 
      car.id === id ? {...car,soldOut:!car.soldOut} : car
      )
      
      setCarSale(updatedList)
      saveLocalStorage(updatedList)
  }

  return (
    <>
    <Container className="homepage">
      <h1 className="text-center text-warning">POSEIDON CAR GALLERY</h1>
      <Cars 
      cars={cars} 
      handleAddNewClient={handleAddNewClient}/>
      <CarsOffer 
      carSale={carSale} 
      handleDelete={handleDelete} 
      handleDoubleClick={handleDoubleClick}/>
      <footer className="text-center fs-5 text-light">Made by Poseidon &copy;{new Date().getFullYear()}</footer>
    </Container>
    </>
  )
};

export default Home;
