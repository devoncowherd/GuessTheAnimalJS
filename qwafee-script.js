//Top Menu Variables
const startGame = document.querySelector(".startGame");
const animalSkip = document.querySelector(".animalSkip");
const nextAnimal = document.querySelector(".nextAnimal");
const askHint = document.querySelector(".askHint");
const hint =  document.querySelector(".hint");

var hintState = 0;
var animalImage = document.querySelector(".animalImage");
var prompt = document.querySelector(".prompt");
var randomAnimal;
var selectedAnimal;
var rightAnimal;
var showCredits = false;


//User Input Variables
var userInput = document.querySelector(".userInput").value;
const userSubmit = document.querySelector(".userSubmit");
var result = document.querySelector(".result");
var ratio = document.querySelector(".ratio");
var numberCorrect = 0;
var numberWrong = 0;
var finalTotal = 0;

//Test Display
var placeholder = document.querySelector(".placeholder");

//Animal Variables
//0
var cat = "CAT";
//1
var dog = "DOG";
//2
var fish = "FISH";
//3
var turtle = "TURTLE";
//4
var lizard = "LIZARD";
//5
var rabbit = "RABBIT";
//6
var hamster = "HAMSTER";
//7
var bird = "BIRD";
//8
var hedgehog = "HEDGEHOG";
//9
var ferret = "FERRET";
//10
var squirrel = "SQUIRREL";



//initial Button States
document.getElementById("animalSkip").disabled = true;
document.getElementById("userInput").disabled = true;
document.getElementById("userSubmit").disabled = true;
document.getElementById("askHint").disabled = true;
document.getElementById("nextAnimal").hidden = true;
document.getElementById("hint").hidden = true;

//Gives Proper Credits
function giveCredit()
{
    if (showCredits === false)
    {
        document.getElementById("authors").hidden = false;
        showCredits = true;

    }
    else
    {
        var showCredits = false;
        document.getElementById("authors").hidden = true;

    }
}

//Get a hint based on animal sound
function getHint()
{
    if (hintState === 1)
    {
        document.getElementById("hint").hidden = true;
        hintState +=1;
    }
    if (hintState === 0)
    {
        if(rightAnimal === cat)
        {
            hint.textContent = "___ goes meow";
        }
        if(rightAnimal === dog)
        {
            hint.textContent = "___ goes woofwoof";
        }
        if(rightAnimal === fish)
        {
            hint.textContent = "____ goes blubbblubb";
        }
        if(rightAnimal === turtle)
        {
            hint.textContent = "______ goes snapsnap";
        }
        if(rightAnimal === lizard)
        {
            hint.textContent = "______ goes squeelsqueel";
        }
        if(rightAnimal === rabbit)
        {
            hint.textContent = "______ goes chatterchatter";
        }
        if(rightAnimal === hamster)
        {
            hint.textContent = "_______ goes squeeksqueek";
        }
        if(rightAnimal === bird)
        {
            hint.textContent = "____ goes chirpchirp";
        }
        if(rightAnimal === hedgehog)
        {
            hint.textContent = "________ goes grumblegrumble";
        }
        if(rightAnimal === ferret)
        {
            hint.textContent = "______ goes dookdook";
        }
        if(rightAnimal === squirrel)
        {
            hint.textContent = "________ goes screech screech";
        }
        
        document.getElementById("hint").hidden = false;
        hintState +=1;
    }
    if (hintState >= 2)
    {
        hintState = 0;
    }
}

