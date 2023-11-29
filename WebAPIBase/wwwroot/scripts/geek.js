
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
        // Létrehozunk egy div elemet a viccnek
        const viccElem = document.createElement('div');

        // Beállítjuk a tartalmát a vicc szövegére
        viccElem.innerText = `${vicc.question} ${vicc.answer}`;

        // Hozzáadjuk az új elemet a konténerhez
        viccekContainer.appendChild(viccElem);
    }
}

