//Dyamic typing -> js mai static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kar skte ho kyuki yaha par dynamic data types hai

// a = 12 then a = true or jo man kare bo rakh skte hai

// BMI calculator 
function BMI(weight , height){
    return weight/(height*height);
}
// console.log(BMI(55 , 1.1).toFixed(2))

function discountCalculator(discount){
    return function(price){
        return price - price*(discount/100)
    }
} 
let ten = discountCalculator(10);
let twenty = discountCalculator(20);

// console.log(ten(1200))
// console.log(twenty(1200))

// counter function

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter();
// console.log(d())
// console.log(d())
// console.log(d())
// console.log(d())

// IIFE

(function (){
    const pass = "Prince9294@#";
    // console.log(pass)
})()
