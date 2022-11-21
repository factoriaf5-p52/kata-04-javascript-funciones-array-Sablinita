/* Encuentra el máximo 1*/

export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

/* Encuentra la más larga 2*/

export function findLongestWord(){}





/*Calcula la suma de un array 3*/


export function sumArray(array){
    let addition = 0; 
    for (let i=0; i<array.length; i++){
     addition = array[i] + addition;
    }
    return addition;
}



/*Calcula el promedio de un array 4*/


export function averageNumbers(list){

    const additionList = list.reduce(function(valuesAc = 0, newValues){
        return valuesAc + newValues;
});

    const average = additionList / list.length;

    return average;
    }

  
  
/*Calcula el promedio de un palabra 5*/

export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}
