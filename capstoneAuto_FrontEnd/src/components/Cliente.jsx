import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Cliente = () => {

    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        telefono: "",
        cognome: "",
        indirizzo: "",
    })

    const fetchCliente = async () => {
        try {
            let response = await fetch("http://localhost:8080/clienti", {
                method: "POST",
                body: JSON.stringify(cliente),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                alert("Ti sei iscritto alla newsletter con successo!")
                window.location.replace("/home")
            }
        } catch (error) {

        }

    }






    return (
        <div className="cliente-container">
            <Form className="cliente-form">
                <Form.Group controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il nome"
                        value={cliente.nome}
                        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formCognome">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il cognome"
                        value={cliente.cognome}
                        onChange={(e) => setCliente({ ...cliente, cognome: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formIndirizzo">
                    <Form.Label>Indirizzo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci l'indirizzo"
                        value={cliente.indirizzo}
                        onChange={(e) => setCliente({ ...cliente, indirizzo: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Inserisci l'email"
                        value={cliente.email}
                        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Inserisci il numero di telefono"
                        value={cliente.telefono}
                        onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
                    />
                </Form.Group>

                <Button variant="dark" className='mt-5' onClick={() => {
                    console.log(cliente)
                    fetchCliente()
                }}>
                    Registrati
                </Button>
            </Form>
        </div>
    );
};

export default Cliente;
