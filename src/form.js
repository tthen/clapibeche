
var checkNombre = function (val) {
    let nombre = val;
    if (nombre.length !== 0 && nombre.length >= 4 && nombre.length <= 30) {
        if ((/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

var checkApellido = function (val) {
    let apellido = val;
    if (apellido.length !== 0 && apellido.length >= 4 && apellido.length <= 30) {
        if ((/^[a-zA-ZÀ-ÿ\s]+$/.test(apellido))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};


function checkTelefono(val) {
    let telefono = val;
    if (telefono.length !== 0 && telefono.length == 7) {
        if ((/^\d+$/.test(telefono))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

function checkCorreo(val) {
    let correo= val;
    if (correo.length !==0 ) {
         if (( /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(correo))) {
             return true;
        }
        else {
            return false;
           }
        }
       else {
            return false;
       }
    };


var checkContrasena = function (val) {
    let password = val;
    if (password.length !== 0 && password.length >= 7) {
        if ((/^[0-9a-zA-Z]+$/.test(password))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


module.exports = {
    checkNombre,
    checkApellido,
    checkTelefono,
    checkCorreo,
    checkContrasena,
}
