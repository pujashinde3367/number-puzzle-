const numbers = document.querySelectorAll(".number");    

let prevInput = '0';
let currentInput = '0';

let id1="";
let id2="";

const set_Text = (id, newvalue)=> {
    var s= document.getElementById(id);
    s.name = newvalue;
  }

numbers.forEach((number)=>{
    prevInput = currentInput;
    id1=id2;
    number.addEventListener("click", (event) => {
        currentInput=event.target.name;  
        console.log(currentInput);
        id2=event.target.id;      
        console.log(id2);
    })
});


set_text(id1, currentInput);
set_text(id2, prevInput);