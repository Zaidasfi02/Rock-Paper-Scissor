let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user");
const comScorepara = document.querySelector("#computer");

const draw = () => {
          msg.innerText = "Match Draw!";
          msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, comChoice) => {
          if (userWin) {
                    userScore++;
                    userScorepara.innerText = userScore;
                    msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
                    msg.style.backgroundColor = "green";
          } else {
                    comScore++;
                    comScorepara.innerText = comScore;
                    msg.innerText = `You Lose!  ${comChoice} beats Your ${userChoice}`;
                    msg.style.backgroundColor = "red";
          }
};



const genComchoice = () => {
          const options = ["rock", "paper", "scissors"];
          const ranIdx = Math.floor(Math.random() * 3);
          return options[ranIdx];
};



const playGame = (userChoice) => {

          const comChoice = genComchoice();

          if (userChoice === comChoice) {
                    draw();
          } else {
                    let userWin = true;
                    if (userChoice === "rock") {
                              userWin = comChoice === "paper" ? false : true;
                    } else if (userChoice === "paper") {
                              userWin = comChoice === "scissors" ? false : true;
                    } else {
                              userWin = comChoice === "rock" ? false : true;
                    }

                    showWinner(userWin, userChoice, comChoice);
          }
};


choices.forEach((choice) => {
          choice.addEventListener("click", () => {
                    const userChoice = choice.getAttribute("id");
                    playGame(userChoice);

          });
});

