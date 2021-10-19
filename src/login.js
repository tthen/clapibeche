// let registros = [];
let registros = [{correo: "juan@gmail.com", contrasena: "SecurePassword123"}];

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

function login(){
    const fCorreo = document.getElementById("correo").value; 
    const fContrasena = document.getElementById("contrasena").value;
    const fCaptcha = document.getElementById('captcha').value;
    let trueCorreo = registros.find(e => e.correo == fCorreo);
    let trueContrasena = registros.find(e => e.contrasena == fContrasena);
    if( trueCorreo  && trueContrasena  && validarCAPTCHA(fCaptcha)){
       return true;
    } else { 
	   return false;
    }
    
    
} 

function validarCAPTCHA(valor){
	if (valor==1000){
		return true;
	}
	else{
		return false;
	}   
}
    
module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
