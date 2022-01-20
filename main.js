

alert("Benvenuto! Premi Invio per calcolare il prezzo del tuo biglietto");

/*età*/

let eta = parseInt(prompt("Inserisci la tua età"));

/*chilometraggio*/

let km = parseInt(prompt("Inserisci la distanza del tuo viaggio in km"));

/*costante da moltiplicare*/

const unitakm=0.21;

/*prezzo over 65*/

let tot40 = (km * unitakm)- ((km * unitakm)*0.40);

/*prezzo under 18*/

let tot20 = (km * unitakm)- ((km * unitakm)*0.20);

/*prezzo normale*/

let tot = (km * unitakm);



/*under 18 */

if(eta<18){

    document.getElementById('stampa').innerHTML= tot20.toFixed(2);

}

/*over 65*/

else if(eta>65){

    document.getElementById('stampa').innerHTML= "Il prezzo è : " + tot40.toFixed(2);

}

/*normale */

else if(eta<65 || eta > 18){

    document.getElementById('stampa').innerHTML= "Il prezzo è : " + tot.toFixed(2);

}