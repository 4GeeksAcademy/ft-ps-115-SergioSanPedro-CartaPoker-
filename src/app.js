import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numeros = ['AS', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
const palos = ['♦', '♥', '♠', '♣']

window.onload = function () {

  const cambiarNumero = document.getElementById('numero');
  const cambiarPalos = document.querySelectorAll('.palos');
  const cambiarBoton = document.getElementById('btn-random');

  cambiarBoton.addEventListener('click', function () {

    const numerosRandom = Math.floor(Math.random() * numeros.length);
    const palosRandom = Math.floor(Math.random() * palos.length);
    console.log(numeros[numerosRandom]);
    console.log(palos[palosRandom]);

    cambiarNumero.textContent = numeros[numerosRandom]

    cambiarPalos.forEach(palo => {

      palo.textContent = palos[palosRandom];

    })


  })







}