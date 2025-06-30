import readline from "readline-sync"
import chalk from "chalk"
import figlet from "figlet";
import boxen from "boxen";
//github username
// email 
// password

console.log(boxen(chalk.bgGreenBright(
  figlet.textSync("Github CLI", {
    
    horizontalLayout: "fitted",
    verticalLayout: "universal smushing",
    width: 80,
    whitespaceBreak: true,
  })

),{borderStyle: 'doubleSingle'}));



function UserDetails(){
    var Github=readline.question(chalk.bgCyanBright("👤Enter your Username: "))

    var email =readline.questionEMail(chalk.bgMagenta("📧enter your email: "))
    var password = readline.question(chalk.bgGreenBright("🔑enter your password: "),{
        hideEchoBack:true
    })
    var fullname =readline.question(chalk.bgBlackBright("🫠enter your full name: "))
    var bio= readline.question(chalk.bgBlueBright("✨bio: "))
    


//     console.log(`boxen`)(chalk.bgWhiteBright(Github))
//     console.log(chalk.bgCyanBright(email)),
//     console.log(chalk.bgBlackBright(password)),
//     console.log(chalk.redBright(fullname)),
//     console.log(chalk.yellowBright(bio))
    
//     {borderStyle: 'singledouble'};
    
// }
// UserDetails();

 

// console.log(
//     boxen(userInfo, {
//       padding: 1,
//       margin: 1,
//       borderStyle: "singleDouble",
//       borderColor: "green",
//       title: "User Profile",
//       titleAlignment: "center",
//     })

var person=(`${Github}\n${email}\n${password}\n${fullname}\n${bio}`)
    
console.log(chalk.greenBright(boxen(chalk.cyanBright(person),{ borderStyle: 'double', title: 'User Details',titleAlignment:"center",textAlignment:"center",padding:2 })));
console.log(email);
console.log(password);
console.log(fullname);
console.log(bio);

}
UserDetails();