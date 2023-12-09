import './App.css';
import { Form, InputGroup } from 'react-bootstrap';
import TarjetaPalabra from './componentes/tarjeta-palabra';
import LoadingPage from './componentes/loading-page';
import { useState, useEffect } from 'react';
import datos_quemados from './datos_quemados.json';
function App() {

  const [palabras, setPalabras] = useState([]);
  const [palabrasAuxiliares, setPalabrasAuxiliares] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  /*
  const handlerTraerPalabras = () => {
    fetch(`${process.env.REACT_APP_CALIDAD_SOFTWARE_API_PATH_BASE}diccionary/imagenes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error al obtener los platos");
        }
      })
      .then((data) => {
        //localStorage.setItem("imagen", JSON.stringify(data));
        setPalabras(data);
        setPalabrasAuxiliares(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error de red: " + error);
      });
  }
  */
  const handlerTraerPalabras = () => {
    setPalabras(datos_quemados);
    setPalabrasAuxiliares(datos_quemados);
  }
  useEffect(() => {
    // const imagenesGuardadas = localStorage.getItem("imagen");
    // if (imagenesGuardadas) {
    //   const imagen = JSON.parse(imagenesGuardadas);
    //   setPalabras(imagen);
    //   setPalabrasAuxiliares(imagen);
    //   console.log(imagen);
    // } else {
    handlerTraerPalabras();
    //}
  }, []);

  const handlerBuscarPalabras = (e) => {
    const texto = e.target.value;
    setFiltroNombre(texto);
    const palabrasFiltradas = palabras.filter((palabra) => palabra.sansckrit.toLowerCase().includes(texto.toLowerCase()) || palabra.english.toLowerCase().includes(texto.toLowerCase()) || palabra.spanish.toLowerCase().includes(texto.toLowerCase()));
    setPalabrasAuxiliares(palabrasFiltradas);
  }
  const handleInputFocus = () => {
    setIsSearching(true);
  };

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    setTimeout(() => {
      setIsVisible(true);
    }, 1600);
  };

  return (
    <div className='contenido-principal'>
      {isLoading && <LoadingPage handleAnimationEnd={handleAnimationEnd} />}

      {!isLoading && (
        <div className={`contenedor-principal ${isVisible ? 'visible' : ''}`}>
          <div className='contenedor-titulo'>
            <h1>Innovatech Solutions</h1>
            <InputGroup className="input-gruop">
              <Form.Control
                placeholder="Escriba para empezar..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={filtroNombre}
                onChange={handlerBuscarPalabras}
                onFocus={handleInputFocus}
              />
            </InputGroup>
          </div>
          <div className={`contenedor-tarjetas ${isSearching ? 'visible' : ''}`}>
            {palabrasAuxiliares.map((palabra, index) => (
              <TarjetaPalabra
                key={index}
                id_palabra={palabra.id_palabra}
                sansckrit={palabra.sansckrit}
                english={palabra.english}
                spanish={palabra.spanish}
                diccionaryWordModels={palabra.diccionaryWordModels}
                imagen={palabra.imagen || ""}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