//Moves on to the next Animal if user doesn't want to answer that question
function skipAnimal()
{
    randomAnimal = Math.round(Math.random()*10);
    document.getElementById("hint").hidden = true;

    if (randomAnimal === 0)
    {
        document.getElementById("animalImage").src = "images/MichaelSum_CAT.PNG";
        rightAnimal = cat;    
    }
    if (randomAnimal === 1)
    {
        document.getElementById("animalImage").src = "images/OscarSutton_DOG.PNG";       
        rightAnimal = dog;    

    }
    if (randomAnimal === 2)
    {
        document.getElementById("animalImage").src = "images/GáborSzűts_FISH.PNG";       
        rightAnimal = fish;    

    }
    if (randomAnimal === 3)
    {
        document.getElementById("animalImage").src = "images/PattiBlack_Turtle.PNG";       
        rightAnimal = turtle;    

    }
    if (randomAnimal === 4)
    {
        document.getElementById("animalImage").src = "images/VerdianChua_LIZARD.PNG";       
        rightAnimal = lizard;    

    }
    if (randomAnimal === 5)
    {
        document.getElementById("animalImage").src = "images/SatyabrataSM_RAbbit.PNG";       
        rightAnimal = rabbit;    

    }
    if (randomAnimal === 6)
    {
        document.getElementById("animalImage").src = "images/KimGreen_Hamster.PNG";       
        rightAnimal = hamster;    

    }
    if (randomAnimal === 7)
    {
        document.getElementById("animalImage").src = "images/BorisSmokrovic_Bird.PNG";       
        rightAnimal = bird;    

    }
    if (randomAnimal === 8)
    {
        document.getElementById("animalImage").src = "images/ArturStanulevich_Hedgehog.PNG";       
        rightAnimal = hedgehog;    

    }
    if (randomAnimal === 9)
    {
        document.getElementById("animalImage").src = "images/RohanChang_Ferret.PNG";       
        rightAnimal = ferret;   
    }
    if (randomAnimal === 10)
    {
        document.getElementById("animalImage").src = "images/ZuzannaJ_Squirrel.PNG";       
        rightAnimal = squirrel;    

    }

    numberWrong += 1;
    document.getElementById("nextAnimal").hidden = true;
    document.getElementById("result").hidden = true;
    document.getElementById("userSubmit").disabled = false;
    document.getElementById("userInput").disabled = false;
    gameEnd();
}



//Moves on to the next Animal
function goNext()
{
    randomAnimal = Math.round(Math.random()*10);
    document.getElementById("hint").hidden = true;
    document.getElementById("animalSkip").disabled = false;

    if (randomAnimal === 0)
    {
        document.getElementById("animalImage").src = "images/MichaelSum_CAT.PNG";
        rightAnimal = cat;    
    }
    if (randomAnimal === 1)
    {
        document.getElementById("animalImage").src = "images/OscarSutton_DOG.PNG";       
        rightAnimal = dog;    

    }
    if (randomAnimal === 2)
    {
        document.getElementById("animalImage").src = "images/GáborSzűts_FISH.PNG";       
        rightAnimal = fish;    

    }
    if (randomAnimal === 3)
    {
        document.getElementById("animalImage").src = "images/PattiBlack_Turtle.PNG";       
        rightAnimal = turtle;    

    }
    if (randomAnimal === 4)
    {
        document.getElementById("animalImage").src = "images/VerdianChua_LIZARD.PNG";       
        rightAnimal = lizard;    

    }
    if (randomAnimal === 5)
    {
        document.getElementById("animalImage").src = "images/SatyabrataSM_RAbbit.PNG";       
        rightAnimal = rabbit;    

    }
    if (randomAnimal === 6)
    {
        document.getElementById("animalImage").src = "images/KimGreen_Hamster.PNG";       
        rightAnimal = hamster;    

    }
    if (randomAnimal === 7)
    {
        document.getElementById("animalImage").src = "images/BorisSmokrovic_Bird.PNG";       
        rightAnimal = bird;    

    }
    if (randomAnimal === 8)
    {
        document.getElementById("animalImage").src = "images/ArturStanulevich_Hedgehog.PNG";       
        rightAnimal = hedgehog;    

    }
    if (randomAnimal === 9)
    {
        document.getElementById("animalImage").src = "images/RohanChang_Ferret.PNG";       
        rightAnimal = ferret;   
    }
    if (randomAnimal === 10)
    {
        document.getElementById("animalImage").src = "images/ZuzannaJ_Squirrel.PNG";       
        rightAnimal = squirrel;    

    }
    document.getElementById("nextAnimal").hidden = true;
    document.getElementById("result").hidden = true;
    document.getElementById("userSubmit").disabled = false;
    document.getElementById("userInput").disabled = false;
    
}

