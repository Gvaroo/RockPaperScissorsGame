var options = document.querySelectorAll(".options");
var result = document.querySelector(".display-results");
var clear = result.innerHTML;
options.forEach(option => {
  option.addEventListener("click", function () {
    reset();
    const pInput = this.value;
    const cOptions = ["Rock", "Scissors", "Paper"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];
    updateMoves(pInput, cInput);
    compareInputs(pInput, cInput);

  })
})

function updateMoves(pInput, cInput) {
  document.getElementById("p-move").src = `./${pInput}.svg`;
  document.getElementById("c-move").src = `./${cInput}.svg`;
}

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  //TIE
  if (pInput === cInput) {
    var tie = `${currentMatch} is a tie`;
    result.innerHTML += tie;

    return;
  }

  //Rock
  if (pInput == "Rock") {
    if (cInput == "Scissors") {
      var win = `${currentMatch} = u win!`;
      result.innerHTML += win;

    } else {
      var lose = `${currentMatch} = Computer wins!`;
      result.innerHTML += lose;

    }
  }

  //Paper
  else if (pInput == "Paper") {
    if (cInput == "Rock") {
      var win = `${currentMatch} = u win!`;
      result.innerHTML += win;

    } else {
      var lose = `${currentMatch} = Computer wins!`;
      result.innerHTML += lose;


    }
  }
  //Scissors
  else if (pInput == "Scissors") {
    if (cInput == "Paper") {
      var win = `${currentMatch} = u win!`;
      result.innerHTML += win;


    } else {
      var lose = `${currentMatch} = Computer wins!`;
      result.innerHTML += lose;

    }
  }
}

function reset() {
  result.innerHTML = clear;
}


