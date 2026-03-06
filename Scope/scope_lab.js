// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

//Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    //console.log(functionVar); // Throws ReferenceError
    //console.log(functionLet); // Throws ReferenceError
    //console.log(functionConst); // Throws ReferenceError
    

    //Practice Task
    {
        let practiceLet="This is a practice block-scoped let";
        const practiceConst="This is a practice block-scoped const";
        var practiceVar="This is a practice block-scoped var";
    
        console.log(practiceLet);
        console.log(practiceConst);
        console.log(practiceVar);

        practiceLet="Reassign practiceLet";
        //practiceConst="Reassign practice const";
        practiceVar="Reassign practice var";

        console.log(practiceLet);
        //console.log(practiceConst);
        console.log(practiceVar);
    }   

        console.log(practiceLet); //error, says it's not defined
        console.log(practiceVar);

