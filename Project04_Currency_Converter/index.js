#! /usr/bin/env node
import inquirer from "inquirer";
const UsdtoPkr = 278.50;
const PkrtoUsd = 0.0044;
const EutoPkr = 239.85;
const PkrtoEuo = 0.0042;
const EutoUsd = 1.05;
const UsdtoEu = 0.95;
let repeat = false;
async function Converter() {
    do {
        let answer = await inquirer.prompt([{
                name: "CurrencyFrom",
                type: "list",
                choices: [`USD`, `PKR`, `EU`],
                message: "Select from which currency you want to Convert"
            },
            {
                name: "CurrencyTo",
                type: "list",
                choices: [`USD`, `PKR`, `EU`],
                message: "Select from which currnecy you want to convert"
            },
            {
                name: "Amount",
                type: "number",
                message: "Enter Values: "
            }]);
        //console.log(answer.Amount); 
        switch (answer.CurrencyFrom) {
            case 'USD':
                if (answer.CurrencyTo === "PKR") {
                    let Amount = answer.Amount * UsdtoPkr;
                    console.log(Amount);
                }
                else if (answer.CurrencyTo === "EU") {
                    let Amount = answer.Amount * UsdtoEu;
                    console.log(Amount);
                }
                else {
                    console.log(answer.Amount);
                }
                break;
            case 'PKR':
                if (answer.CurrencyTo === "USD") {
                    let Amount = answer.Amount * PkrtoUsd;
                    console.log(Amount);
                }
                else if (answer.CurrencyTo === "EU") {
                    let Amount = answer.Amount * PkrtoEuo;
                    console.log(Amount);
                }
                else {
                    console.log(answer.Amount);
                }
                break;
            case 'EU':
                if (answer.CurrencyTo === "USD") {
                    let Amount = answer.Amount * EutoUsd;
                    console.log(Amount);
                }
                else if (answer.CurrencyTo === "PKR") {
                    let Amount = answer.Amount * EutoPkr;
                    console.log(Amount);
                }
                else {
                    console.log(answer.Amount);
                }
                break;
        }
        repeat = await Repeat();
    } while (repeat == true);
}
async function Repeat() {
    let again = await inquirer.prompt([{
            name: "repeat",
            type: "list",
            choices: ['y', 'n'],
            message: "Do you want to repeat"
        }]);
    return again.repeat === 'y' ? true : false;
}
Converter();
