# Portal de ecommerce Entrega Final Coderhouse

La entrega consiste en un ecommerce de venta de notebooks. Como no usamos motores de bases de datos en el curso, usé un JSON local con los datos de los productos que se acceden usando ajax.

La información del carrito queda almacenada en el Local Storage, de manera tal que el usuario puede retomar la interacción con el site, el site lee el LS y reconstruye el carrito, para que el usuario cuente con las últimas selecciones realizadas en el mismo.

El site incluye posibilidad de filtrar y ordenar información, agregar datos al carrito, cambiar la cantidad de productos en el mismo, eleimiar un producto en particular o todos los productos del carrito y procesar la compra, accediendo a Mercado Pago.

El portal usa jQuery y bootstrap 

## Uso de los fuentes

Descarga los fuentes.

-------------------------------------------------------------------------------------------------------------
| archivo            | Función                                                                              |
|--------------------|--------------------------------------------------------------------------------------|
| styles.css         | hoja de estilos del template de bootstrap                                            |
| own.css            | estilos propios                                                                      |
| cart.js            | javascript carrito de compras y addisnitra LS                                        |
| checkout.js        | javascript proceso pago Mercado Pago                                                 |
| jquery-3.6.0.min.js| librería jQuery                                                                      |
| request.js         | request incial y definición de listeners                                             |
| scripts.js         | script js que lee productos, pinta productos, ordena, filtra                         |
| dir img            | estan las imagenes que usa el site                                                   |
| dir json           | está eñl JSON de productos                                                           |

    
  
## Autor

- [@gaballester](https://github.com/gaballester)
- Correo electrónico del desarrollador guillermoaballester@gmail.com
- Copywrite Guillermo Ballester 2021

--------------------------------------------------------------------------------------------------------------