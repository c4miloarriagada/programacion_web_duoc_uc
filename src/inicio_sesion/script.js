
function validarCorreoElectronico(email) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regexCorreo.test(email);
}


function validarContrasena(password) {
    if (password.length < 8 || password.length > 12) {
        return false;
    }
    

    const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
    
    return regexContrasena.test(password);
}

