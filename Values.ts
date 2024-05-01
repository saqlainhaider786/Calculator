import inq from 'inquirer';
import ch from 'chalk'
let data=await inq.prompt([
    {
        name:"val1",
        type:"number",
        message:ch.blue("Enter 1st Value : ")
    },
    {
        name:"val2",
        type:"number",
        message:ch.blue("Enter 2nd Value : ")
    },
    {
        name:"op",
        type:"list",
        message:ch.blue("Enter the operator Value : "),
        choices:["+","-","*","/","%"]
    }
]);

export default data