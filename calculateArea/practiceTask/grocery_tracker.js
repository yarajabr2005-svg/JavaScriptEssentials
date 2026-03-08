let grocery1, grocery2, grocery3;

function groceryTracker(){
    grocery1=parseFloat(document.getElementById("grocery1").value);
    grocery2=parseFloat(document.getElementById("grocery2").value);
    grocery3=parseFloat(document.getElementById("grocery3").value);

    let totalAmount=grocery1+grocery2+grocery3;

    document.getElementById("totalAmount").innerText=`The total amount is: \$ ${totalAmount}`;
}