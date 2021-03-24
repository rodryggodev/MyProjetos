// calculadora

let primeiroValor = Number(prompt('Primeiro Valor'));
let segundoValor = Number(prompt('Segundo valor'));

let escolha = prompt('Escola 1 para somar, 2 para subtrair, 3 para dividir e 4 para multiplicar');

// aqui posso usar o switch -> mas para fim de estudos vou deixar assim
if (escolha == 1){
    let resultado = primeiroValor + segundoValor;
    document.write(`O resultado é: ${resultado}`);
}
else if(escolha == 2) {
      let resultado = primeiroValor - segundoValor;
      document.write(`O resultado é: ${resultado}`);
}
else if (escolha == 3) {
      let resultado = primeiroValor / segundoValor;
      document.write(`O resultado é: ${resultado}`);
}
else {
      let resultado = primeiroValor * segundoValor;
      document.write(`O resultado é: ${resultado}`);
}

