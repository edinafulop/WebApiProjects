
window.onload = function () {
     fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

var viccek;



function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    const viccekContainer = document.getElementById('viccekContainer');

    for (const vicc of d) {
       
        const viccElem = document.createElement('div');

       
        viccElem.innerText = `${vicc.question} ${vicc.answer}`;

       
        viccekContainer.appendChild(viccElem);
    }
}

