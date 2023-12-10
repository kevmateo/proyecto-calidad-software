import React from "react";
import './tarjeta-palabra.css';
import Card from 'react-bootstrap/Card';
import { ListGroup, Button } from "react-bootstrap";
import { useState } from "react";

function TarjetaPalabra(props) {

  const [idioma, setIdioma] = useState("sanscrito");

  const handlerCambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  }

  const handlerCambiarIdiomaFrase = () => {
    if (idioma === "español") {
      return props.spanish;
    } else if (idioma === "ingles") {
      return props.english;
    } else {
      return props.sansckrit;
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`data:image/jpeg;base64,${props.imagen}`} />
      <Card.Body>
        <Card.Title>{handlerCambiarIdiomaFrase  ()}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.diccionaryWordModels.map((palabra, index) => (
          <ListGroup.Item key={index}>
            {idioma === "español" && palabra.word.spanish_w}
            {idioma === "ingles" && palabra.word.english_w}
            {idioma === "sanscrito" && palabra.word.sans_word}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body className="card-body-botones">
        <Button variant="primary" className="boton-sanscrito" onClick={() => handlerCambiarIdioma("sanscrito")} >Sánscrito</Button>
        <Button variant="primary" className="boton-español" onClick={() => handlerCambiarIdioma("español")} >Español</Button>
        <Button variant="primary" className="boton-ingles" onClick={() => handlerCambiarIdioma("ingles")} >Inglés</Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPalabra;