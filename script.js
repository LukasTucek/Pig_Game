'use strict';
/*
const scoreLeft = addEventListener('#score--0'); //buď takhle
const scoreRight = getElementById('score--1'); //nebo takhle
const dice = getElementById('.dice'); //je to třída, proto tečka
*/

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('btn--new');
const btnHold = document.querySelector('btn--hold');

let scores, currentScore, activePlayer, playing; //proměnné, které jsou undefined... postupně jim dáme score

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//switch player
const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`);
  currentScore = 0; 
  activePlayer = activePlayer === 0 ? 1 : 0; //pokud se 0 rovná 0, tak se to změní na 1 (to za otazníkem), MĚNÍ SE Z 0 NA 1 A NAOPAK
  player0El.classList.toggle('player--active'); //toggle mezi sebou vyměňuje třídy (mezi 0 a 1)
  player1El.classList.toggle('player--active');
}


//currentScore = 0 u aktivního hráče


btnRoll.addEventListener('click', function() {
  const dice = Math.trunc(Math.random() * 6) + 1; //vytvořit random číslo
  console.log(dice);
  diceEl.classList.remove('hidden'); //zobrazit číslo kostky
  diceEl.src = `dice-${dice}.png` //vyměňuje img kostek
  //if 1, tak co se stane ? přidat kostku do currentScore : switch player
  if(dice !== 1) { //pokud se nerovná 1
    currentScore += dice //+= => vezme znovu currentScore a přičte dice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer()
  }
})

//RESET pro oba hráče, ZATÍM NEFUNGUJE
btnNew.addEventListener('click', init);
//UKÁZAT NA OBJEKTECH HTML



//BUTTON HOLD
btnHold.addEventListener('click', function() {
  
})











//kliknout na ROLL DICE -> DO CURRENT se vloží RANDOM číslo 1-6, ale když padne 1 (IF FUNKCE), tak nepřičte a hraje druhý hráč...
/*
document.querySelector('.btn--roll').addEventListener('click', function () { //funkce, která při kliku na ROLL DICE... 
  const dice = Math.trunc(Math.random() * 6) + 1; //náhodné číslo od 1 do 6
  console.log(dice); //kontrola, že proměnná "rollDice" funguje
  if(rollDice != 1) { //když se nerovná 1
    document.querySelector('.current-score').textContent = dice; //přepíšu hodnoty v ".current-score"
    //document.querySelector('.score').textContent = rollDice; //přepíšu hodnoty v "score"
  } else {
    //HRAJE DRUHÝ HRÁČ
    
    document.querySelector('body').style.backgroundColor = '#222'//změní se pozadí barvy
    //hodnota z ROLL DICE se počítá u PLAYER 2
  }
});
*/

//změna obrázku dice/číslo,které padne


