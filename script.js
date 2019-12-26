const deleteH1 = phrase => {
    
    let h1 = document.querySelector('h1').innerHTML;
    
    let lenghtTitle = h1.length;

    let newh1 = '';

    const interval = setInterval(() => {

        for (let i = 0; i < h1.length-1; i++) {
            newh1 += h1[i];
        }

        document.querySelector('h1').innerHTML = newh1;
        
        newh1 = '';

        lenghtTitle--;

        if (lenghtTitle == 0) {
            clearInterval(interval);
            typeH1(phrase + 1);
        }

        h1 = document.querySelector('h1').innerHTML;

    }, 25);
}

const typeH1 = (phrase = 0) => {

    const titles = ['Lorem ipsum', 'is simply dummy text', 'of the printing and typesetting industry.'];

    if (phrase >= titles.length) {
        phrase = 0;
    }

    let h1 = document.querySelector('h1');

    let j = 0;

    const title = titles[phrase];
    const lenghtTitle = title.length;

    const interval = setInterval(() => {

        h1.innerHTML += title[j];
        
        j++;

        if (j >= lenghtTitle) {
            clearInterval(interval);

            setTimeout(deleteH1.bind(null, phrase), 2000);

        }

    }, 50);
}

typeH1();