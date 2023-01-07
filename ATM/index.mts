#!usr/bin/env node
import inquirer from "inquirer";

var balance: number = 1000;

var exit:boolean=false;


async function banking(){

    while(exit==false){

    const bankOperations = await inquirer
            .prompt([

                {
                    type: "list",
                    name: "operation",
                    message: "Choose a bank operation:",
                    choices: ["Deposit", "Withdraw", "Check Balance","Logout"]

                }
            ])

        

            switch (bankOperations.operation) {
                case ("Deposit"): {

                    {
                        const deposit = await inquirer
                            .prompt([

                                {
                                    type: "number",
                                    name: "deposit",
                                    message: "How much amount you want to deposit?",


                                }

                            ])

                        balance = balance + deposit.deposit;
                        console.log("Your amount is deposited!");
                        
                        break;
                     
                        }

                }
                case ("Withdraw"): {
                    const Withdraw = await inquirer
                        .prompt([

                            {
                                type: "number",
                                name: "withdraw",
                                message: "How much amount you want to withdraw?",


                            }

                        ])


                    balance = balance - Withdraw.withdraw;
                    console.log("Amount is withdrawl");
                    break;
                }

                case ("Check Balance"): {
                    console.log(`Your balance is ${balance}`)
                    break;
                }
                case ("Logout"): {
                  exit=true;
                    break;
                }

            default:{
                console.log("Error");
            }
        }    }  }


async function checkLogin(username: string, pin: number) {

    if (username == "mohsin" && pin == 123) {
        console.log("You're Logged in successfully")

        banking();
       

} else{
    console.log("You entered wrong credendials!")
}

}
async function userLogin() {
    const login = await inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message: "Enter Username",

            },
            {
                type: "input",
                name: "pin",
                message: "Enter Pin:",
                validate(input: number) {
                    if (isNaN(input)) {
                        return "Enter a valid number";
                    }
                    else {
                        return true;
                    }

                }


            },


        ])
    checkLogin(login.username, login.pin)

}

userLogin();

// Created by mohsin ali 
