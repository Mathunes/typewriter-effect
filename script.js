function deleteH1(phrase) {
    
    var h1 = document.querySelector('h1').innerHTML;
    
    var lenghtTitle = h1.length;

    var newh1 = '';

    var interval = setInterval(function() {

        for (var i = 0; i < h1.length-1; i++) {
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

function typeH1(phrase = 0) {

    if (phrase > 2) {
        phrase = 0;
    }

    var titles = ['Lorem ipsum', 'is simply dummy text', 'of the printing and typesetting industry.'];

    var h1 = document.querySelector('h1');

    var j = 0;

    var title = titles[phrase];
    var lenghtTitle = title.length;

    var interval = setInterval(function() {

        h1.innerHTML += title[j];
        
        j++;

        if (j >= lenghtTitle) {
            clearInterval(interval);

            setTimeout(deleteH1.bind(null, phrase), 2000);

        }

    }, 50);
    
}

function insertionPointEffect() {
    setInterval(function() {
        var insertionPoint = document.getElementById('insertion-point');
        if (insertionPoint.style.display == 'none') {
            insertionPoint.style.display = 'block';
        } else {
            insertionPoint.style.display = 'none';
        }

    }, 500);
}

function main() {
    typeH1();
    insertionPointEffect();
}

main();