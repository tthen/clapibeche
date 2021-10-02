let registros = [];

function ordenarArreglo(arreglo) {

    registros = arreglo;
    let sortedUsers = registros.sort(function (a, b) {
        var apellidoA = a.apellido.toUpperCase(); 
        var apellidoB = b.apellido.toUpperCase(); 
        if (apellidoA < apellidoB) {
            return -1; 
        }
        if (apellidoA > apellidoB) {
            return 1; 
        }
        return 0;  
    });

    return sortedUsers;
    console.log(sortedUsers);
}



function filtrarCorreo(arreglo) {

    registros = arreglo;
    let sortedCorreo = registros.filter(v => v.correo.substring(v.correo.lastIndexOf("@") + 1) === "gmail.com");

    return sortedCorreo;
    console.log(sortedCorreo);
}



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

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.filtrarCorreo = filtrarCorreo;
