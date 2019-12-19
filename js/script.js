var genera = document.getElementById('genera');
genera.addEventListener('click',
  function () {
    var nomeInput = document.getElementById('nome');
    var nome = nomeInput.value;

    var kmInput = document.getElementById('km');
    var km = parseInt(kmInput.value);

    var fasciaSelect = document.getElementById('fascia');
    var fascia = fasciaSelect.value;

    var offerta = 'prezzo standard' ;

    var prezzoKm = 0.21;
    var prezzoTotale = km * prezzoKm;
    prezzoTotale = prezzoTotale.toFixed(2);
    var sconto20 = prezzoTotale-((prezzoTotale*20)/100);
    sconto20 = sconto20.toFixed(2);
    var sconto40 = prezzoTotale-((prezzoTotale*40)/100);
    sconto40 = sconto40.toFixed(2);
    var carrozza = Math.floor(Math.random() * 9)+1;
    var codice = Math.floor(Math.random() * (100000 - 900000 + 1) ) + 900000;

    if (fascia == 'minorenne') {
      prezzoTotale = sconto20;
      offerta = 'offerta under';
    } else if (fascia == 'over65') {
      prezzoTotale = sconto40;
      offerta = 'offerta over';
    }

    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('passeggero').innerHTML = nome;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('Codice-CP').innerHTML = codice;
    document.getElementById('Prezzo-biglietto').innerHTML = prezzoTotale;

    var biglietto = document.getElementById('biglietto');
    biglietto.classlist.remove('hidden');
    biglietto.classlist.add('visible');
});
var annulla = document.getElementById('annulla');
annulla.addEventListener('click',
  function () {
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('passeggero').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('Codice-CP').innerHTML = '';
    document.getElementById('Prezzo-biglietto').innerHTML = '';
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fascia').value = '';
  }
)
