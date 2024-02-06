// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10%
// от введенного числа

// const number = prompt (`Введите число`)
//  console.log(number *10 / 100)



//Написать программу, которая получает два числа и выводит наименьшее


//  const number = +prompt("Введите число")
//  const number2 = +prompt ("Введите число") 

//  if(number > number2) 
//  {console.log(number2)
// } 
// else if(number < number2) 
// {
//     console.log(number)
// } 
// else {
//     console.log(number + " равно " + number2)}


    // Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
    //  ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

//     const number = +prompt ("Введите число")
//  if(number > 100) {
//      console.log("Больше 100")
//  }
//   else if(number < 100) {
//     console.log("Меньше 100")
// }
//   else {
//     console.log("Равно 100")
// }
 
// Написать программу, которая запрашивает у пользователя его имя и возраст(в годах) 
// и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, 
//     или ‘Hi, <name>’, если пользователь несовершеннолетний.


// const username = prompt("Как вас зовут?") 
// const userAge = prompt("Какого вы года рождения?")
// const year = 2024
//  if((year-userAge) >= 18) {
//     console.log(`Hello, ${username}`)
// } else if((year-userAge) < 18) {
//     console.log(`Hi, ${username}`)
//  }

// второй вариант
const username = prompt("Как вас зовут?") 
const userAge = prompt("Какого вы года рождения?")
const year = 2024
const resultat = year-userAge
 if(resultat >= 18) {
    console.log(`Hello, ${username}`)
} else if(resultat < 18) {
    console.log(`Hi, ${username}`)
 }

