
# Eli Essen - Casero & Saludable

Este es mi proyecto para el curso de "React" de Coder House en el año 2022.

Se trata de un simulador de eCommerce de productos de Essen.





## Logo
![Logo](https://i.imgur.com/BirJ9jh.png)


## Instalación local

$ git clone https://github.com/2detrebol/EliEssen-Brandi.git

$ cd eli-essen

$ npm install

$ npm start


## Rutas definidas

Configuradas en App.js

1. La ruta "/" (por default) muestra el título de bienvenida y el listado de todos los productos (ItemListContainer).

2. La ruta "/Categoria/:category" muestra los productos filtador según cada una de las 3 categorías existentes: Cacerolas, Sartentes, Complementos. Es el ItemListContainer + el filtro.

3. La ruta "/Recetas" muestra una page adicional en la que próximamente se incluirán videos de distintas preparaciones realizadas con los productos de la App.

4. La ruta "/Detalle/:id" muestra el detalle del producto seleccionado mediante el link "ver más", ubicando el producto mediante su id.

5. La ruta "*" define que toda otra ruta a la que se quiera acceder mediante el navegador del browser (y no sea alguna de las anteriores), devuelva "404 - página no encontrada" junto al logo de la App.

Los "NavLinks" se encuentran incorporados en NavLinks.js (categorías + recetas) y en el logo de NavBar.js (inicio)





## Detalles Adicionales

Se destaca que todos los componentes, así como cada uno de sus elementos se encuentran animados con Animate.css.

Además las "cards" que se muestran, en Item.js, tienen definido un "switch" que hace que cada una tomo el valor de su "backgroundColor" según el color del producto establecido en asyncMock.js.

Lo mismo ocurre en ItemDetail.js e ItemCount.js, toman color y backgroundColor de lo establecido en asyncMock.js para el producto que fue seleccionado.

Próximamente se implementará en ItemDetails.js la funcionalidad para que el usuario puede realizar cambio de color del producto elegido (se modificará la imágen y los colores de la Categoria que esta sobre la descripción, y del ItemCount).


## Screenshots

![App Screenshot](https://i.imgur.com/ESHW5kH.jpg)



![App Screenshot](https://i.imgur.com/NypyogX.jpg)



![App Screenshot](https://i.imgur.com/8pRHP1z.jpg)


![App Screenshot](https://i.imgur.com/9ljDqoF.jpg)


![App Screenshot](https://i.imgur.com/7jHhk6h.jpg)

![App Screenshot](https://i.imgur.com/G4Er4MV.jpg)




## Demo en formato gif

https://i.imgur.com/za57poO.gif


## Authors

Mauro Brandi - [@2detrebol](https://www.github.com/2detrebol)

