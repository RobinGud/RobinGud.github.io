console.log("xxx")

// 1) Создать массив с числами сгенерированные рандомно, массив length >= 1000

let arr = [];
let leng = 1000;
for (let i = 0; i < leng; i++) {
    arr.push(Math.floor(Math.random() * 1001));
}

 console.log(arr);

// 2) Разработать функции поиска минимального, максимального и медианы массива - соответсвенно найти для 1.

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < leng; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}

console.log("Min = " + min);
console.log("Max = " + max);
console.log("Median = " + (max - min) / 2);

// 3) Реализовать алгоритм Быстрой сортировки на языке JavaScript. Применить для 1.

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    if (arr.length > 1) {
        let index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

let result = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:");
console.log(result)

// 4) Подсчитать и отобразить количество используемых тегов на странице вашего портфолио. Например: а - 10, div - 4, и т.д.

document.addEventListener('DOMContentLoaded', loadDOM);

function loadDOM() {
    // console.log("количество тегов li: " + document.getElementsByTagName('li').length);
    // console.log("количество тегов div: " + document.getElementsByTagName('div').length);
    // console.log("количество тегов p: " + document.getElementsByTagName('p').length);
    let items = document.getElementsByTagName("*");
    let tags = [];
    for (let i = 0; i < items.length; i++) {
        tags[i] = items[i].tagName;
    }
    let uniqueTags = [...new Set(tags)];
    let tagsCount = "";
    for (let i = 0; i < uniqueTags.length; i++) {
        tagsCount += uniqueTags[i] + ": " + document.getElementsByTagName(uniqueTags[i]).length + "\n";
    }
    
    let tagsP = document.getElementById("tags")
    tagsP.innerHTML = tagsCount
}