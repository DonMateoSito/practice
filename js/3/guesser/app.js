
let     min = 1,
        max = 10,
        winningNum = 5,//Math.floor(Math.random()*10 +1),
        guessesLeft = 3;

//ui var
const   
        UIinput = document.querySelector('.input'),
        UIbtn = document.querySelector('.btn'),
        UIcontainer = document.querySelector('.container'),
        UImin = document.querySelector('.min'),
        UImax = document.querySelector('.max'),
        UImessage = document.querySelector('.message');

//UI game numbers
UImin.textContent = min;
UImax.textContent = max;

//functions
function gameOver(won, msg){
    let Color;
    if (won === true){Color = 'green';UIinput.style.borderColor = Color; 
    }else{Color = 'red';UIinput.style.borderColor = 'red';}
    UIinput.disabled = true;
    setMessage(msg, Color);
}
//

//listener
UIbtn.addEventListener('click',function(e){
    e.preventDefault();
    let guess = parseInt(UIinput.value);
    console.log(guess);
    //validation
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`,'red');
    };
    //game
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, you won`,);
        
        
        console.log(e.target);
        UIbtn.textContent = "Play again";
        UIbtn.className += " play-again";
    } else{
        guessesLeft -= 1;

    if(guessesLeft === 0){
        gameOver(false, `${winningNum} was correct, you lost`);
        
    } else{
        setMessage(`${guess} was wrong, guesses left: ${guessesLeft} `,'red');
        UIinput.value='';
        }
    }
});


function setMessage(msg,color){
    UImessage.style.color = color;
    UImessage.textContent = msg;

}







