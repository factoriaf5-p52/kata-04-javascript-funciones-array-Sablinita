/* Encuentra el máximo 1*/

export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

/*otra alternativa:
export function maxOfTwoNumbers(num1,num2){
    return Math.max(num1,num2);
}*/


/* Encuentra la más larga 2*/

export function findLongestWord(words){

let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
        if(words.length ==0){
        return undefined;
    }
    return longestWord;
}


/*Calcula la suma de un array 3*/


export function sumArray(array){
    let addition = 0; 
    for (let i=0; i<array.length; i++){
     addition = array[i] + addition;
     //addition += array[i];
    }
    return addition;
}


/*Calcula el promedio de un array 4*/

export function averageNumbers(list) {
    if(!list.length) return undefined
    // const additionList = sumArray(list)
    return sumArray(list)/list.length
 }

  
/*Calcula el promedio de un palabra 5*/

export function averageWordLength(array) {
    const newArray = array.map((element)=>{        return element.length
   })
      return sumArray(newArray)/newArray.length
 }
    

/*Elimina los duplicados y devuelve el resultado como un nuevo array 6*/

export function uniquifyArray

/*Función doesWordExist*/

export function doesWordExist(newArray){
    let  newArray = "true" || "false";
    for (let i=0; i < newArray.elements.length; i++) {
        let element = newArray[i];
        if(element = newArray[i])
        return "true"
    }  if (element != newArray[i])
        return "false"
}


export function howManyTimes(){}
export function greatestProduct(){}



