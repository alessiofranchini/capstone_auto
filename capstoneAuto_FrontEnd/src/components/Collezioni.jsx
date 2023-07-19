import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Collezioni = () => {
    const [cars,setCars]=useState([])
    const fetchAuto = async() => {
        let response = await fetch ('http://localhost:8080/auto')
        if (response.ok){
            let dati = await response.json ()
            setCars(dati)
        }
    }
    useEffect(()=>{
        fetchAuto()
    },[])
    
    return (
        <Container>
            <h1 className="collezioni-title">Collezioni</h1>
            <Row>
                {cars.map((car) => (
                    <Col key={car.id} md={4} className="mb-4">
                        <Card>
                            <Link to={`/collezioni/${car.id}`}>
                                <Card.Img variant="top" src={car.foto} className="card-collezioni" />
                            </Link>
                            <Card.Body>
                                <Card.Title>{car.marca +' '+ car.modello}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Collezioni;
