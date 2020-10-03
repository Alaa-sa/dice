window.onload = run;
function run() {
  var randomNumber1 = Math.floor(Math.random()*6 + 1);
  var randomNumber2 = Math.floor(Math.random()*6 + 1);
  if(randomNumber1 > randomNumber2){
    document.querySelector('.result').innerHTML = "Player1 Wins";
    document.querySelector('.p1').style.display = "block";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector('.result').innerHTML = "Player2 Wins";
    document.querySelector('.p2').style.display = "block";
  }
  else document.querySelector('.result').innerHTML = "Draw";
  if (randomNumber1 == 6) {
    // remove middle
    document.querySelector('.player1-dice .middle').classList.add("hide");
  }else if (randomNumber1 == 5) {
    document.querySelector('.player1-dice .middle-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-left').classList.add("hide");
    //remove middle sides
  }else if (randomNumber1 == 4) {
    document.querySelector('.player1-dice .middle-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-left').classList.add("hide");
    //keep top-r top-l b-r b-l
  }else if (randomNumber1 == 3) {
    document.querySelector('.player1-dice .top-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-left').classList.add("hide");
    document.querySelector('.player1-dice .bottom-left').classList.add("hide");
  }else if (randomNumber1 == 2) {

    document.querySelector('.player1-dice .top-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-left').classList.add("hide");
    document.querySelector('.player1-dice .middle').classList.add("hide");
    document.querySelector('.player1-dice .bottom-left').classList.add("hide");
  }else {

    document.querySelector('.player1-dice .top-right').classList.add("hide");
    document.querySelector('.player1-dice .top-left').classList.add("hide");
    document.querySelector('.player1-dice .middle-right').classList.add("hide");
    document.querySelector('.player1-dice .middle-left').classList.add("hide");
    document.querySelector('.player1-dice .bottom-right').classList.add("hide");
    document.querySelector('.player1-dice .bottom-left').classList.add("hide");
  }
if (randomNumber2 == 6) {
  // remove middle
  document.querySelector('.player2-dice .middle').classList.add("hide");
}else if (randomNumber2 == 5) {
  document.querySelector('.player2-dice .middle-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-left').classList.add("hide");
  //remove middle sides
}else if (randomNumber2 == 4) {
  document.querySelector('.player2-dice .middle').classList.add("hide");
  document.querySelector('.player2-dice .middle-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-left').classList.add("hide");
  //keep top-r top-l b-r b-l
}else if (randomNumber2 == 3) {
  document.querySelector('.player2-dice .top-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-left').classList.add("hide");
  document.querySelector('.player2-dice .bottom-left').classList.add("hide");
}else if (randomNumber2 == 2) {
  document.querySelector('.player2-dice .top-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-left').classList.add("hide");
  document.querySelector('.player2-dice .middle').classList.add("hide");
  document.querySelector('.player2-dice .bottom-left').classList.add("hide");
}else {
  document.querySelector('.player2-dice .top-right').classList.add("hide");
  document.querySelector('.player2-dice .top-left').classList.add("hide");
  document.querySelector('.player2-dice .middle-right').classList.add("hide");
  document.querySelector('.player2-dice .middle-left').classList.add("hide");
  document.querySelector('.player2-dice .bottom-right').classList.add("hide");
  document.querySelector('.player2-dice .bottom-left').classList.add("hide");
}
}
