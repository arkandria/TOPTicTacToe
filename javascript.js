
const playerFactory = (name,score, selection) => {
    
    return {name, score, selection};
}

const gameboard = (function() {
'use strict;'
//Gameboard variables

let againstHuman = true;
let counter= 0;
let initialMarker= 'X';
let secondMarker= 'O';
let nextMarker= true;
let isGameOver= true;   
let array= ["","","","","","","","",""];
let victory;
let xCounter = 0;
let oCounter = 0;
let player1;
let player2;
let tie = false;

// Display menu options
function optionsStarter() {
    let options = document.getElementById('options');
    options.style.display = 'flex';
}

function humanOptions () {
    let optionsPc = document.getElementById('pcOps');
    optionsPc.style.display = "none";
    let optionsHuman = document.getElementById('humanOps');
    optionsHuman.style.display = "flex";
    againstHuman = true;
    let start = document.getElementById('start');
    start.style.display = 'block';
}
function pcOptions () {
    let optionsHuman = document.getElementById('humanOps');
    optionsHuman.style.display = "none";
    let optionsPc = document.getElementById('pcOps');
    optionsPc.style.display = "flex";
    againstHuman = false;
    let start = document.getElementById('start');
    start.style.display = 'block';
}

//With this information, the system will create the players and will store the wins to provide a score.


      
function gameCreator () {
    if (againstHuman=== true) {
        let tempNameX = document.getElementById('playerX').value;
        let tempNameO = document.getElementById('playerO').value;
        player1 = playerFactory(tempNameX, 0, "X");
        player2 = playerFactory(tempNameO, 0, "O");
        let options = document.getElementById('options');
        options.style.display = 'none';
        displayBoard();
        isGameOver= false;
    } else {
        let tempName = document.getElementById('user').value;
        player1 = playerFactory(tempName, 0, initialMarker);
        player2 = playerFactory("Computer", 0, secondMarker);
        player2 = playerFactory("Computer", 0, secondMarker);
        let options = document.getElementById('options');
        options.style.display = 'none';
        displayBoard();
        isGameOver= false;
    }
    
}

//Both names and score are displayed
function displayBoard () {
    let a = document.getElementById('player1');
    console.log (player1.name);
    a.firstChild.data = player1.name;
    let b = document.getElementById('player2');
    b.firstChild.data = player2.name;
    document.getElementById('score').firstChild.data = `${player1.score} - ${player2.score}`

} 

// When a new game begins, all variables are reset
function cleaner () {
    initialMarker= 'X';
    secondMarker= 'O';
    nextMarker= true;
    xCounter = 0;
    oCounter = 0;
    partialCleaner();
    let x = document.getElementById("X");
    x.style.display = "block";
    let o = document.getElementById("O");
    o.style.display = "block";
};
// When a round starts, gameboard is cleaned and some variables are reset
function partialCleaner () {
    for (let i=0; i<9; i++){
        if (document.getElementById("slot"+i).firstChild.data=== "X" || document.getElementById("slot"+i).firstChild.data=== "O") {
            document.getElementById("slot"+i).firstChild.data = " ";
        }
    };
    if (tie===false && counter>0) {
        let red = document.querySelectorAll('.winner');
        for (let i=0; i<red.length; i++) {
            red[i].classList.remove('winner');
        } 
    };
    
    array= ["","","","","","","","",""];
    isGameOver=false;
        victory = false;
    tie=false;
    counter= 0;
};
// Gameboard displays final winner when no adtional round is selected
function displayFinalWinner() {
    
    if (xCounter==oCounter) {
        let container = document.getElementById("player-wins");
        container.style.display = "flex";
        let announce = document.getElementById("tie-title");
        announce.style.display = "block";
    } else {
        if (againstHuman) {
            let name = (player1.score>player2.score)  ? player1.name : player2.name;
            let container = document.getElementById("player-wins");
            container.style.display = "flex"; 
            let winTitle = document.getElementById("win-title");
            winTitle.style.display = "block"; 
            let announce = document.getElementById("win-name");
            announce.style.display = "block"; 
            announce.firstChild.data = name;
        } else {
            let name = (player1.score>player2.score)  ? player1.name : player2.name;
            let container = document.getElementById("player-wins");
            container.style.display = "flex"; 
            let winTitle = document.getElementById("win-title");
            winTitle.style.display = "block"; 
            let announce = document.getElementById("win-name");
            announce.style.display = "block"; 
            announce.firstChild.data = name;
        }
    }    
    };



//prevents gameboard to continue oprerating after round ends and stores scores
function gameStopper() {
    isGameOver=true;
    if (initialMarker==="X") {
        player1.score=xCounter;
        player2.score=oCounter; 
    } else {
        player1.score=oCounter;
        player2.score=xCounter;
    }
    displayBoard();
    let another = document.getElementById("another");
    another.style.display= "flex";
};
//when the game is among human players this function controls game interaction
function gameHuman () {
    let winText = document.getElementById('winner');
    let tempI = event.target.id;
    tempI = tempI.split('');
    i=tempI[tempI.length -1]
    i= parseInt(i);
    if (array[i] === '') {
        nextMarker ? array[i]=initialMarker : array[i]=secondMarker;
        let tempSlot = document.getElementById("slot"+i);
        tempSlot.textContent = array[i];
        nextMarker = !(nextMarker);
        counter++
        if (victoryTest()) {
            victory==="X" ? winText.firstChild.data=player1.name : winText.firstChild.data=player2.name;
            gameStopper();
        } else if (counter===9) {
            winText.firstChild.data= "Tie!";
            tie =true;
            
            gameStopper();
        }
    };
};


function gameMachine () {
    
    let winText = document.getElementById('winner');
    let tempI = event.target.id;
    tempI = tempI.split('');
    i=tempI[tempI.length -1]
    i= parseInt(i);
    if (array[i] === '') {
        array[i]=initialMarker;
        let tempSlot = document.getElementById("slot"+i);
        tempSlot.textContent = array[i];
        
        counter++;
        if (victoryTest()) {
            victory===initialMarker ? winText.firstChild.data=player1.name : winText.firstChild.data=player2.name;
            gameStopper();
        } else if (counter===9) {
            winText.firstChild.data= "Tie!";
            tie =true;
            
            gameStopper();
        }
    };
    
    if (!victoryTest()) {
        let findRandomNum = () => {
            let randomNum = Math.floor(Math.random() * (freeSlots.length-1));
            return randomNum;
        }
        let freeSlots =[];
        for (let i=0; i<9; i++) {
            if (array[i]=== ""){
                freeSlots.push(i);
            }
        }
        console.log (freeSlots);
        z = findRandomNum()
        random = freeSlots[z]; 
        
        array[random]=secondMarker;
        let tempSlot = document.getElementById("slot"+random);
        tempSlot.textContent = array[random];
        
        counter++;
        if (victoryTest()) {
            victory===initialMarker ? winText.firstChild.data=player1.name : winText.firstChild.data=player2.name;
            gameStopper();
        } else if (counter===9) {
            winText.firstChild.data= "Tie!";
            tie =true;
            
            gameStopper();
        }
    };
};

// Hides the winner announcement so a new game can start
function hideWinner (){
    let container = document.getElementById("player-wins");
    container.style.display= "none";
}


// These are the controls for each clickable element in the gameboard
function onClick (event) {
    const isSlot = event.target.classList.contains('slot');
    const isHuman = (event.target.id === 'human');
    const isPc = (event.target.id === 'pc');
    const isButton = ( event.target.id === 'start');
    const isYes = ( event.target.id === 'yes');
    const isNo = (event.target.id === 'no');
    const isStartOver = (event.target.id === 'start-over');
    const isX = (event.target.id === 'X');
    const isO = (event.target.id === 'O');
    if (isSlot && (isGameOver==false)) {
        
        againstHuman ? gameHuman() : gameMachine();
        
      console.log(counter);
    } else if (isHuman) {
        humanOptions();
    } else if (isPc) {
        pcOptions();
    } else if (isButton){
        gameCreator();
    } else if (isYes){
        partialCleaner();
        another.style.display= "none";
    } else if (isNo) {
        let another = document.getElementById("another");
        another.style.display= "none";
        displayFinalWinner();
        cleaner();
    } else if (isStartOver) {
        optionsStarter();
        cleaner();
        hideWinner();
    } else if (isX) {
        initialMarker="X";
        secondMarker="O"
        
        
        let other = document.getElementById("O");
        other.style.display = "none";
    } else if (isO) {
        initialMarker="O";
        secondMarker="X"
        
        
        let other = document.getElementById("X");
        other.style.display = "none";
    }
};
window.addEventListener('click', onClick);

//Finds out if there is there is a winner in the gameboard.
function victoryTest () {
    
    let victoryArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
        
        victoryArray.forEach(element => {
        let x = element[0];
        let y = element[1];
        let z = element[2];
        if ((array[x]=='X' || array[x]=='O') && array[x]===array[y] && array[x]===array[z]) {
            victory = array[x];
            let winner1 = document.getElementById("slot"+x);
            let winner2 = document.getElementById("slot"+y);
            let winner3 = document.getElementById("slot"+z);
            winner1.classList.add('winner');
            winner2.classList.add('winner');
            winner3.classList.add('winner');
            //If a win is identified, gameboard checks if its an X or O victory so the win is added to player's score. Winning slots are displayed in red.
            (victory === 'X') ? xCounter++ : oCounter++; 
            
        } 
    });
    return victory;
    };

return {
    onClick:onClick,
    }
})();




