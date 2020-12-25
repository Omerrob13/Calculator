let check = document.querySelector(".class");
            function hello () {
                check.addEventListener("click",function(){
                    check.innerHTML = " byeee"
                })
            }
            
            let num = document.querySelectorAll(".num")
            let operator = document.querySelectorAll(".operator")
            let display = document.querySelector(".display")
            let equalOperator = document.querySelector(".equal")
            let clear = document.querySelector(".clear")
            let number1Value;
            let array = []
            let array2 = []
            let num1;
            let num2;
            let operatorValue;
            let result;
            let lastKeyCode = 0;

            equalOperator.addEventListener("click",function (){
                debugger;
                if ((num1 === "" || num1 === undefined) && (num2 === undefined || num2 === "")) {
                    display.innerHTML = "YOu must have a valid equation"
                    return
                }
                if (num2 === undefined || num2 === "") {
                    display.innerHTML = result
                    array = []
                    
                } else {
                    display.innerHTML = result;
                    array = []
                    array2 = []
                    num1 = ""
                    num2 = ""
                    
                }
                
            })
               
           function populate () {
               
            for (let i = 0; i < num.length; i++) {
               num[i].addEventListener("click",function(){
                   debugger;
                    if (operatorValue === "+" || operatorValue === "-" || operatorValue === "*" || operatorValue === "/" || operatorValue === "hello") {
                       if (lastKeyCode > 1) {
                          
                           num2 = num[i].value;
                           array2.push(num2)
                           array2 = array2.join("")
                           num2 = array2;
                           display.innerHTML = (+array2).toFixed(2);
                           array2 = array2.split("")
                           operate(operatorValue, num1, num2)
                           
                           
                           return
                       }
                        num2 = num[i].value
                        array2.push(num2)
                        array2 = array2.join("")
                        num2 = array2;
                        display.innerHTML = (+array2).toFixed(2);
                        array2 = array2.split("")
                        operate(operatorValue,num1,num2)
                        return
                    } 
                    num1 = num[i].value
                    array.push(num1)
                    array = array.join("")
                    num1 = (+array).toFixed(2)
                    display.innerHTML = (+array).toFixed(2)
                    array = array.split("");
                    result = num1;
               })
           }

           for (let i = 0; i < operator.length; i++) {
            operator[i].addEventListener("click",function(e){
             lastKeyCode++;
          
             if (lastKeyCode > 1 ) {
                 operatorValue = operator[i].value;
                    array2 = []
                    display.innerHTML = result;
                    return num1 = result;
                }
                operatorValue = operator[i].value;
                display.innerHTML = operatorValue;       
            })
        }

     }
     populate();

     function operate (operator, number1, number2) {
        if (operator === "+") {
            result = add(number1,number2);
        } else if (operator === "-") {
            result = substract(number1, number2)
        } else if (operator === "*") {
            result = multiply(number1,number2);
        }  else {
            result = divide(number1, number2)
        } 
                
    }

    function add (number1, number2) {
        result = (+number1) + (+number2);
       return result.toFixed(2);
   }

   function substract (number1, number2) {
        result = number1 - number2;
       return result.toFixed(2);
   }

   function multiply (number1, number2) {
        result = number1 * number2;
       return result.toFixed(2);
   }

   function divide (number1, number2) {
       if (number2 === "0") {
           return display.innerHTML = "error cant divide by 0";
       }
       result = number1 / number2;
       return result.toFixed(2)
   }


   clear.addEventListener("click",function(){
    debugger;
    display.innerHTML = "";
    array = [];
    array2 = [];
    num1 = ""
    num2 = ""
    operatorValue = ""
    lastKeyCode = 0;
    result = 0;

})
