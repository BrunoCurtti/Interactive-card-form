// ARRAY DE CAMPOS A VALIDAR
const formIsValid = {
    validarNombre: false,
    validarNumber: false,
    validarExpDateNumber: false,
    validarCvcNumber: false,
};


// PREVENT DEFAULT
form.addEventListener("submit", (e) => {
    e.preventDefault();
});


// CARD HOLDER NAME - Validación
const validarNombre = (value) => {

    if(!isNaN(value) === true){
        return false;
    }
    return true;
};
// CARD HOLDER NAME - Class Error
const validarNombreTarjeta = () => {
    const input = document.getElementById("nombre");
    let nombre = input.value;

    if(validarNombre(nombre) === false){
        input.classList.add("error-input");
        document.getElementById("nombre-invalid-feedback").classList.remove("error-message-hide");
    }
    else{
        formIsValid.validarNombre = true;
        input.classList.remove("error-input");
        document.getElementById("nombre-invalid-feedback").classList.add("error-message-hide");
    }
};
// CARD HOLDER NAME - Replica del input en Tarjeta
document.getElementById("nombre").addEventListener("keyup", () => {
    const input = document.getElementById("nombre");
    const valor = input.value;
    const label1 = document.getElementById("showNombre");
    label1.textContent = valor;
    input.classList.remove("error-input");
});


// CARD NUMBER - Validación
const validarNumber = (value) => {

    if(isNaN(value) === true){
        return false;
    }

    if(String(value).length != 16 === true){
        return false;
    }
    
    return true;
};
// CARD NUMBER - Class Error
const validarNumTarjeta = () => {
    const input = document.getElementById("number");
    let number = input.value;

    if(validarNumber(number) === false){
        input.classList.add("error-input");
        document.getElementById("number-invalid-feedback").classList.remove("error-message-hide");
    }
    else{
        formIsValid.validarNumber = true;
        input.classList.remove("error-input");
        document.getElementById("number-invalid-feedback").classList.add("error-message-hide");
    }
};
// CARD NUMBER - Replica del input en Tarjeta
document.getElementById("number").addEventListener("keyup", () => {
    const input = document.getElementById("number");
    const valor = input.value;
    const label2 = document.getElementById("showNumber");
    label2.textContent = valor;
    input.classList.remove("error-input");
});


//EXP DATE - Validación
const validarExpDateNumber = (value) => {
    if(isNaN(value) === true){
        return false;
    }

    if(String(value).length !=2 === true){
        return false;
    }

    return true;
};
// EXP DATE - Class Error
const validarExpDate = () =>{
    const input_mm = document.getElementById("mm");
    const input_yy = document.getElementById("yy");
    let mm = input_mm.value;
    let yy = input_yy.value;
    
    if(validarExpDateNumber(mm) === false){
        input_mm.classList.add("error-input");
        document.getElementById("mm-yy-invalid-feedback").classList.remove("error-message-hide");
        input_yy.classList.add("error-input");
        
    }else{
        formIsValid.validarExpDateNumber = true;
        input_mm.classList.remove("error-input");
        document.getElementById("mm-yy-invalid-feedback").classList.add("error-message-hide");
        input_yy.classList.remove("error-input");
        
    }
};
// EXP DATE - Replica del input en Tarjeta
document.getElementById("mm" && "yy").addEventListener("keyup", () => {
    const input_mm = document.getElementById("mm");
    const input_yy = document.getElementById("yy");

    const valor1 = input_mm.value;
    const valor2 = input_yy.value;
    const label3 = document.getElementById("showExpDate");
    label3.textContent = valor1 + "/" + valor2;
    input_mm.classList.remove("error-input");
    input_yy.classList.remove("error-input");
});


// CVC - Validación
const validarCvcNumber = (value) => {

    if(isNaN(value) === true){
        return false;
    }

    if(String(value).length !=3 === true){
        return false;
    }

    return true;
};
// CVC - Class Error
const validarCvcTarjeta = () => {
    const input = document.getElementById("cvc");
    let cvc = input.value;

    if(validarCvcNumber(cvc) === false){
        input.classList.add("error-input");
        document.getElementById("cvc-invalid-feedback").classList.remove("error-message-hide");
    }
    else{
        formIsValid.validarCvcNumber = true;
        input.classList.remove("error-input");
        document.getElementById("cvc-invalid-feedback").classList.add("error-message-hide");
    }
};
// CVC - Replica del input en Tarjeta
document.getElementById("cvc").addEventListener("keyup", () => {
    const input = document.getElementById("cvc");
    const valor = input.value;
    const label5 = document.getElementById("showCvc");
    label5.textContent = valor;
    input.classList.add("error-input");
});


// VALIDAR FORM
const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) form.submit();
    else alert ("Form is invalid");
};


// REDIRECCIONAR NUEVAMENTE AL FORM
function reset() {
    window.location.assign("http://127.0.0.1:5500/1.5%20-%20Sprints/2.2-Segundo-sprint/Sprint2%20Bruno/Active-state-card-form.html");
  }