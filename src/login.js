// let registros = [];

let registros = [
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
];

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

    for (i in registros) {
        if ( i.correo === correo && i.contrasena === contrasena && validarCAPTCHA(Number(captcha)) === true ) {
                return true;
        } else {
            return false;
        }
    }
}


// function prueba () {
//     if ( correo === "henrytorres@mail.com" && contrasena === "123" && validarCAPTCHA((captcha)) === true ) {
//             return true;
//     } else {
//         return false;
//     }
// }


function validarCAPTCHA (valor) {
    if (valor === 1000) {
        return true;
      } else {
        return false;
      }
}


module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.login = login;
