let userName = "Andrew"
let userAge = 21
let userPets = ["Cat","Dog"]
var userBalance = 1200
const EVERY_DAY_SPENDING= 15.3
var everyDaySpendingPerPet = 2.4
var daysSurvived = 0

console.log("User Name", userName)
console.log("User Age", userAge)
console.log(userBalance,everyDaySpendingPerPet,daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}
console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    for(let i = 0; i < name.length;i++){
        console.log(name[i])
    }
}

function nameVertical2(name) {
    let arr = name.split``
    for(x of arr){
        console.log(x)
    }
}
nameVertical("Sarah")
nameVertical2("Kevin")

returnResponse = n=>{
    response = "invalid"
    switch (true) {
        case n<200:
            response="Informational"
            break
        case n<300:
            response="Successful"
            break
        case n<400:
            response="Redirection"
            break
        case n<500:
            response="Client Error"
            break
        case n<600:
            response="Server Error"
            break
    }
    return response
}

console.log(returnResponse(200))

function compareVariables(var1, var2) {
    if(var1 === var2){
        console.log("The two variables have the same value and type")
    }else if(var1==var2){
        console.log("The two variables have the same value but not the same type")
        console.log("the type of var1 is "+ typeof var1)
        console.log("the type of var2 is "+ typeof var2)
    }else{
        console.log("The two variables do not have the same value nor the same type")
    }
}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables ("2", 2);

fibonacci = n=>{
    var a=0
    var b=c=1
    var arr=[]
    for(;a<=n;){
        arr.push(a)
        console.log(a)
        a=b
        b=c
        c=a+b
    }
    console.log(...arr)
}

fibonacci(100)

let courses = ["WAD", "SoftwareEngineering", "WebSecurity", "OOP"];
let i = 0;

for (;;) {
    if(courses[i]==undefined){
        break
    }else{
        console.log(courses[i])
    }
    i++
}