//check user input
function checkInput()
{
    var userInput = document.querySelector(".userInput").value;
    document.getElementById("hint").hidden = true;
    document.getElementById("animalSkip").disabled = true;

    if (userInput.toUpperCase() === rightAnimal)
    {   
        result.textContent = "Correct. Good Job!";
        document.getElementById("result").hidden = false;
        document.getElementById("result").style.backgroundColor = "green";
        document.getElementById("result").style.color = "white";
        numberCorrect += 1;

    }

    else
    {
        result.textContent = "False. That's a " + rightAnimal + "!";
        document.getElementById("result").hidden = false;
        document.getElementById("result").style.backgroundColor = "red";
        document.getElementById("result").style.color = "white";
        numberWrong +=1;
    }

    document.getElementById("userInput").value = "";
    document.getElementById("nextAnimal").hidden = false;
    document.getElementById("userSubmit").disabled = true;

    gameEnd();
    
}


//app
function easyMode()
{

    numberCorrect = 0;
    numberWrong = 0;
    //Enable Buttons
    document.getElementById("result").hidden = true;
    document.getElementById("ratio").hidden = true;
    document.getElementById("hint").hidden = true;
    document.getElementById("startGame").disabled = true;
    document.getElementById("userSubmit").disabled = false;
    document.getElementById("askHint").disabled = false;
    document.getElementById("userInput").disabled = false;
    document.getElementById("animalSkip").disabled = false;


    //Start Game
    randomAnimal = Math.round(Math.random()*10);
    document.getElementById("gameLogo").hidden = true;
    prompt.textContent = "What's That Animal?";

    //test to ensure the app is running
    //placeholder.textContent = randomAnimal;
    
    //initial state}

    if (randomAnimal === 0)
    {
        document.getElementById("animalImage").src = "images/MichaelSum_CAT.PNG";
        rightAnimal = cat;    
    }
    if (randomAnimal === 1)
    {
        document.getElementById("animalImage").src = "images/OscarSutton_DOG.PNG";       
        rightAnimal = dog;    

    }
    if (randomAnimal === 2)
    {
        document.getElementById("animalImage").src = "images/GáborSzűts_FISH.PNG";       
        rightAnimal = fish;    

    }
    if (randomAnimal === 3)
    {
        document.getElementById("animalImage").src = "images/PattiBlack_Turtle.PNG";       
        rightAnimal = turtle;    

    }
    if (randomAnimal === 4)
    {
        document.getElementById("animalImage").src = "images/VerdianChua_LIZARD.PNG";       
        rightAnimal = lizard;    

    }
    if (randomAnimal === 5)
    {
        document.getElementById("animalImage").src = "images/SatyabrataSM_RAbbit.PNG";       
        rightAnimal = rabbit;    

    }
    if (randomAnimal === 6)
    {
        document.getElementById("animalImage").src = "images/KimGreen_Hamster.PNG";       
        rightAnimal = hamster;    

    }
    if (randomAnimal === 7)
    {
        document.getElementById("animalImage").src = "images/BorisSmokrovic_Bird.PNG";       
        rightAnimal = bird;    

    }
    if (randomAnimal === 8)
    {
        document.getElementById("animalImage").src = "images/ArturStanulevich_Hedgehog.PNG";       
        rightAnimal = hedgehog;    

    }
    if (randomAnimal === 9)
    {
        document.getElementById("animalImage").src = "images/RohanChang_Ferret.PNG";       
        rightAnimal = ferret;   
    } 
    if (randomAnimal === 10)
    {
        document.getElementById("animalImage").src = "images/ZuzannaJ_Squirrel.PNG";       
        rightAnimal = squirrel;    

    }

    document.getElementById("animalImage").hidden = false;
    //fix counters <----------------------------------------------------------------
}


function gameEnd()
{
    var numberTotal = numberCorrect + numberWrong;
    if (numberTotal >= 3)
    {
        finalTotal = (numberCorrect/3)*100;
        ratio.textContent = "Score: " + Math.round(finalTotal);
        document.getElementById("ratio").hidden = false;
        document.getElementById("startGame").disabled = false;
        document.getElementById("animalSkip").disabled = true;
        document.getElementById("userSubmit").disabled = true;
        document.getElementById("userInput").disabled = true;
        document.getElementById("nextAnimal").hidden = true;
    }
}

//Event Listeners
startGame.addEventListener("click",easyMode);
userSubmit.addEventListener("click",checkInput);
animalSkip.addEventListener("click", skipAnimal);
nextAnimal.addEventListener("click", goNext);
askHint.addEventListener("click", getHint);
