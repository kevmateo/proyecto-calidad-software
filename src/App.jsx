import './App.css';
import { Form, InputGroup } from 'react-bootstrap';
import TarjetaPalabra from './componentes/tarjeta-palabra';
import LoadingPage from './componentes/loading-page';
import { useState, useEffect, Suspense } from 'react';
import NavBar from './componentes/navbar.jsx';
import { CgDanger } from "react-icons/cg";
import datos_quemados from './datos_quemados.json';

function App(props) {

  const [palabras, setPalabras] = useState([]);
  const [palabrasAuxiliares, setPalabrasAuxiliares] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ultimoResultado, setUltimoResultado] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (props.setIsLoading === false) {
      setIsLoading(false); // Cambia isLoading a false cuando el componente se monta
    }

  }, [props.setIsLoading]);

  useEffect(() => {
    if (palabrasAuxiliares.length > 0) {
      setUltimoResultado(palabrasAuxiliares);
    }
  }, [palabrasAuxiliares]);

  useEffect(() => {
    if (palabrasAuxiliares.length === 0 && ultimoResultado.length > 0) {
      const timeoutId = setTimeout(() => {
        setUltimoResultado([]);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else if (palabrasAuxiliares.length > 0) {
      setUltimoResultado(palabrasAuxiliares);
    }
  }, [palabrasAuxiliares]);

  
  const handlerTraerPalabras = () => {
    fetch(`http://3.86.140.231/diccionary/imagenes`, {
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
  };

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
    const cleanText = texto.trim();
  
    const palabrasFiltradas = palabras.filter((p) => {
      const filterBySansckrit =
        p.sansckrit && p.sansckrit.toLowerCase().includes(cleanText.toLowerCase());
      const filterByEnglish =
        p.english && p.english.toLowerCase().includes(cleanText.toLowerCase());
      const filterBySpanish =
        p.spanish && p.spanish.toLowerCase().includes(cleanText.toLowerCase());
  
      const filterByWordModels = p.diccionaryWordModels.some((wp) => {
        const spanishWord =
          wp.word.spanish_w &&
          wp.word.spanish_w.toLowerCase().includes(cleanText.toLowerCase());
        const englishWord =
          wp.word.english_w &&
          wp.word.english_w.toLowerCase().includes(cleanText.toLowerCase());
        const sansWord =
          wp.word.sans_word &&
          wp.word.sans_word.toLowerCase().includes(cleanText.toLowerCase());
        return spanishWord || englishWord || sansWord;
      });
      return (
        filterBySansckrit || filterByEnglish || filterBySpanish || filterByWordModels
      );
    });
    setPalabrasAuxiliares(palabrasFiltradas);
  };

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

  const handlerToggleDarkMode = () => {
    setDarkMode(!darkMode);
    const body = document.body;
    if (darkMode) {
      body.classList.remove('dark-theme');
    } else {
      body.classList.add('dark-theme');
    }
  }

  return (
    <div className='contenido-principal-1'>
      {isLoading && <LoadingPage handleAnimationEnd={handleAnimationEnd} />}
      {!isLoading && (
        <>
          <NavBar id="nav-bar" darkMode={darkMode} toggleDarkMode={handlerToggleDarkMode} />
          <div className={`contenedor-principal ${isVisible ? 'visible' : ''}`}>
            <div className='contenedor-titulo'>
              <h1>SansGoogle</h1>
              <InputGroup className="input-gruop">
                <Form.Control data-bs-theme={darkMode ? 'dark' : 'light'}
                  placeholder="Escriba para empezar..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={filtroNombre}
                  onChange={handlerBuscarPalabras}
                  onFocus={handleInputFocus}
                />
              </InputGroup>
            </div>
            <Suspense fallback={<h2>Buscando...</h2>}>
              <div className={`contenedor-tarjetas ${(isSearching && palabrasAuxiliares.length > 0) ? 'visible' : ''}`}>
                {ultimoResultado.map((palabra, index) => (
                  <TarjetaPalabra darkMode={darkMode}
                    key={index}
                    id_s={palabra.id_s}
                    sansckrit={palabra.sansckrit}
                    english={palabra.english}
                    spanish={palabra.spanish}
                    diccionaryWordModels={palabra.diccionaryWordModels}
                    link={palabra.link}
                  />
                ))}
              </div>
            </Suspense>
            {isSearching && palabrasAuxiliares.length === 0 && (
              <div className="contenedor-sin-resultados">
                <p ><CgDanger size={20}/> No se encontraron resultados</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
