let numeroSecreto = parseInt(Math.random() * 10);
let tentativas = 3;

while (tentativas > 0){
    let chute = parseInt(prompt('Digite um numero entre 0 e 10'));

    if (numeroSecreto == chute) {
	console.log('acertou');
	break;
    }

    else if (chute > numeroSecreto){
	console.log('Numero é menor');
	tentativas = tentativas -1;
    }

    else if (chute < numeroSecreto) {
	console.log('é mairo');
	tetativas = tentativas -1;
    }

   
}

if(chute != numeroSecreto){
    console.log('Acabaram suas tentativas. O numero secreto era ' + numeroSecreto);
}
