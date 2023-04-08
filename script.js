const displayResult = document.querySelector('#result span')
const displayCurrentCalc = document.querySelector('#current-calc')
var currentCalc = []
var actualNumbers = ''
var firstNumber
var secondNumber
var result

let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
    button.addEventListener('click', function(){

        if(button.id === 'C'){
            displayResult.innerText = ''
        }

        else if(button.id === 'CE'){
            displayResult.innerText = ''
            currentCalc = []
            displayCurrentCalc.innerText = currentCalc
            firstNumber = undefined
            secondNumber = undefined
        }

        else if(button.className === "number"){
            displayResult.innerHTML += button.id
            actualNumbers = displayResult.innerText
            console.log(actualNumbers) 
            
        }

        else if(button.className === "operator" || button.className === "tertiary operator"){
            if(typeof(currentCalc[currentCalc.length - 1]) !== Number){
                currentCalc.push(displayResult.innerText)
            }
            currentCalc.push(button.id)
        
            if(firstNumber === undefined){
                firstNumber = displayResult.innerText
                displayResult.innerText = ''
            }

            else {
                secondNumber = displayResult.innerText
                firstNumber  = parseFloat(firstNumber)
                secondNumber = parseFloat(secondNumber)
                
                if (currentCalc[currentCalc.length -3] === '+'){
                    result = (firstNumber + secondNumber)
                }
                if (currentCalc[currentCalc.length -3] === '-'){
                    result = (firstNumber - secondNumber)
                }
                if (currentCalc[currentCalc.length -3] === '*'){
                    result = (firstNumber * secondNumber)
                }
                if (currentCalc[currentCalc.length -3] === '/'){
                    result = (firstNumber / secondNumber)
                }
                if (currentCalc[currentCalc.length -3] === '%'){
                    result = (firstNumber % secondNumber)
                }

                firstNumber = result.toString()
                secondNumber = undefined
                displayResult.innerText = ''
            }
        }

        else if(button.id === "=") {

                secondNumber = displayResult.innerText
                currentCalc.push(secondNumber)
                displayResult.innerText = ''

                firstNumber  = parseFloat(firstNumber)
                secondNumber = parseFloat(secondNumber)

                if (currentCalc[currentCalc.length -2] === '+'){
                    console.log("entrou no +")
                    result = (firstNumber + secondNumber)
                }

                else if (currentCalc[currentCalc.length -2] === '-'){
                    console.log("entrou no -")
                    result = (firstNumber - secondNumber)
                }

                else if (currentCalc[currentCalc.length -2] === '/'){
                    console.log("entrou no /")
                    result = (firstNumber / secondNumber)
                }
                
                else if (currentCalc[currentCalc.length -2] === '*'){
                    result = (firstNumber * secondNumber)
                }

                else if (currentCalc[currentCalc.length -2] === '%'){
                    result = (firstNumber % secondNumber)
                }
                currentCalc.push(button.id)
                currentCalc.push(result)
                firstNumber = result.toString()
                secondNumber = undefined
                displayResult.innerText = result.toString()
        }

        displayCurrentCalc.innerText = currentCalc.join(' ')
        console.log(`Botão ${button.id} clicado`)
    })
})