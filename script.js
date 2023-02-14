const displayResult = document.querySelector('#result span')
const displayCurrentCalc = document.querySelector('#current-calc')
var currentCalc = []
var actualNumbers = ''
const operators = []
var firstNumber
var secondNumber

let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
    button.addEventListener('click', function(){

        if(button.id === 'CE' || button.id === 'C'){
            actualNumbers = ''
            displayResult.innerText = actualNumbers
        }

        if(button.id === 'CE'){
            currentCalc = []
            displayCurrentCalc.innerText = currentCalc
        }

        else if(button.className === "number"){
            displayResult.innerHTML += button.id
            actualNumbers = displayResult.innerText
            console.log(actualNumbers) 
            
        }

        else if(button.className === "operator" || button.className === "tertiary operator"){
            currentCalc.push(actualNumbers)
            currentCalc.push(button.id)
        
            if(firstNumber === undefined){
                firstNumber = actualNumbers
            }
            else {
                secondNumber = actualNumbers
                let result
                firstNumber  = parseFloat(firstNumber)
                secondNumber = parseFloat(secondNumber)
                
                switch(button.id){
                    case '+' :
                        console.log('entrei no +')
                        return result = (firstNumber + secondNumber);
                    case '-' :
                        return result = (firstNumber - secondNumber);
                    case '*' :
                        return result = (firstNumber * secondNumber);
                    case '/' :
                        return result = (firstNumber / secondNumber);
                    case '%' :
                        return result = (firstNumber % secondNumber);
        
                }
                console.log('passou aqui')
                console.log(result)
                firstNumber = secondNumber.toString()
                secondNumber = undefined
            }
            console.log(firstNumber,secondNumber)
            displayCurrentCalc.innerText = currentCalc.join('')
            displayResult.innerText = ''
            console.log(currentCalc)
        }
        console.log(`Botão ${button.id} clicado`)
    })
})


// buttons.addEventListener('click', function(){

// })