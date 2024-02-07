# Configuración del proyecto con React


## Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm start`

Ejecuta la aplicación en modo desarrollo.
Abre http://localhost:3000: http://localhost:3000 para verla en tu navegador.

La página se recargará automáticamente cuando realices cambios.
También puedes ver posibles errores de lint en la consola.

## SANS GOOGLE

### Descripción:
La aplicación que te sumerge en el apasionante universo de las posturas de yoga, presentadas en tres idiomas distintos! Experimenta la riqueza de las poses en español, inglés y sánscrito a través de nuestra plataforma diseñada para entusiastas del yoga y practicantes que buscan una experiencia completa y enriquecedora.
En lugar de ser solo una plataforma de traducción, Sans Google se erige como un portal que te invita a explorar, comprender y conectar con la esencia única de cada postura. 
¡Sans Google te guiará en tu viaje de descubrimiento!

### Funcionalidad:

#### Características Destacadas
##### •	Traducción Tri-Idiomática:
Explora las posturas de yoga con facilidad en español, inglés y sánscrito. 
##### •	Navegación Intuitiva:
Explora de manera rápida y eficiente gracias a nuestra interfaz fácil de usar. 
##### •	Visualización Clara y Concisa:
Una experiencia visual con representaciones detalladas de cada postura. Sans Google va más allá al ofrecerte no solo el nombre de la postura en los tres idiomas, sino también una representación gráfica para una comprensión más profunda.
##### •	Estilo Personalizado:
Personaliza tu experiencia de visualización con Sans Google. Elige entre diferentes estilos de representación gráfica para adaptar las imágenes de las posturas a tu preferencia estética.

### Equipo de Desarrollo
 
Johan Mantilla (coordinador) - Analista de requerimientos
José Terán - Desarrollador de software
Kevin Cano - Desarrollador frontend
Kenny Pinchao - Diseñador de software
Edison Sánchez - Tester
Jairo Simba - Analista de negocio


## Imagenes
Las imagenes son llamadas desde la nube, aqui ejemplos de como llamarlas.
Si se las colca dentro de las cartas de donde se muestra en la pagina web se las llama de la siguiente manera:
<Card.Img variant="top" src={https://s3-calidad-software.s3.us-east-2.amazonaws.com/calidad/Proyecto/${props.id_palabra}.jpg} style={{ height: '200px' }} />

Otro ejemplo de como llamar a una imagen desde la nube: 
Es el apartado de la nube(s3-calidad-software.s3.us-east-2.amazonaws.com)

https://s3-calidad-software.s3.us-east-2.amazonaws.com/calidad/Proyecto/3.jpg
