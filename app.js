import readline from "readline-sync"
import chalk from "chalk"

function main(){
    // console.log("hello")
    // let fname=readline.question("Enter your frist name: ")
    // let lname=readline.question("enter your last name: ")
    // // console.log(fname);
    // let age=readline.questionInt("enter your age: ")
    // let city=readline.question("enter your city: ")
    // let email=readline.questionEMail("enter your email: ")
    // console.log("name:", fname, lname,"age:", age,"city:",city, "email:", email);
    console.log("==========Instagram Login ==========")
    console.log(chalk.bgRedBright("=============Login to use Instagram============="))

    let email =readline.questionEMail(chalk.bgMagenta("enter your email: "))
    let password = readline.question(chalk.bgGreenBright("enter your password: "),{
        hideEchoBack:true
    })
    console.log(chalk.bold("email: ", email)); 
    console.log(chalk.bgBlue( "password: ", password));
}
main ()
