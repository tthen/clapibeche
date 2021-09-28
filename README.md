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

- [ ] Crear un arreglo de objetos que contenga la información 
consignada en el formulario de registro.

   - [ ] Declarar un arreglo global en donde se almacenen cada uno de los 
   registros. 

   - [ ] Crear la función `agregarRegistro()`, la cual estará encargada de 
     realizar las operaciones necesarias para tomar la información ingresada 
     en el formulario de registro y guardarla en el arreglo.

   - [ ] **Opcional**: Emplee el objeto console para imprimir el contenido que se 
     está ingresando en el arreglo.

   - [ ] Exporte la función empleando la siguiente sentencia de código:
   `module.exports = agregarRegistro;`

- [ ] Ordenar el contenido del arreglo a partir del campo Apellido de 
manera ascendente.

   - [ ] Implementar la función `ordenarArreglo(arreglo)`, donde se ordenará 
   el arreglo de registros a partir del campo **Apellido**.

   - [ ] La función debe retornar el arreglo ordenado e imprimir por consola 
   el contenido del mismo.

   - [ ] Exporte la función empleando la siguiente sentencia de código:
   `module.exports = ordenarArreglo;`

- [ ] Filtrar aquellos registros que contengan en el campo Correo,
correos con direcciones de `gmail.com`.

   - [ ] Implementar la función `filtrarCorreo(arreglo)`.

   - [ ] La función debe de retornar el listado de los registros que cumplen 
   las características del filtro e imprimir en consola dicho listado.

   - [ ] Exporte la función empleando la siguiente sentencia de código:
   `module.exports = filtrarCorreo;`

Documentos de referencia: 
[Console](https://developer.mozilla.org/es/docs/Web/API/Console)
[JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)


## Entrega:

El archivo de entrega de este sprint es `registro.js`.

De acuerdo a las actividaders enunciadas antes contenido del archivo `registro.js` 
es el siguiente:

```javascript
// declarar arreglo global para almacenamiento de registros


// Crear la función agregarRegistro(), la cual estará encargada de 
// realizar las operaciones necesarias para tomar la información 
// ingresada en el formulario de registro y guardarla en el arreglo.

function agregarRegistro() {
    // contenido
}

// Implementar la función ordenarArreglo(arreglo), donde se ordenará 
// el arreglo de registros a partir del campo Apellido.

function ordenarArreglo(arreglo) {
    // contenido

    // La función debe retornar el arreglo ordenado e 
    // imprimir por consola el contenido del mismo.
    return arreglo;
    console.log(arreglo);
}


// Implementar la función filtrarCorreo(arreglo).

function filtrarCorreo(arreglo) {
    // contenido

    // La función debe de retornar el listado de los registros que 
    // cumplen las características del filtro e imprimir en consola 
    // dicho listado.
    return arreglo;
    console.log(arreglo);
}


// Exporte la función empleando la siguiente sentencia de código: 
module.exports = agregarRegistro;

// Exporte la función empleando la siguiente sentencia de código: 
module.exports = ordenarArreglo;

// Exporte la función empleando la siguiente sentencia de código: 
module.exports = filtrarCorreo;
```
