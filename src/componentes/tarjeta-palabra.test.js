import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import TarjetaPalabra from "./tarjeta-palabra.jsx";

test('renderiza el componente correctamente', () => {
  const ejemploProps = {
    spanish: 'Postura de la Montaña',
    english: 'Mountain Pose',
    sansckrit: 'Tadasana',
  };

  const componente = render(<TarjetaPalabra ejemploProps={ejemploProps} />);
  
  expect(componente).toMatchSnapshot();
});

test('click en el boton de cambiar idioma', () => {
  const ejemploProps = {
    spanish: 'Postura de la Montaña',
    english: 'Mountain Pose',
    sansckrit: 'Tadasana',
  };

  const componente = render(<TarjetaPalabra ejemploProps={ejemploProps}  />);

  const botonSanscrito = componente.getByRole('button', { name: 'Sánscrito' });
  const botonEnglish = componente.getByRole('button', { name: 'Inglés' });
  const botonSpanish = componente.getByRole('button', { name: 'Español' });

  fireEvent.click(botonSanscrito);
  fireEvent.click(botonEnglish);
  fireEvent.click(botonSpanish);
});

test('verificar la existencia de elementos en el componente', () => {
  const ejemploProps = {
    spanish: 'Postura de la Montaña',
    english: 'Mountain Pose',
    sansckrit: 'Tadasana',
  };

  const componente = render(<TarjetaPalabra ejemploProps={ejemploProps}  />);

  const spanishButton = componente.getByRole('button', { name: 'Español' });
  const englishButton = componente.getByRole('button', { name: 'Inglés' });
  const sansckritButton = componente.getByRole('button', { name: 'Sánscrito' });

  expect(componente).toMatchSnapshot();
  expect(spanishButton).toBeInTheDocument();
  expect(englishButton).toBeInTheDocument();
  expect(sansckritButton).toBeInTheDocument();
});
  