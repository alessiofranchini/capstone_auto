import React from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CarDetails = () => {
    const { id } = useParams();
    const [car,setCar]=useState([])
    const fetchAuto = async() => {
        let response = await fetch (`http://localhost:8080/auto/${id}`)
        if (response.ok){
            let dati = await response.json ()
            setCar(dati)
        }
    }
    useEffect(()=>{
        fetchAuto()
    },[])


   

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card style={{ maxWidth: '800px' }} className="m-4">
                <Image src={car.foto} className="car-image"/>
                <Card.Body>
                    <Card.Title className="mb-4">{car.marca +' '+ car.modello}</Card.Title>
                    <Card.Text>Marca: {car.marca}</Card.Text>
                    <Card.Text>Modello: {car.modello}</Card.Text>
                    <Card.Text>Anno: {car.anno}</Card.Text>
                    <Card.Text>Informazioni: {car.informazioni}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CarDetails;
