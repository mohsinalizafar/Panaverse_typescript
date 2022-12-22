import inquirer from "inquirer";
const randnumer = Math.floor(Math.random() * 10);
async function game() {
    const userInput = await inquirer.prompt([{
            type: "number",
            name: "userInput",
            message: "Enter a number",
        }]);
    if (userInput === randnumer) {
        console.log("You won");
    }
    else {
        console.log("You lost");
    }
}
async function guessingGame() {
    do {
        await game();
        var playAgain = await inquirer.prompt([{
                type: "list",
                name: "playAgain",
                message: "Play Again",
                choices: ["Yes", "No"]
            }]);
    } while (playAgain.playAgain == "Yes");
}
guessingGame();
