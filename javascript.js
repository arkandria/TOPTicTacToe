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
    slot0: '',
    slot1: '',
    slot2: '',
    slot3: '',
    slot4: '',
    slot5: '',
    slot6: '',
    slot7: '',
    slot8: '',
   
    array: [this.slot0,this.slot1,this.slot2,this.slot3,this.slot4,this.slot5,this.slot6,this.slot7,this.slot8],
    cleaner: () => {
        this.slot1 = '';
        this.slot2 = '';
        this.slot3 = '';
        this.slot4 = '';
        this.slot5 = '';
        this.slot6 = '';
        this.slot7 = '';
        this.slot8 = '';
        this.slot9 = '';
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
        const onClick = (event) => {
            const isSlot = event.target.classList.contains('slot');
            if (isSlot) {
                let instance = event.target.id;
                if (gameboard.instance === '') {
                    gameboard.nextMarker ? gameboard.instance=initialMarker : gameboard.instance=secondMarker;
                    let tempSlot = document.getElementById(instance);
                    tempSlot.textContent = gameboard.nextMarker;
                }
            }
        }
        window.addEventListener('click', onClick);
    },

}

gameboardArray = ["","","","","","","","",""];

const onClick = (event) => {
    const isSlot = event.target.classList.contains('slot');
    if (isSlot) {
        
        let instance = event.target.id;
        
        if (gameboard[instance] === '') {
            gameboard.nextMarker ? gameboard.instance=gameboard.initialMarker : gameboard.instance=gameboard.secondMarker;
            let tempSlot = document.getElementById(instance);
            tempSlot.textContent = gameboard.instance;
            gameboard.nextMarker = !(gameboard.nextMarker);
        }
    }
}
window.addEventListener('click', onClick);


//Each time a move is registered, the gameboard checks whose turn is next and display symbols accordingly,  the gameboard checks the array to identify the winning combinations.
const gameMove = () => {
    gameboard.counter++;
    gameboard.display();
//identify the slot being clicked     
};

//If a win is identified, gameboard checks if its an X or O victory so the win is added to player's score. Winning slots are displayed in red.

//In movement number 8  a check is done to identify a possible tie.

//If a computer game is chosen, we provide three modes: easy, hard and impossible.