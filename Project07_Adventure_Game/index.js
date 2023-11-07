import chalk from 'chalk';
import inquirer from 'inquirer';
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponents {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let player1 = new Player(player.name);
let opnt1 = new Opponents(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(player1.name)} VS ${chalk.bold.red(opnt1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.option == "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                player1.fuelDecrease();
                console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.bold.green(`${opnt1.name} Fuel is ${opnt1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose \n 'Better luck next Time'"));
                    process.exit();
                }
            }
            if (number <= 0) {
                opnt1.fuelDecrease();
                console.log(chalk.bold.green `${player1.name} Fuel is = ${player1.fuel}`);
                console.log(chalk.bold.red(`${opnt1.name} Fuel is = ${opnt1.fuel}`));
                if (opnt1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            player1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`Drink Health Portion Your Fuel is ${player1.fuel}`));
        }
        if (ask.option == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose, 'Better luck next time'"));
            process.exit();
        }
    }
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(player1.name)} VS ${chalk.bold.red(opnt1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.option == "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                player1.fuelDecrease();
                console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.bold.green(`${opnt1.name} Fuel is ${opnt1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose \n 'Better luck next Time'"));
                    process.exit();
                }
            }
            if (number <= 0) {
                opnt1.fuelDecrease();
                console.log(chalk.bold.green `${player1.name} Fuel is = ${player1.fuel}`);
                console.log(chalk.bold.red(`${opnt1.name} Fuel is = ${opnt1.fuel}`));
                if (opnt1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            player1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`Drink Health Portion Your Fuel is ${player1.fuel}`));
        }
        if (ask.option == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose, 'Better luck next time'"));
            process.exit();
        }
    }
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(player1.name)} VS ${chalk.bold.red(opnt1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.option == "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                player1.fuelDecrease();
                console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
                console.log(chalk.bold.green(`${opnt1.name} Fuel is ${opnt1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose \n 'Better luck next Time'"));
                    process.exit();
                }
            }
            if (number <= 0) {
                opnt1.fuelDecrease();
                console.log(chalk.bold.green `${player1.name} Fuel is = ${player1.fuel}`);
                console.log(chalk.bold.red(`${opnt1.name} Fuel is = ${opnt1.fuel}`));
                if (opnt1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            player1.fuelIncrease();
            console.log(chalk.bold.italic.yellow(`Drink Health Portion Your Fuel is ${player1.fuel}`));
        }
        if (ask.option == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Loose, 'Better luck next time'"));
            process.exit();
        }
    }
} while (true);
