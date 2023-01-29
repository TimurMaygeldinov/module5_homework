let num = prompt("Введите число");
if (typeof(+num) != 'number' || isNaN(+num) || num == ''){
  console.log('Упс, вы ошиблись')
} else if (num % 2 == 0){
  console.log('Чётное число')
} else {
  console.log('Нечётное число')
}
