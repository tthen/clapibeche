![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)



# clapibeche

Esta plataforma realiza estudios de mercado que ayudan en la toma de
decisiones empresariales para ofrecer servicios de calidad.
Al diligenciar el siguiente formulario está de acuerdo con las
condiciones del servicio y el uso de los datos suministrados.

Al utilizar este medio acepta términos y condiciones, y se
responsabiliza de la información que sea compartida en el mismo.
(Ley 1581 de 2012 y el Decreto 1377 de 2013)

# Sprint 1

## Actividades

- [x] Implementar un landing page que cuente con un cabezote, que contenga 
informacion de su proyecto y un boton que lleve a una pestana de registro. 
(Opcional) Implementar el patron de diseno responsive **Mostly Fluid** en 
su proyecto.

- [x] Crear un boton de registro que permita dirigirse a una nueva ventana 
`registro.html`, que cuente con el formulario de registro.

- [x] Crear un formulario dentro de un contenedor que se desplegara, cuando 
se de clicl en el boton de registro.  El formulario debe tener los 
campos: **nombre**, **apellido**, **telefono**, **correo** y **contrasena**.

## Entrega:

Los archivos de entrega de este sprint son: `index.html`, `registro.html` y `estilos.css`.

# Sprint 2

## Actividades

- [x] Validar el campo nombre evitando que se ingresen caracteres 
numericos, restringiendo la longitud entre 4 y 30 caracteres 
maximo y que el campo no se deje vacio.

- [x] Validar el campo apellido evitando que se ingresen caracteres 
numericos, restringiendo la longitud entre 4 y 30 caracteres 
maximo y que el campo no se  deje vacio.

- [x] Validar el campo telefono, este campo debe tener una longitud  
de 7 digitos unicamente, solo puede contener caracteres numericos y 
no puede dejarse vacio.

- [x] Validar el campo correo, este campo debe representar la estructura 
de un correo, es decir, debe verse de la siguiente manera `usuario@correo.com` 
por lo que debe incluir `@` seguido del dominio del correo. Asi mismo, 
el campo no puede estar vacio.

- [x] Validacion de la contrasena, en donde el usuario debe ingresar por 
lo menos una letra mayuscula, una minuscula, un numero y con una 
longitud mayor o igual a 8 digitos. Este campo es requerido, por lo 
que, no se puede dejar vacio.

## Entrega:

El archivo de entrega de este sprint es `form.js`.


# Sprint 3

## Actividades

- [x] Crear un arreglo de objetos que contenga la información 
consignada en el formulario de registro.

   - [x] Declarar un arreglo global en donde se almacenen cada uno de los 
   registros. 

   - [x] Crear la función `agregarRegistro()`, la cual estará encargada de 
     realizar las operaciones necesarias para tomar la información ingresada 
     en el formulario de registro y guardarla en el arreglo.

   - [x] **Opcional**: Emplee el objeto console para imprimir el contenido que se 
     está ingresando en el arreglo.

   - [x] Exporte la función empleando la siguiente sentencia de código:
   `module.exports = agregarRegistro;`

- [x] Ordenar el contenido del arreglo a partir del campo Apellido de 
manera ascendente.

   - [x] Implementar la función `ordenarArreglo(arreglo)`, donde se ordenará 
   el arreglo de registros a partir del campo **Apellido**.

   - [x] La función debe retornar el arreglo ordenado e imprimir por consola 
   el contenido del mismo.

   - [x] Exporte la función empleando la siguiente sentencia de código:
   `module.exports = ordenarArreglo;`

- [x] Filtrar aquellos registros que contengan en el campo Correo,
correos con direcciones de `gmail.com`.

   - [x] Implementar la función `filtrarCorreo(arreglo)`.

   - [x] La función debe de retornar el listado de los registros que cumplen 
   las características del filtro e imprimir en consola dicho listado.

   - [x] Exporte la función empleando la siguiente sentencia de código:
   `module.exports = filtrarCorreo;`

Documentos de referencia: 
[Console](https://developer.mozilla.org/es/docs/Web/API/Console)
[JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)


## Entrega:

El archivo de entrega de este sprint es `registro.js`.


# Sprint 4

## Actividades

Para el desarrollo de las actividades de este sprint es necesario que cuente con una base de datos
relacional (MySQL). Deberá tener en cuenta el modelado que necesita su proyecto y
la implementación respectiva de las tablas; en una de estas deben estar configurados todos los
campos del formulario de registro trabajado en sprints pasados.

- [x] Implementar una consulta que traiga los campos `nombre`, `apellido` y `correo` de
los registros ordenados ascendentemente por el nombre.

   - [x] Elabore la sentencia SQL que permite realizar la consulta antes mencionada sobre la tabla `Usuarios`
   - [x] Entregar el código de la consulta en un archivo nombrado como `Query_OrdenarPorNombre.sql`

- [x] Implementar una consulta que traiga los campos `nombre`, `apellido` y `teléfono`
ordenando la salida de manera descendente por el campo `teléfono`.

   - [x] Elabore la sentencia SQL que permite realizar la consulta antes mencionada sobre la tabla `Usuarios`
   - [x] Entregar el código de la consulta en un archivo nombrado como `Query_OrdenarPorTelefono.sql`


- [x] A partir de una consulta obtenga aquellos registros que el campo de
`correo` coincida con direcciones de `gmail.com`.

   - [x] Elabore la sentencia SQL que permite realizar la consulta antes mencionada sobre la tabla `Usuarios`
   - [x] Entregar el código de la consulta en un archivo nombrado como `Query_ObtenerCorreo.sql`

## Entrega:

Suba a la plataforma los archivos con extensión `.sql` , que empleó para dar solución a cada una de las
actividades de las historias de usuario planteadas en este sprint. Los archivos deben de llamarse como
se especifica en cada una de las actividades de lo contrario no se calificará.

Nota: Las sentencias se trabaja de manera similar a las instrucciones brindadas por el docente al
emplear el Framework `express JS` , para la obtención de información almacenada en una base de
datos. Sin embargo, en este sprint no se harán entregas de archivos de extensión JS, sino de las
consultas desarrolladas en SQL.

# Sprint 5

## Actividades

En un nuevo documento `login.html`. Crear un formulario de inicio de sesión que le permita a los 
usuarios ya registrados ingresar a su cuenta.


## Entrega:

Suba a la plataforma los archivos JS, que empleo para dar solucion a cada una de las actividades
de las historias de usuario planteadas en este sprint. El archivo debe llamarse `login.js`de lo 
contrario no se calificara.

Para la evaluacion de este sprint es muy importante que los valores de los atributos id de los 
elementos sean exactamente iguales a los indicados en las actividades del sprint. De igual manera, 
nombre las funciones exactamente igual a como se nombran en el instructivo de cada actividad del 
sprint actual.

## Codigo Fuente:

```javascript
function agregarRegistro() {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    var regs = {
        nombre,
        apellido,
        telefono,
        correo,
        contrasena,
    };
	
    registros.push(regs);

}
```
