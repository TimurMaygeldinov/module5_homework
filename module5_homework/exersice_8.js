let shopWear = new Map([

    ["jacket", "100$"],
  
    ["shoes", "150$"],
  
    ["shirt",    "50$"]
  
  ]);
//   for (let elem of shopWear){
//      let result = ('Ключ - ${elem[0]}, значение - ${elem[1]}')
//      console.log(result) Почему данный способ не работает и можно ли таким способом что то придумать?
//   }
for (let elem of shopWear){
    let result = ('Ключ - ' + elem[0] + ', значение - ' + elem[1])
    console.log(result)
  }