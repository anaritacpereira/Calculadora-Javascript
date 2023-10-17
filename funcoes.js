const resultado = document.querySelector(".display");

function valor(num) {
    resultado.value += num;
}

function limpaInput() {
    resultado.value = '';  
}

function apagar() {
    resultado.value = resultado.value.slice(0, -1);
}

function result() {
    try {
        resultado.value = eval(resultado.value);
    } catch {
        alert('Por favor insira uma operação válida!');
    }
}



