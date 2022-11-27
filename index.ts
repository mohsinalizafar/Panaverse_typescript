#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";


async function welcome() {
    const animatedText =  chalkAnimation.rainbow('Welcome To Calculator ');
    animatedText.start();
    animatedText.stop();


}

async function getAnswers() {
    const answer = await inquirer
        .prompt([
            {
                type: "list",
                name: "operator",
                message: "Which operation you want to perform?",
                choices: ["Addition", "Subtraction", "Division", "Multiplication"],
       

            },
            {
                type: "input",
                name: "num1",
                message: "Enter first number:",
                validate(input){
                    if(isNaN(input)){
                        return "Enter a valid number";
                    }
                    else{
                        return true;
                    }

                }

           

            },
            
            {
                
                type: "input",
                name: "num2",
                message: "Enter second number:",
                validate(input,answer){
                    if(isNaN(input)){
                        return "Enter a valid number";
                    }
                    else if(answer.operator=="Division"&& input==0){
                        return "Cannot divide with 0";
                    }
                    else{
                        return true;
                    }

                }
          
                
            }

        ]);

    if (answer.operator == "Addition") {
        console.log(chalk.green(`${answer.num1}+${answer.num2}= ${Number(answer.num1) + Number(answer.num2)}`));
    }
    else if (answer.operator == "Subtraction") {
        console.log(chalk.red(`${answer.num1}-${answer.num2}= ${Number(answer.num1) - Number(answer.num2)}`));
    }
    else if (answer.operator == "Division") {
        console.log(chalk.blue(`${answer.num1}/${answer.num2}= ${Number(answer.num1) / Number(answer.num2)}`));
    }
    else if (answer.operator == "Multiplication") {
        console.log(chalk.blue(`${answer.num1}*${answer.num2}= ${Number(answer.num1) * Number(answer.num2)}`));
    }

}

async function calculator() {

    do {
        await welcome()

        await getAnswers();
        var restart = await inquirer.prompt(
            {
                type: "list",
                name: "repeat",
                message: "Do you want to perform calculation again?",
                choices: ["Yes", "No"]
            }
        )



    } while (restart.repeat == "Yes")
}




calculator()