let val;
let ops;
let secops;
let finalAns;
let firstValue;
let secondValue;

function Error(){
    if (isNaN(finalAns)){
        display.innerHTML = "Maths Error"
    } else{
        display.innerHTML = finalAns;
    }
}
function Btn(a){
    if (display.innerHTML == 0) {
        display.innerHTML= "";    
    }

    if (display.innerHTML == finalAns || display.innerHTML == "Maths Errors"){
        display.innerHTML = ""
        input1.value = "" // after out final answer, both displays clears
    }  
    display.innerHTML += a; // gets the number when the btns are pressed
}

function Op(b){
    // if (ops || firstValue){
    //     Calc()     
    // }
    ops = b;  //saves the operator used
    val = display.innerHTML // init number, sends it to the big display
    input1.value = `${val} ${ops}`; // displays the initial number and operator on the small display
    input1.value = val; // get the initial number from the big display to the small display
    display.innerHTML = "0";  // equates our big display to zero so it can get our second number
}

function Delete(){
    display.innerHTML = display.innerHTML.slice(0, -1)
    if (display.innerHTML == 0 ){
        display.innerHTML = 0
    } 
}

function clr(a){
    if (a == "C"){
        display.innerHTML = "0";
        input1.value = "";
    } else if(a == "CE"){
        display.innerHTML  = "0"
    }
}

function Calc(){
    firstValue = Number(val); // first number
    secondValue = Number(display.innerHTML);  // second number from line 27
    if (ops == "+") {
        finalAns = firstValue + secondValue;
    } else if (ops == "*") {
        finalAns = firstValue * secondValue;
    } else if (ops == "/") {
        finalAns = firstValue / secondValue;
    } else if (ops == "-") {
        finalAns = firstValue - secondValue;
    } else{
        input1.value = `0=`
        display.innerHTML = 0
    }
    display.innerHTML = finalAns;
    input1.value = `${firstValue}${ops}${secondValue}=`
}

function Sqr(){
    firstnum = display.innerHTML;
    finalAns = firstnum * firstnum;
    display.innerHTML = finalAns;
    input1.value = `sqr(${firstnum})`
}

function Sqrts(){
    firstnum = display.innerHTML;
    finalAns = Math.sqrt(firstnum);
    Error()
    input1.value = `sqrt(${firstnum})`
}

function Inv(){
    firstnum = display.innerHTML;
    finalAns = 1/firstnum;
    Error()
    input1.value = `inv(${firstnum})`
}

function Negate(){
    firstnum = display.innerHTML;
    finalAns = -firstnum;
    display.innerHTML = finalAns;
    input1.value = `negate(${firstnum})`
}

function Percentage(){
    if (display.innerHTML == finalAns){
        firstnum = display.innerHTML;
        finalAns = firstnum/100;
        display.innerHTML = finalAns;
        input1.value = `${firstnum}`
    }else{
        display.innerHTML = 0
        input1.value = 0
    }  
}