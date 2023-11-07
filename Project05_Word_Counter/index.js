#!/usr/bin/env node
import inquirer from "inquirer";
async function WordCounter(text) {
    const characterCount = text.replace(/\s/g, '').length;
    const wordCount = text.split(/\s+/).filter(word => word !== '').length;
    console.log(`Character Count: ${characterCount}`);
    console.log(`Word Count: ${wordCount}`);
}
async function main() {
    try {
        const questions = [{
                type: 'input',
                name: 'text',
                message: 'Enter an English paragraph:'
            }];
        const answer = await inquirer.prompt(questions);
        const text = answer.text;
        WordCounter(text);
    }
    catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}
main();
