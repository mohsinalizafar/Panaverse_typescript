import inquirer from "inquirer"
async function wordCounter()
{
    const word= await inquirer.prompt([


    {
        type:"text",
        name:"str",
        message:"Enter words..."

    }

   
]) 

const words_arr=word.str.split(" ");

console.log(`Total number of words are: ${words_arr.length}`);

const characters = word.str.replace(/\s/g, '');

console.log(`Total number of characters are: ${characters.length}`);}





do{
    await wordCounter() ;
var again = await inquirer.prompt([
    {
        type:"list",
        name:"again",
        message:"Do you want to try again?",
        choices:["Yes", "No"]
    }


])}while(again.again!="No")
