const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();    
});

function adicionaLinha() {
    const inputCampoNome = document.getElementById('nome');
    const inputCampoTelefone = document.getElementById('telefone');

    if(nome.includes(inputCampoNome.value)) {
        alert(`O nome: ${inputCampoNome.value} já foi inserido.`);
    } else {
        nome.push(inputCampoNome.value);
        telefone.push(parseFloat(inputCampoTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputCampoNome.value} </td>`;
        linha += `<td>${inputCampoTelefone.value} </td>`;        
        linha += '</tr>';

        linhas += linha;
    }

    inputCampoNome.value = '';
    inputCampoTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}