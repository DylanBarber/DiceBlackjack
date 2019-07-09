// Sets the background color of user1 as the initial player
document.querySelector('.user1Container').classList.add('user1ContainerGradient');

//initialize variables
let user1Score = 0;
let user2Score = 0;
let turn = 0;
let roll1Result;
let roll2Result;

//Resets the game
document.getElementById('reset').addEventListener("click", function() {
    user1Score = 0;
    user2Score = 0;
    turn = 0;
    roll1Result = 0;
    roll2Result = 0;
    document.getElementsByClassName('dice')[0].id = 'dice1'
    document.getElementsByClassName('dice')[1].id = 'dice1'
    document.getElementById('user1Score').innerHTML = "User 1's Score: 0";
    document.getElementById('user2Score').innerHTML = "User 2's Score: 0";
    document.querySelector('h1').innerHTML = 'Dice Blackjack'
    document.querySelector('.user1Container').classList.add('user1ContainerGradient');
    document.querySelector('.user2Container').classList.remove('user2ContainerGradient');
});

//Switches the current player
document.getElementById('hold').addEventListener("click", function() {
    //Disallow user from changing user div color if game is over
    if (winCheck() === true) {
        return;
    }

    //Add to the turn counter
    turn += 1;

    //This will change the div color for whos turn it is
    if (turn % 2 === 0) {
        document.querySelector('.user2Container').classList.remove('user2ContainerGradient');
        document.querySelector('.user1Container').classList.add('user1ContainerGradient');
    } else {
        document.querySelector('.user1Container').classList.remove('user1ContainerGradient');
        document.querySelector('.user2Container').classList.add('user2ContainerGradient');
    }
    return turn;
});

//Checks for the winner
function winCheck() {
    if (user1Score === 21) {
        document.querySelector('h1').innerHTML = 'User 1 Wins!!!!';
        document.querySelector('.user2Container').classList.remove('user2ContainerGradient');
        document.querySelector('.user1Container').classList.remove('user1ContainerGradient');
        return true;
    } else if (user2Score > 21) {
        document.querySelector('h1').innerHTML = 'User 2 went over 21. User 1 Wins!';
        document.querySelector('.user2Container').classList.remove('user2ContainerGradient');
        document.querySelector('.user1Container').classList.remove('user1ContainerGradient');
        return true;
    } else if (user2Score === 21) {
        document.querySelector('h1').innerHTML = 'User 2 Wins!!!!';
        document.querySelector('.user2Container').classList.remove('user2ContainerGradient');
        document.querySelector('.user1Container').classList.remove('user1ContainerGradient');
        return true;
    } else if (user1Score > 21) {
        document.querySelector('h1').innerHTML = 'User 1 went over 21. User 2 Wins!';
        document.querySelector('.user2Container').classList.remove('user2ContainerGradient');
        document.querySelector('.user1Container').classList.remove('user1ContainerGradient');
        return true;
    }
}

//Rolls the dice
document.getElementById('roll').addEventListener("click", function() {
    if (winCheck() === true) {
        return;
    }

    function roll1() {
        roll1Result = Math.floor(Math.random() * (5 - 0 + 1) + 1);
        return roll1Result;
    }

    function roll2() {
        roll2Result = Math.floor(Math.random() * (5 - 0 + 1) + 1);
        return roll2Result;
    }
    roll1Result = roll1();
    roll2Result = roll2();
    console.log(roll1Result, roll2Result);
    document.getElementsByClassName('dice')[0].id = 'dice' + roll1Result;
    document.getElementsByClassName('dice')[1].id = 'dice' + roll2Result;

    if (turn % 2 === 0) {
        user1Score += roll1Result + roll2Result;
        document.getElementById('user2Score').innerHTML = "User 2's Score: " + user2Score;
        document.getElementById('user1Score').innerHTML = "User 1's Score: " + user1Score;
        console.log('turn count: ' + turn);
    } else {
        user2Score += roll1Result + roll2Result;
        document.getElementById('user1Score').innerHTML = "User 1's Score: " + user1Score;
        document.getElementById('user2Score').innerHTML = "User 2's Score: " + user2Score;
        console.log('turn count: ' + turn);
    }
    winCheck()
});