import inquirer from "inquirer"

class Student {
    name: string
    constructor(n: string) {
        this.name = n
    }
}

class Person {
    students: Student[]=[]

    addStudent(obj: any) {
        this.students.push(obj)
    }
}

const persons = new Person()

const start = async (persons: Person) => {
do{
    console.log("Welcome Guest");

    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Who would you like to talk to?....",
        choices: ["self", "student"]
    });

    if (ans.select == "self") {
        console.log("Hello, I'm talking to myself");
        console.log("I'm wel");
        
        
    }
    if (ans.select == "student") {
        const ans = await inquirer.prompt({
            type: "input",
            name: "student",
            message: "Who should you talk to?...",
        });

        const student = persons.students.find(val => val.name == ans.student);

        if (!student) {
            const name = new Student(ans.student);
            persons.addStudent(name);

            console.log(`Hello I'm ${name.name} and I'm fine`);
            console.log(persons.students)
    }

    if (student) {
          console.log(`Hello I'm ${student.name} and I'm fine........`);
            console.log(persons.students)
    }
 }
} while(true)
    
};

start(persons)