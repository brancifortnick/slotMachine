document.getElementById("button-slot").addEventListener("click", game);

function game(){
 document.getElementById("button-slot").disabled = true;

  const attempts = numberAttempts(3,12);

  let t1 = 0, t2 = 0, t3 = 0;

  let slot1 = setInterval(function(){
    numberRandom = generaRandom(arraySimbols.length);
    document.getElementById("slot1").innerHTML = arraySimbols[numberRandom ];
    console.log(arraySimbols[numberRandom ]);
    t1++;
    if (t1 == attempts) {
      clearInterval(slot1);
      return null;
    }
  }, 100);

  let slot2 = setInterval(function(){
    t2++;
    if (t2 == attempts) {
      clearInterval(slot2);
      return null;
    }
    numberRandom = generaRandom(arraySimbols.length);
    document.getElementById("slot2").innerHTML = arraySimbols[numberRandom ];
    console.log(arraySimbols[numberRandom ]);
  }, 100);

  let slot3 = setInterval(function(){
    t3++;
    if (t3 == attempts) {
      clearInterval(slot3);
      victory();
      document.getElementById("button-slot").disabled = false;
      return null;
    }
    numberRandom = generaRandom(arraySimbols.length);
    document.getElementById("slot3").innerHTML = arraySimbols[numberRandom ];
    console.log(arraySimbols[numberRandom ]);
  }, 100);

  function victory() {
    slot1 = document.getElementById("slot1").innerHTML;
    slot2 = document.getElementById("slot2").innerHTML;
    slot3 = document.getElementById("slot3").innerHTML;

    if (slot1 == slot2 && slot2 == slot3){
      document.getElementById("result").innerHTML = 'YOU WON';
    } else {
      document.getElementById("result").innerHTML = 'YOU LOST';
    }
  }
}


function generaRandom(max){
	return Math.floor((Math.random() *  max));
}

function numberAttempts(min, max){
	return Math.floor((Math.random() * (max-min + 1)) + min);
}
