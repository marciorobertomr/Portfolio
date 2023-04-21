const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        // console.log(evento)
        // console.log(evento.target)
        valida(evento.target);   
    })
})

textareas.forEach(textarea => {
    textarea.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})

function valida(input) {
    
    const tipoDeInput = input.dataset.tipo; //Acessa o tipo do atributo data
    // Se campo input estiver preenchido, retorna como true. Se não, retorna como false.

    
    if(input.validity.valid) {
        console.log(tipoDeInput);
        if(tipoDeInput === 'mensagem') {
            input.parentElement.classList.remove('textarea_container--invalido');
            input.parentElement.querySelector('.textarea_mensagem--erro').innerHTML = '';
        } else {
            input.parentElement.classList.remove('input_container--invalido');
            input.parentElement.querySelector('.input_mensagem--erro').innerHTML = '';
        }
    } else {
        console.log(tipoDeInput);
        if(tipoDeInput === 'mensagem') {
            input.parentElement.classList.add('textarea_container--invalido');
            input.parentElement.querySelector('.textarea_mensagem--erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
        } else {
            input.parentElement.classList.add('input_container--invalido');
            input.parentElement.querySelector('.input_mensagem--erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
        }
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.',
        patternMismatch: 'O nome deve conter entre 4 e 50 caracteres e não deve começar por números.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo assunto não pode estar vazio.'
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio.',
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
            console.log(mensagem)
        }
    })
    return mensagem;
}

