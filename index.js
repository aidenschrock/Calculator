 let display = document.getElementById("display")

 function add(a, b) {
     reset()
     pretotal = a + b
     total = Math.round(pretotal * 100) / 100
     display.textContent += total
     storage.numbers[0] = total

 }

 function subtract(a, b) {
     reset()
     pretotal = a - b
     total = Math.round(pretotal * 100) / 100
     display.textContent += total
     storage.numbers[0] = total

 }

 function multiply(a, b) {
     reset()
     pretotal = a * b
     total = Math.round(pretotal * 100) / 100
     display.textContent += total
     storage.numbers[0] = total

 }

 function divide(a, b) {
     reset()
     if (b == 0) {
         display.textContent = "don't be rood"
     } else {
         pretotal = a / b
         total = Math.round(pretotal * 100) / 100
         display.textContent += total
         storage.numbers[0] = total
     }
 }

 function operate() {
     if (storage.operator !== undefined) {
         storage.numbers[1] = display.textContent
         a = Number(storage.numbers[0])
         b = Number(storage.numbers[1])
         switch (storage.operator) {
             case '+':
                 add(a, b)
                 break;
             case '-':
                 subtract(a, b)
                 break;
             case '*':
                 multiply(a, b)
                 break;
             case '/':
                 divide(a, b)
         }
     } else {
         reset()
     }
 }

 let storage = {
     numbers: [],
     operator: ''
 }


 function store(btnValue) {

     if ((display.textContent.includes('.')) && (btnValue === '.')) {

     } else {
         display.textContent += btnValue
     }
 }

 function storeOperator(btnValue) {
     storage.numbers[0] = display.textContent;
     storage.operator = btnValue
     display.textContent = ''

 }

 function reset() {
     storage = {
         numbers: [],
         operator: ''
     }
     display.textContent = ''
 }

 function backspace() {
     string = display.textContent
     newString = string.slice(0, -1)
     display.textContent = newString
 }

 function keyPressHandler(event) {
     console.log(event.key)
     key = (event.key)
     if ((key >= 0) && (key <= 9) || (key === '.')) {
         store(event.key)
     } else if ((key === '+') || (key === '-') || (key === '/') || (key === '*')) {
         storeOperator(event.key)
     } else if ((key === '=') || (key === 'Enter')) {
         operate()
     } else if ((key === 'c') || (key === 'C')) {
         reset()
     } else if ((key === 'Backspace') || (key === 'Delete')) {
         backspace()
     }
 }


 window.addEventListener('keydown', keyPressHandler)