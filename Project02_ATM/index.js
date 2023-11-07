import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
const createUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000000 * Math.random() * 900000000),
            balance: 1000000 * i
        };
        users.push(user);
    }
    return users;
};
const atmMachine = async (users) => {
    const res = await inquirer.prompt([{
            type: "Number",
            message: "Plese Enter your Pin Code",
            name: "pin",
        }]);
    // console.log();
    const user = users.find(val => val.pin == res.pin);
    if (user) {
        console.log(`Welcome! ${user.name}`);
        atmFunc(user);
        return;
    }
    console.log("Invalid user Pin");
    // console.log(res)
};
const atmFunc = async (user) => {
    const ans = await inquirer.prompt([{
            type: "list",
            name: "select",
            message: "",
            choices: ["Withdraw", "Balanced", "Exit", "Doposite"]
        }]);
    console.log(ans);
    if (ans.select == "withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter Amount",
            name: "rupee",
        });
        if (amount.rupee > user.balance) {
            return console.log("Insufficient funds");
        }
        console.log(`withdraw amount: ${amount.rupee}`);
        console.log(`balance: ${user.balance - amount.rupee}`);
    }
    if (ans.select == "balance") { }
    if (ans.select == "exit") { }
    if (ans.select == "deposite") { }
};
const users = createUser();
atmMachine(users);
// console.log(users);
