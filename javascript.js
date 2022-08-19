//When user clicks new game, a pop up will ask if the game is against another person or against computer.
let againstHuman = true;

//After that, the gameboard will ask the name of the player or players

//With this information, the system will create the players and will store the wins to provide a score.



//Both names and score are displayed in gameboard.


//A random first player will be assigned and user can choose symbol.


//We create an array where each of the nine elements represents a slot in the game.
const gameboard = {
    counter: 0,
    initialMarker: 'X',
    secondMarker: 'O',
    nextMarker: true,
    isGameOver : false,   
    array: ["","","","","","","","",""],
    cleaner: () => {
        this.array = [,,,,,,,,,];
        this.nextMarker= true;
    },
    

    display: () => {
        for (i=0; i<this.array.length; i++) {
           let temp = this.array[i] 
           let slot = "slot"+i;
           let slotDisplay = document.getElementById(slot);
           slotDisplay.textContent = temp;
        }
    },
    clicker: () => {
        if (!isGameOver) {
        const onClick = (event) => {
            const isSlot = event.target.classList.contains('slot');
            if (isSlot) {
                let instance = event.target.id;
                if (gameboard.instance === '') {
                    gameboard.nextMarker ? gameboard.instance=initialMarker : gameboard.instance=secondMarker;
                    let tempSlot = document.getElementById(i);
                    tempSlot.textContent = gameboard.nextMarker;
                }
            }
        }
        window.addEventListener('click', onClick);
    }
    },

}



const onClick = (event) => {
    const isSlot = event.target.classList.contains('slot');
    console.log(gameboard.isGameOver);
    if (isSlot && (gameboard.isGameOver==false)) {
        //console.log(gameboard.array)
        let tempI = event.target.id;
        tempI = tempI.split('');
        //console.log(tempI)
        i=tempI[tempI.length -1]
       // console.log(i);
        i= parseInt(i);
        //console.log(typeof i);
        //console.log (gameboard.array[i]);
        
        if (gameboard.array[i] === '') {
            gameboard.nextMarker ? gameboard.array[i]=gameboard.initialMarker : gameboard.array[i]=gameboard.secondMarker;
            //console.log(gameboard.array[i])
            //console.log(gameboard.array)
            let tempSlot = document.getElementById("slot"+i);
            tempSlot.textContent = gameboard.array[i];
            gameboard.nextMarker = !(gameboard.nextMarker);
            if (victoryTest()) {
                gameboard.isGameOver=true;
            }

        }
    }
}
window.addEventListener('click', onClick);

const victoryTest = () => {
    let victoryArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
    
    let victory = false;
   
        victoryArray.forEach(element => {
        let x = element[0];
        //console.log(gameboard.array[x])
        let y = element[1];
        //console.log(gameboard.array[y])
        let z = element[2];
        //console.log(gameboard.array[z])
        if ((gameboard.array[x]=='X' || gameboard.array[x]=='O') && gameboard.array[x]===gameboard.array[y] && gameboard.array[x]===gameboard.array[z]) {
            victory=true;
            let winner1 = document.getElementById("slot"+x);
            let winner2 = document.getElementById("slot"+y);
            let winner3 = document.getElementById("slot"+z);
            winner1.classList.add('winner');
            winner2.classList.add('winner');
            winner3.classList.add('winner');

        }
    });
        
        //console.log(victory);
    return victory;
    };
//}


//Each time a move is registered, the gameboard checks whose turn is next and display symbols accordingly,  the gameboard checks the array to identify the winning combinations.
const gameMove = () => {
    gameboard.counter++;
    gameboard.display();
//identify the slot being clicked     
};

//If a win is identified, gameboard checks if its an X or O victory so the win is added to player's score. Winning slots are displayed in red.

//In movement number 8  a check is done to identify a possible tie.

//If a computer game is chosen, we provide three modes: easy, hard and impossible.