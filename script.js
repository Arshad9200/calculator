let input = document.getElementById('inputBox');                                      //select the inputBox in js

let buttons = document.querySelectorAll('button');                                    //select all the buttons (querySelectoeAll return all buttons)




let string = "";                                                                      //in string we store result of calculator

let arr = Array.from(buttons);                                                        //we use array for select all buttoms

arr.forEach(button => {                                                               //loop of the buttons because loop is not applicable on array   
    button.addEventListener('click', (e) => {                                         // clickEventListener is perform action when any click is happen => function use for that action
        if(e.target.innerHTML == '='){                                                //if we press equal
            string = eval(string);                                                    //eval is a evaluate function of javascript that give the value after evaluate
            input.value = string;                                                     //store the value in string variable
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
         else{                                                                          //if we click other buttoms that is store in string variable
            string += e.target.innerHTML;
            input.value = string;                                                       //that store string shown in input box
         }
       
    })
})