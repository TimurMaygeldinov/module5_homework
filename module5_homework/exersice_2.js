let x ;
if(typeof(x) == 'number'){
  console.log(x + ' - число')
}
else if(typeof(x) == 'string'){
  console.log(x + ' - строка')
}
else if(typyof(x) == 'boolean'){
  console.log(x + ' - логическое выражение')
}
else{
  console.log('Тип x не определён')
}