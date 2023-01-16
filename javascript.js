/*1. Даны массив arr_1= [101, 202, 303, 404, 505] 

   и arr_2 = [606, 707, 808, 909] 

  создайте третий массив superArr который будет результатом "слияния" предыдущих двух.

  Результатом должен быть массив superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909];*/


let arr1 = [101, 202, 303, 404, 505];
let arr2 = [606, 707, 808, 909];
 let superArr = [...arr1, ...arr2];
  console.log(superArr);




/*
2. Метод `Math.min()` может принимать в параметры неограниченное кол-во чисел и возвращает наименьшее из них.


Например:
   Math.min(102, 1231, 29922, 1); // вернет 1

Передайте в этот метод элементы массива superArr (не сам массив, а его элементы)

Для этого вам надо раскрыть массив. */



 superArr .forEach(function(item){
   });

console.log(Math.min(...superArr));
   



/* 3. Дан объект obj со свойствами width: 300 и heigth: 550.
 Создайте новый объект, который будет копией obj, но будет иметь еще и метод area(), 
который должен вернуть произведение свойств width и height;*/


let obj ={
   width: 300,
   heigth: 550,
}
 let newObjet = {...obj}
newObjet.area = function(){
   console.log(this.width + this.heigth)
}
newObjet.area();






/* 4. Создайте функцию которая принимает произвольное количество параметров и возвращает их сумму. */



function f (...r){

   let ars = r.reduce(function(sum,item){
      return sum + item
   }, 0)
   return ars;
}
console.log(f(1434,234,4,3425,3254,5435,213,2421));




//                                                           DOM



                                    //Получить узел html

         console.log(document.documentElement);




                              //Пользуясь узлом document.body получить узлы <b> и <i>.
  


let body = document.body;
let i = body.firstElementChild.nextElementSibling;
let b = body.firstElementChild;

console.log(b);
console.log(i);








                        //Получить текстовый узел  интукод находящийся внутри тега <title>



console.log(document.head.firstElementChild);



                //   Удалить узел <b>**



                b.remove();