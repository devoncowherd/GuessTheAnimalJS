//Top Menu Variables
const gameAbout = document.querySelector(".about");
const startGame = document.querySelector(".startGame");
const animalSkip = document.querySelector(".animalSkip");
var animalImage = document.querySelector(".animalImage");
var prompt = document.querySelector(".prompt");
var numberRight = 0;
var numberWrong = 0;

//Test Display
var placeholder = document.querySelector(".placeholder");

//Animal Variables //toUpperCase()
var randomAnimal;
var selectedAnimal;

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
var hamsters = "HAMSTERS";
//7
var birds = "BIRDS";
//8
var hedgehog = "HEDGEHOG";
//9
var ferret = "FERRET";
//10
var squirrel = "SQUIRREL";

//User Input Variables
var userInput = document.querySelector(".userInput").value;
var userInput = document.querySelector(".userInput");
const userSubmit = document.querySelector(".userSubmit");
const askHint = document.querySelector(".askHint");
var percentCorrect;

//skip animal
function skipAnimal()
{
    randomAnimal = Math.round(Math.random()*10);
    easyMode();
}

//check user input
function checkInput()
{
    var userInput = document.querySelector(".userInput").value;
}


//app
function easyMode()
{
    //Settings up game
    document.getElementById("startGame").disabled = true;
    randomAnimal = Math.round(Math.random()*10);
    document.getElementById("gameLogo").hidden = true;
    prompt.textContent = "What's That Animal?";

    //test to ensure the app is running
    //placeholder.textContent = randomAnimal;
    
    //initial state
    var correct = false;

    //fix counters <----------------------------------------------------------------

    while (correct === false && numberWrong <= 3)
    {

        //Check User Answer
        if (randomAnimal === 0)
        {
            document.getElementById("animalImage").src = "images/MichaelSum_CAT.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "CAT")
            {
                numberRight += 1;
                correct = true;
            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 1)
        {

            document.getElementById("animalImage").src = "images/OscarSutton_DOG.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "DOG")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 2)
        {
            document.getElementById("animalImage").src = "images/GáborSzűts_FISH.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "FISH")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 3)
        {
            document.getElementById("animalImage").src = "images/PattiBlack_Turtle.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "TURTLE")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 4)
        {
            document.getElementById("animalImage").src = "images/VerdianChua_LIZARD.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "LIZARD")
            {
                numberRight += 1;
                correct = true;
            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 5)
        {
            document.getElementById("animalImage").src = "images/SatyabrataSM_RAbbit.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "RABBIT")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 6)
        {
            document.getElementById("animalImage").src = "images/KimGreen_Hamster.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "HAMSTERS")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 7)
        {
            document.getElementById("animalImage").src = "images/BorisSmokrovic_Bird.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "BIRD")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 8)
        {
            document.getElementById("animalImage").src = "images/ArturStanulevich_Hedgehog.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "HEDGEHOG")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 9)
        {
            document.getElementById("animalImage").src = "images/RohanChang_Ferret.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "FERRET")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;

            }
        }
        if (randomAnimal === 10)
        {
            document.getElementById("animalImage").src = "images/ZuzannaJ_Squirrel.PNG";
            document.getElementById("animalImage").hidden = false;

            if (userInput.toUpperCase() === "SQUIRREL")
            {
                numberRight += 1;
                correct = true;

            }
            else
            {
                numberWrong += 1;
                correct = false;
            }
        }
        placeholder.textContent = numberRight + numberWrong;
    }

}


//Event Listeners
startGame.addEventListener("click",easyMode);
userInput.addEventListener("click",checkInput);
animalSkip.addEventListener("click", skipAnimal);
