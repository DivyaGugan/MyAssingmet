// 1. Create a function named that takes a number as a parameter. 
// 2. Declare and initialize the variable. 
// 3. Use a conditional statement to check if the number is greater than 0, to check 
// if the number is less than 0, and to handle the case when the number is zero.
//  4. Return the corresponding string value for each case. 
// 5. Call the function and print the result. 
function numberCheck(a){
    switch (true) {
        case a==0:
            return "The given number is zero."             
        case (a>0):
            return "The given number is positive number."           
        case (a<0):
            return "The number is negative"              
    
        default:
            break;
    }
}

console.log(numberCheck(-7))
