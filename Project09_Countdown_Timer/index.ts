import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"

const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter the Amount of Second",
    validate: (input) => {
    if (isNaN(input)) {
            return "Please enter a Valid Numbber"
    } else if (input > 60) {
        return "Second must be in 60"
    } else {
        return true
    }
 }
});

let input = res.userInput

function startTime(val: number) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);
    setInterval(()=>{
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");  
            process.exit()
        }
        const minute = Math.floor((timeDiff % (3600 * 24))/3600)
        const seconds = Math.floor(timeDiff % 60)
        console.log(`${minute.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`);
        
    },1000)
}

startTime(input)


