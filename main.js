const roll = () => {
    const player1 = Math.floor(Math.random() * 6 ) + 1;
    const p1dice = `assets/dice${player1}.png`;
    document.getElementById('user1').setAttribute('src', p1dice);

    const player2 = Math.floor(Math.random() * 6 ) + 1;
    const p2dice = `assets/dice${player2}.png`;
    document.getElementById('user2').setAttribute('src', p2dice);

    if(player1 > player2) {
        document.querySelector('h1').innerHTML = "Player1 won!";
    }else if(player2 > player1) {
        document.querySelector('h1').innerHTML = "Player2 won!";
    }else {
        document.querySelector('h1').innerHTML = "DRAW!";
    }
}
