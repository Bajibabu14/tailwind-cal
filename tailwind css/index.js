
const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
const backspace = () =>{
    const num = document.querySelector("#display").value.slice(0,-1);
    document.querySelector("#display").value = num;
}
function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "ERROR";
    }

}
