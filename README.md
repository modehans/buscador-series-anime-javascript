# **Evaluación final módulo 2**

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de anime, que nos permite des/marcar las series como favoritas y guardarlas en local storage.
La API a la cual realizamos la petición es https://api.jikan.moe/v4/anime.
La información sobre la API se encuentra en el siguiente enlace https://docs.api.jikan.moe/.
El ejercicio también tiene una parte de maquetación con HTML y Sass.
[Página de busqueda de series](http://beta.adalab.es/modulo-2-evaluacion-final-modehans/)

## Peticiones del ejercicio:

1. Crear estructura básica de HTML. Con un campo de texto un botón para buscar series por su título y un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.

2. Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de Jikan para la búsqueda de series de anime.

3. Recoger el texto introducido por la usuaria.

4. Introducir el texto en la dirección de la API.

5. Pintar una tarjeta por cada serie encontrada, mostrando TITULO e IMAGEN, que devuelve la API.

6. Detectar cuando la imagen no es específica de la serie y sustituirla por una imagen de placeholder.com donde en la propia URL indicamos el tamaño, colores, texto.

7. Pintar la información en la página.

8. Selección de serie como favorita. Visualizándolo intercambiando el color de fondo y la fuente.

9. Crear sección de favoritas a la izquierda debajo del formulario de la página(array favoritas). las imágenes de favoritas se mantienen visibles aunque se realice otra búsqueda.
10. Almacenar el listado de favoritos en el localStorage. Al recargar se debe mostrar.

## Bonus

- La búsqueda también funciona al pulsar intro
- Borrar favoritos al hacer click en una 'x' al lado de cada favorito, borrándolo del favorito y del localStorage.
- En la parte de búsqueda cuando aparezca una serie que tenemos en como favorita, que se vea resaltada y que podamos añadirla o quitarla de esa sección.
- Botón de borrado completo de favoritos.
- Dar estilos a la maquetación.

## Funcionamiento:

Para realizar una busqueda hay que escribir el nombre de la serie a buscar en el campo "Introduce un título". Al pulsar el boton buscar o intro en el teclado, en el campo de resultados apareceran las series encontradas, compuestos de una imagen y el título de la serie.
Pulsando borrar
Nos muestra un listado como máximo de 25 resultados, el servidor tiene limitado a 25 resultados por página como máximo, aunque he aumentado el límite no devuelve más de 25 por págna, por lo que habría que hacer un paginado, debido a la complegidad actualmente no esta implementado.
Pulsando sobre ellas, se marcarán como favoritas, se resaltará el borde exterior y apareceran en el margen izquierdo de la pantalla.

![Busqueda de Series](/docsImages/pantallaBusqueda.png)

Si no introducimos ningún nombre nos salen los primeros 25 títulos de la base de datos.

En la sección de "Series Favoritas", si pulsamos sobre el aspa, se eliminará de la lista y se quitará el vorde resaltado de la parte de resultados.
Pulsando sobre el botón "Borrar Favoritas", se borra toda la lista de favoritos.

Si no encuentra ningún resultado, nos devuelve una frase de no encontrada con el nombre de la serie que hemos introducido.

![Busqueda no encontrada](/docsImages/busquedaNoEncontrada.png)

Cuando cierras el navegador la lista de favoritos se conserva para sucesivas sesiones.

## Lo que he aprendido

- Manipular el array que viene del servidor para quedarme sólo con los datos que yo necesito.
- Guardar en local storage y diferenciar entre array null y undefined.
- Utilizar operadores condicionales ternarios.
- Reutilizar una función dependiendo quien la ejecute.
- Escribir un Readme con MarkDown

## Instalación por primera vez del proyecto

1. Descargar el repositorio
   > git colone https://github.com/Adalab/modulo-2-evaluacion-final-modehans
2. Abrir una terminal
3. Instalar las dependencias
   > npm instal

## Arrancar el proyecto

Una vez instaladas las dependencias hay que arrancar el proyecto. para ello hay que ejecutar el siguiente comando en la terminal.

> npm start

De esta forma se abre una ventana en nuestro navegador y muestra la página web.
Cada vez que se modifique un fichero se refresca la página.

## Tecnología utilizada

- [Adalab Web Starter kit](https://github.com/Adalab/adalab-web-starter-kit)
- [Sass](https://sass-lang.com/)
- [JS](https://developer.mozilla.org/es/docs/Web/JavaScript)
