// 8. Sort the array in ascending and descending without built-in methods.
function sortAscending(arr, n)  
{  
    let key, j;  
    for (let i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  

        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}

function sortDescending(arr, n)  
{  
    let key, j;  
    for (let i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  

        while (j >= 0 && arr[j] < key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}

let arrToSort1 = [57, 34, 66, 79, 28, 13, 84, 48, 11, 90];
let arrToSort2 = [67, 16, 64, 69, 32, 42, 21, 88, 39, 99];

sortAscending(arrToSort1, arrToSort1.length);
sortDescending(arrToSort2, arrToSort2.length);

console.log(`Ascending order: ${arrToSort1}`, `\nDescending order: ${arrToSort2}`);