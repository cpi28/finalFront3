# Entrega final para Front End 3 - Carla Perez

Para esta evaluación final, se puso en práctica todos los conocimientos adquiridos en el curso. Desde la creación y manejo de formularios, Hooks (como useState, useContext, useReducer), estilos, props, peticiones asincrónicas e integración con API, routing, testing y demás apartados fundamentales del ecosistema de React. 

Para ello, se ha creado una aplicación web que consiste en la visualización de Dentistas disponibles, integrando diferentes rutas, formularios de contacto, temas de estado, agregado a favoritos, entre otros. Todo ello consumiendo información de una API. 

## Requisitos

1) **Contexto global:** pone a disposición tema de colores para toda la app (claro u oscuro), implementando el Hook useReducer.
2) **Rutas:** 
   - **/home**	donde se renderiza una card por cada dentista devuelto por la API.
   - **/dentist/:id** donde se muestra un detalle de la información de cada dentista, como resultado de un link en la card de /home.
   - **/contacto** que implementa un form (con sus validaciones pertinentes) y capture la información del usuario, con un campo Nombre con longitud mayor a 5 y un campo Email (con formato correcto de email). En caso de haber un error, se muestra el siguiente mensaje: “Por favor verifique su información nuevamente”. Una vez enviado el formulario, se muestra un mensaje de éxito con el siguiente formato: “Gracias [nombre del usuario], te contactaremos cuanto antes vía mail”.
   - **/favs** donde se renderizan las cards de los dentistas agregados a favoritos desde /home. Dicha información es almacenada dentro del localStorage del browser.

3) **Navbar y Footer:** en todas las rutas, se muestra un navbar (con links de navegación y un botón para cambiar el tema) y el footer.

## Instalación
- npm install
## Ejecución
- npm run dev

## Ejecución de las pruebas unitarias
- npm test


