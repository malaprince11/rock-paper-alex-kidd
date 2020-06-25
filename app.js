const game = () => {
    let pScore = 0;
    let cScore = 0;
    let mainSound = document.getElementById("main-sound");
    let winSound = document.getElementById("win-sound");
    let loseSound = document.getElementById("lose-sound");
    let drawSound = document.getElementById("draw-sound");
    let boingSound = document.getElementById("zoop-sound");
    let refreshBtn = document.getElementById("restart-button");
    //start game 
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {

            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            mainSound.play();
        });
    };
    
 
    //play
    
        
    
    const playMatch = () => {
        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
            
        });
        //computer option
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                //computeur choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {

                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;

                }, 2000);
                //here is where we call compre hands

                //update image

                playerHand.style.animation = "shakePlayer 3.5s ease";
                computerHand.style.animation = "shakeComputer 3.5s ease";
                boingSound.play();
            });
        });

    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    //end game
    const endGame = () =>{
        
        const divAddClass = document.querySelector("#winning-message");
        if(cScore === 3 || pScore === 3){
            
            console.log("score is at 3")
            divAddClass.style.visibility = "visible"
        }
    }
    const refreshPage = () =>{
        location.reload(); 
    };
    refreshBtn.addEventListener('click',refreshPage);
    //choice draw
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = "tie game";
            endGame();
            setTimeout(() => {
                drawSound.play();
            }, 1000);
            return;
        }
       
        //rock choice
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Win!";
                pScore++;
                updateScore();
                endGame();
                setTimeout(() => {
                    winSound.play();
                }, 1000);
                return;
            } else {
                winner.textContent = 'Computer win :(';
                cScore++;
                updateScore();
                endGame();
                setTimeout(() => {
                    loseSound.play();
                }, 1000);
                return;
            }
        }
        //paper choice
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "computer Win!";
                cScore++;
                updateScore();
                endGame();
                setTimeout(() => {
                    loseSound.play();
                }, 1000);
                return;
            } else {
                winner.textContent = 'Player win :)';
                pScore++;
                updateScore();
                endGame();
                setTimeout(() => {
                    winSound.play();
                }, 1000);
                return;
            }
        }

        //scissor choice
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Win!";
                cScore++;
                updateScore();
                endGame();
                setTimeout(() => {
                    loseSound.play();
                }, 1000);
                return;
            } else {
                winner.textContent = 'Player win :)';
                pScore++;
                updateScore();
                endGame();
                setTimeout(() => {
                    winSound.play();
                }, 1000);
                return;
            }
        }
    }

    startGame();
    playMatch();
};
game();