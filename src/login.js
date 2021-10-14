let registros = [];

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


function login (){
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var captcha = document.getElementById('captcha').value;
    if ( regs.correo === correo & regs.contrasena === contrasena & validarCAPTCHA() ) {
        // console.log("Calido correo y contrasena"); // true
        return true;
    } else {
        // console.log("Usted no es un usuario registrado"); // false
        return false;
    }
}


function validarCAPTCHA (valor) {
    if (valor === 1000) {
        return true;
      } else {
        return false;
      }
}


module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;