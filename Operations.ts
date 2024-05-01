import ch from 'chalk'
const Operation = (val1:number,val2:number,op:string):void => {
    if(op==="+"){
        console.log(ch.green(`Sum of ${val1} and ${val2} = ${val1+val2}`));
    }
    else if(op==="-"){
        console.log(ch.green(`Subtraction of ${val1} and ${val2} = ${val1-val2}`));
    }
    else if(op==="*"){
        console.log(ch.green(`Product of ${val1} and ${val2} = ${val1*val2}`));
    }
    else if(op==="/"){
        console.log(ch.green(`Division of ${val1} and ${val2} = ${val1/val2}`));
    }
    else if(op==="%"){
        console.log(ch.green(`Modulous of ${val1} and ${val2} = ${val1%val2}`));
    }
    else{
        console.log(ch.red("Invalid Operator!"));
    }
}

export default Operation;