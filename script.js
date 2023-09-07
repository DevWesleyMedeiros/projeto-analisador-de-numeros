const btnAdicionar = document.getElementById('botaoAdicionar');
const btnApagarSelecionado = document.getElementById('botaoApagarSelecionado')
const showSelect = document.querySelector('#iselect');
const btnFinalizar = document.getElementById('finalizar');
const divResposta = document.querySelector('#resultado');
let arraySelect = [];

// Função que conta valores
function contValues() {
    const contNum = arraySelect.length;
    return contNum;
}

// Função que soma os valores
function sumValues() {
    let somaValores = 0;
    arraySelect.forEach((el) => {
        somaValores += el;
    });
    return somaValores;
}

// Função que calcula a média
function average() {
    let soma = sumValues();
    let contador = contValues();
    let media = contador > 0 ? soma / contador : 0;
    return media.toFixed(2);
}

// Função que verifica o maior
function greater() {
    let maior = arraySelect[0];
    arraySelect.forEach((el) => {
        if (el > maior) {
            maior = el;
        }
    });
    return maior
}
// Função que verifica o menor
function minor(){
    let menor = arraySelect[0]
    arraySelect.map((el)=>{
        if (el < menor) {
            menor = el;
        }
    })
    return menor
    
}
// Função que valida um entrada em número
function numberValidation(num) {
    return !isNaN(num) && num >= 1 && num <= 100;
}

// Função que adiciona valores ao array
function addValues() {
    const numInput = parseInt(document.getElementById('inumero').value);
    if (numInput > 0 && numInput <= 100 && numberValidation(numInput)){
        arraySelect.push(numInput);
        showSelect.innerHTML += `<option>Número ${numInput} Selecionado</option>`;
    }else{
        alert('Digite um valor válido entre 1 e 100');
    }
    document.getElementById('inumero').value = '';
}

// function deleteSelect(){
//     const valor = parseInt(document.getElementById('inumero').value)
//     btnApagarSelecionado.addEventListener('click', ()=>{
//         let valorParaApagar = .indexOf(valor)
//         if(valorParaApagar !== -1){
//             arraySelect.splice(valorParaApagar, valor)
//         }else{
//             console.log('Valor não encontrado')
//         }
//     })
// }

// Quando eu clicar com o botão finalizar
btnFinalizar.addEventListener('click', () => {
    let contaValores = contValues();
    let somaValores = sumValues();
    let mediaValores = average();
    let maior = greater();
    let menor = minor()

    divResposta.innerHTML = `<strong><p>Ao todo temos ${contaValores} valores selecionados</strong></p>`;
    divResposta.innerHTML += `<p><strong>A soma dos valores vale ${somaValores}</strong></p>`;
    divResposta.innerHTML += `<p><strong>A média dos valores vale ${mediaValores}</strong></p>`;
    divResposta.innerHTML += `<p>O maior valor é ${maior}</p>`;
    divResposta.innerHTML += `<p>O menor valor é ${menor}</p>`;
});

btnAdicionar.addEventListener('click', () => {
    addValues();
});
function btnEntrarAdicionar(){
    btnAdicionar.style.backgroundColor = 'gray'
}
function btnSairAdicionar(){
    btnAdicionar.style.backgroundColor = 'white'
}  
function btnEntrarApagar(){
    btnApagarSelecionado.style.backgroundColor = 'gray'
}
function btnSairApagar(){
    btnApagarSelecionado.style.backgroundColor = 'white'
}
