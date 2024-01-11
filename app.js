let listaNumerosGerados = [];
let valorMaximaLista = 3;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

mensagemInicial();

function alterarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraMaiorMenor = chute > numeroSecreto ? 'menor' : 'maior';
    let pluralTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let textoTentativas = `Parabéns! Você Conseguiu acertar em ${tentativas} ${pluralTentativas} que o número era ${numeroSecreto}.`;
    let textoDica = `O número secreto é ${palavraMaiorMenor} que ${chute}.`;
    if(chute == numeroSecreto){
        alterarTexto('h1', 'Acertou!');
        alterarTexto('p', textoTentativas);
        enabledbottom();
    }else {
        alterarTexto('h1', 'Quase!');
        alterarTexto('p', textoDica);
        tentativas++;
    }
    limparCampo();
}

function reset(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function enabledbottom(){
    document.getElementById('reiniciar').removeAttribute('disabled');
    
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * valorMaximaLista + 1);
   let tamanhoLista = listaNumerosGerados.length;
   if(tamanhoLista == valorMaximaLista){
    listaNumerosGerados = [];
   }
   if(listaNumerosGerados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    console.log(listaNumerosGerados);
    listaNumerosGerados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}
function mensagemInicial() {
alterarTexto('h1', 'Jogo do Número Secreto');
alterarTexto('p', 'Escolha um número de 1 a 10');
}
