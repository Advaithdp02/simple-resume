//calculator program

const display= document.getElementById("display");

function appendtodisplay(input){ 
    if (display.value=="ERROR")
        display.value="";
    display.value += input;
}

function cleardisplay(){
    display.value="";

}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR"
    }}