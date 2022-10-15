const userAnswer = prompt("Как Вас зовут?");
let userName = userAnswer
userName = userName.trim()
userName = userName.toUpperCase()

const userAnswer2 = prompt("Сколько Вам лет?");
let userAge = userAnswer2
userAge = userAge.trim()
userAge = Number(userAge)
// console.log(typeof userAge)
alert(" Вас зовут " + userName + " и Вам " + userAge + " лет.")