const deleteH1 = phrase => { //Funcao para deletar frase do dom
    
    let h1 = document.querySelector('h1').innerHTML;
    
    let lenghtTitle = h1.length;

    let newh1 = '';

    const interval = setInterval(() => {

        for (let i = 0; i < h1.length-1; i++) { //Criando nova frase com o h1 exceto a ultima letra
            newh1 += h1[i];
        }

        document.querySelector('h1').innerHTML = newh1; //Substituindo o texto
        
        newh1 = '';

        lenghtTitle--;

        if (lenghtTitle == 0) { //Se a frase ja foi deletada por completo, inicia a digitacao da proxima frase
            clearInterval(interval);
            typeH1(phrase + 1);
        }

        h1 = document.querySelector('h1').innerHTML;

    }, 25);
}

const typeH1 = (phrase = 0) => { //Funcao para digitar frase no dom

    const titles = ['Lorem ipsum', 'is simply dummy text', 'of the printing and typesetting industry.']; //Frases a serem digitadas

    if (phrase >= titles.length) {
        phrase = 0;
    }

    let h1 = document.querySelector('h1');

    let j = 0; //Contador para verificar se a frase ja chegou no final

    const title = titles[phrase];
    const lenghtTitle = title.length;

    const interval = setInterval(() => {

        h1.innerHTML += title[j]; //Adicionando letra no dom
        
        j++;

        if (j >= lenghtTitle) { //Se a frase chegou no final o intervalo e interrompido para o h1 ser deletado na funcao deleteH1
            clearInterval(interval);

            setTimeout(deleteH1.bind(null, phrase), 2000);

        }

    }, 50);
}

typeH1();