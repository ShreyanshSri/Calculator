let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); // query selector will select all the buttons

let string  = "";
let arr = Array.from(buttons);
// console.log(arr);

arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL')
        {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})


 document.addEventListener('keydown' , (e) =>{
    if(e.key == 'Enter')
    {      
        string = eval(string);
        input.value = string;
    }

    else if(e.key == 'Escape' ){
        string = "";
        input.value = string;
    }

    else if(e.key == 'Backspace'){
        string = string.substring(0,string.length-1);
        input.value = string;
    }

    else if((e.key >= 0 && e.key <= 9) || (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' ||
     e.key == '%' || e.key == '.') ){
        string += e.key;
        input.value = string;
    }
 });