## #Testing new appraoches to app

Made a resuable component to create the tabular form of input buttons using 'array', intead of HTML. 'array' contains all the values to be initialized by the component


<img width="556" alt="Screenshot 2024-02-22 at 4 01 47 PM" src="https://github.com/damnGajula/Calculator/assets/47356511/2e68d364-52e5-42f8-95a8-71fa57709f68">


Iterating through 'array' for 'length' 4 to create input buttons for a matrix of 4x4, with 'key' as 'rowIndex' and 'colIndex'

### Using Array for input, instead of string

<img width="445" alt="setResult(calculationResult);" src="https://github.com/damnGajula/Calculator/assets/47356511/ceaf1eb9-b4a1-4033-8649-03ad1303c74d">


<img width="445" alt="Screenshot 2024-02-22 at 4 19 17 PM" src="https://github.com/damnGajula/Calculator/assets/47356511/4eeb2605-46f0-4bf0-aa07-649a58339ea8">

### Things to be Rectified

1. If only given input "=", History gives value of "undefined"
2. If only given input ".", gives a runtime error for 'input.join'