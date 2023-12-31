const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

moveText(50);
//TODO:
/*
NavBar
Banner
Background


Improve tree animation:
#D47C7Craw only new nodes
color new nodes
show sized 
colors
show animations
animate rotations

Add heap animation to heap sort

*/


/*

		<div id="nav-side-bar-element"><a>Bubble Sort</a></div>
		<div id="nav-side-bar-element"><a>Merge Sort</a></div>
		<div id="nav-side-bar-element"><a>Quick Sort</a></div>
		<div id="nav-side-bar-element"><a>Heap Sort</a></div>
		<div id="nav-side-bar-element"><a>Shell Sort</a></div>
		<div id="nav-side-bar-element"><a>Insertion Sort</a></div>
		<div id="nav-side-bar-element"><a>Shell Sort</a></div>
		<div id="nav-side-bar-element"><a>Tree Sort</a></div>
		<div id="nav-side-bar-element"><a>Stooge Sort</a></div>
		<div id="nav-side-bar-element"><a>Bogo Sort</a></div>

*/


/*
async function BingoSort(){

}

async function GnomeSort(){
    
}*/


/*
BubbleSort
GnomeSort
BingoSort
SelectionSort
InsertionSort
MergeSort
TreeSort
QuickSort
PancakeSort
HeapSort
CountingSort
Counting Sort (in Place)
PiegeonHoleSort
*/

/*
BucketSort
RadixSort -- (normal, special one for numbers)
        -- organize the 1 digit numbers, then the 2 digit numbers, then ... n digit numbers.
        -- radix sort each of the ranges
CountingSort -- (normal, in-place)
Pigeonhole sort


CocktailShakerSort
ShellSort
StoogeSort
BogoSort



Pigenhole sort
CombSort
Pigeonhole sort
More?
*/


//..
//b/*
/*
async function reverseArray(arr, start, end, width, margin, waitTime, color){
    for(let i = start; i <= end; i++){
        await Swap(arr, i, end, width, margin, waitTime, color);
        if(i == Math.ceil((end-start/2))){
            return arr;
        }
    }
}*/

/*
async function pancakeSort2(arr, width, margin, waitTime, color){
    //technically pancake sort goes the opposite way but this works too


    //find the minimum, flip on the minimum
    for(let i = arr.length-1; i >= 0; i--){
        let maximum = i;
        for(let j = i; j >= 0; j--){
            if(parseInt(arr[j].style.height) > parseInt(arr[maximum].style.height)){
                maximum = j;
            }
        }
        await reverseArray(arr, i, maximum, width, margin, waitTime, color);
    }
}*/

//async function

function slideSideBar(){
	var navBar = document.getElementById("Nav-Side-Bar");
	var mainContent = document.getElementById("Main-Content");
	var arraySpacer = document.getElementById("Array-1-Spacer-1");
	var titleBarButtons = document.getElementById("Title-Bar-Buttons");
	var titleBarTitles = document.getElementById("Title-Bar-Titles");
	if(navBar.style.width === "15%"){
		console.log("called");
		titleBarButtons.style.width = "25%";
		titleBarTitles.style.left = "25%";
		titleBarTitles.style.width = "75%";
		navBar.style.width = "25%";
		mainContent.style.left = "25%";
		mainContent.style.width = "75%";
	}
	else{
		titleBarButtons.style.width = "15%";
		titleBarTitles.style.left = "15%";
		titleBarTitles.style.width = "85%";
		navBar.style.width = "15%";
		mainContent.style.left = "15%";
		mainContent.style.width = "85%";

	}
}


async function addToCountArr(origArr, countArr, i, j){
    //translate it down
    //arr[i].style.translate = `${(parseInt(arr[i].style.translate))+5}px`
    //translate it down
    origArr[i].style.height = "0px";
    c[i].style.height = `${(parseInt(arr[i].style.height))+5}px`;
}

async function initCountArr(arr){
    //init a new array
}

async function removeFromCountArr(arr, i){
    origArr, countArr, i, j
}

async function CountingSort(arr, width, margin, waitTime, color){
    //init an array to store the counts
    //Go through each element addCountArr(arr, i)
    //Empty 
}




function calcLeft(i){
    return 2*i + 1;
}

function calcRight(i){
    return 2*i + 2;
}

async function maxHeapify(arr, i, size, width, margin, waitTime, color){
    let left = calcLeft(i);
    let right = calcRight(i);
    let largest = i;
    if(left <= size && parseInt(arr[left].style.height) > parseInt(arr[i].style.height)){
        largest = left;
    }
    if(right <= size && parseInt(arr[right].style.height) > parseInt(arr[largest].style.height)){
        largest = right;
    }
    if(largest != i){
        await Swap(arr, i, largest, width, margin, waitTime, color);
        arr[i].style.backgroundColor = color;
        arr[largest].style.backgroundColor = color;
        await maxHeapify(arr, largest, size, width, margin, waitTime, color)
    }
}

async function buildMaxHeap(arr, width, margin, waitTime, color){
    let size = arr.length-1;
    for(let i = Math.floor(size/2); i >= 0; i--){
        await maxHeapify(arr, i, size, width, margin, waitTime, color);
    }
}

async function heapSort(arr, width, margin, waitTime, color){
    await buildMaxHeap(arr, width, margin, waitTime, color);
    let size = arr.length-1;
    let i = size;
    while(i >= 0){

        await Swap(arr, i, 0, width, margin, waitTime, color)
        arr[i].style.backgroundColor = color;
        arr[0].style.backgroundColor = color;
        i-=1;
        await maxHeapify(arr, 0, i, width, margin, waitTime, color);
    }
}



async function reverseArray(arr, start, end, width, margin, waitTime, color){
    let i = start; 
    let j = end;
    while (i < j){
        await Swap(arr, i, j, width, margin, waitTime, color);
        j -= 1;
        i += 1;
    }
    return arr;
}


async function pancakeSort2(arr, width, margin, waitTime, color){
    //find the minimum, flip on the minimum
    for(let i = arr.length-1; i >= 0; i--){
        let maximum = i;
        for(let j = i; j >= 0; j--){
            if(parseInt(arr[j].style.height) > parseInt(arr[maximum].style.height)){
                maximum = j;
            }
        }
        await reverseArray(arr, maximum, i, width, margin, waitTime, color);
    }
}

async function pancakeSort(arr, width, margin, waitTime, color){
    //technically pancake sort goes the opposite way but this works too


    //find the minimum, flip on the minimum
    for(let i = 0; i < arr.length; i++){
        let minimum = i;
        for(let j = i; j < arr.length; j++){
            if(parseInt(arr[j].style.height) < parseInt(arr[minimum].style.height)){
                minimum = j;
            }
        }
        await reverseArray(arr, i, minimum, width, margin, waitTime, color);
    }
}



//change the sorted arrays into an increasing darker shade of green

async function merge(arr, start, middle, end, originalSize, width, margin, waitTime, depthFactor){
    let i = start;
    let j = middle;
    let res = [];

    while(i < middle && j < end){
        if(parseInt(arr[i].style.height) <= parseInt(arr[j].style.height)){
            res.push(arr[i])
            i += 1;
        }
        else{
            res.push(arr[j])
            j += 1;
        }
        res[res.length-1].style.backgroundColor = "#D47C7C" //.style.transform 
        await wait(waitTime);
        res[res.length-1].style.backgroundColor = "#3E332E" //.style.transform 
        res[res.length-1].style.transform = `translate(${(width+margin)*(res.length-1)}px, ${depthFactor}px)`;
    }
    if(i == middle){
        while(j < end){
            res.push(arr[j])
            j += 1;
            res[res.length-1].style.backgroundColor = "#D47C7C" //.style.transform 
            await wait(waitTime);
            res[res.length-1].style.backgroundColor = "#3E332E" //.style.transform //formerly light-green
            res[res.length-1].style.transform = `translate(${(width+margin)*(res.length-1)}px, ${depthFactor}px)`;
        }
    }
    if(j == end){
        while(i < middle){
            res.push(arr[i])
            i += 1;
            res[res.length-1].style.backgroundColor = "#D47C7C" //.style.transform 
            await wait(waitTime);
            res[res.length-1].style.backgroundColor = "#3E332E" //.style.transform 
            res[res.length-1].style.transform = `translate(${(width+margin)*(res.length-1)}px, ${depthFactor}px)`;
        }
    }
    //bastard line
    for(let x = 0; x < res.length; x++){
        //light green -> #D47C7C -> white
        //res[res.length-1].style.backgroundColor = "#D47C7C" //.style.transform 
        await wait(waitTime);
        arr[x+start] = res[x];
        arr[x+start].style.transform = `translate(${(start+x)*(width+margin)}px)`

        arr[x+start].style.backgroundColor = genColor(res.length, originalSize);//genColor(res.length, originalSize);
        //write a function to determine the darkness of green based on the size of res
        //(how close the thing is to being sorted)


        //maybe change to light green? For partially sorted?
    }
    //] <- important
    return res
}

function genColor(arrSize, originalSize){
    let val = Math.ceil(arrSize);
    if(val <= 1){
        return "#283240";
    }
    else if( 1 < val && val <= 2){
        return "#242C36";
    }
    else if(2 < val && val  <= 4){
        return "#20242F";
    }
    else if( 1 < val && val <= 8){
        return "#1C212B";
    }
    else if(8 < val && val <= 16){
        return "#181F25";
    }
    else if(16 < val && val  <= 32){
        return "#141A20";
    }
    else if(32 < val && val  <= 64){
        return "#101518";
    }
    //(64 < val && val  <= 128)
    else{
        return "#0C1010";
    }
    //return "green"
}


function hoveringOverNavBar(){
	var navBar = document.getElementById("nav-side-bar");
	navBar.style.right = "80%";
}

function notHoveringOverNavBar(){
	var navBar = document.getElementById("nav-side-bar");
	navBar.style.right = "90%";
}

async function uniqueArray(array, length, width, margin, waitTime, color, border, heightFactor){
    for(var i = 0; i < length; i++){
        //await wait(waitTime);
        var el = document.createElement("div");
        el.setAttribute("id", "array-1-element");
        //var value = Math.ceil(300 /(i+1));
        //./var value = Math.ceil(Math.random()*100);
        el.classList.add("array-element");
        el.style.height = `${i * heightFactor}px`;
        el.style.width = `${width}px`;
        el.style.backgroundColor = color;
        if(border){
            el.style.borderStyle = "solid";
            el.style.borderColor = "black";
        }
        el.style.transform = `translate(${((width+margin)*i)}px)`;
        array.appendChild(el);
        //console.log(el.style)
    }
}

async function Swap2(arr, index1, index2, waitTime, color){
    let transform = arr[index1].style.transform;

    let el = arr[index1];

    arr[index1].style.backgroundColor = "#D47C7C";
    arr[index2].style.backgroundColor = "#D47C7C";

    await wait(waitTime);

    arr[index1] = arr[index2];
    arr[index2] = el;

    arr[index2].style.transform = arr[index1].style.transform;
    arr[index1].style.transform = transform;

    await wait(waitTime);

    arr[index1].style.backgroundColor = color;
    arr[index2].style.backgroundColor = color;
}

//arr, index1, index2, width, margin, waitTime, color
async function shuffleArrayStartToEnd(array, waitTime){

    //await Swap(array, 0, 1, 1000, "blue")

    for(let i = 0; i < array.length; i++){
        let j = Math.ceil(Math.random() * (array.length-1 - i) + i);
        let clr = array[i].style.backgroundColor;
        //console.log(j);
        await Swap2(array, i, j, waitTime, clr)
        //array[i].style.color = clr1;
        //array[j].style.color = clr2;
        // -> important */
    }

}

async function randomArray(array, length, width, margin, waitTime, color, border, min, max, heightFactor){
    for(var i = 0; i < length; i++){
        //await wait(waitTime);
        var el = document.createElement("div");
        el.setAttribute("id", "array-1-element");
        //var value = Math.ceil(300 /(i+1));
        var value = Math.ceil(Math.random() * (max - min) + min);
        el.classList.add("array-element");
        el.style.height = `${value * heightFactor}px`;
        el.style.width = `${width}px`;
        el.style.backgroundColor = color;
        if(border){
            el.style.borderStyle = "solid";
            el.style.borderColor = "black";
        }
        el.style.transform = `translate(${((width+margin)*i)}px)`;
        array.appendChild(el);
        //console.log(el.style)
    }
}

async function mergeSort(arr, start, end, originalSize, width, margin, waitTime, depthFactor){
    let middle = Math.floor((end-start)/2)+start;
    if(end-start > 1){
        await mergeSort(arr, start, middle, originalSize, width, margin, waitTime, depthFactor);
        await mergeSort(arr, middle, end, originalSize, width, margin, waitTime, depthFactor);
        await merge(arr, start, middle, end, originalSize, width, margin, waitTime, depthFactor);
    }
}
//(0, 0, 0) super fucking important maybe not super or fucking
//blanchedalmond also^

async function mergeSortHelper(array, start, end, originalSize, width, margin, waitTime, depthFactor){
    await mergeSort(array, start, end, originalSize, width, margin, waitTime, depthFactor);
    //await sorted(x);
}

async function clearArray(elementID){
	let countArr = document.getElementById("count-arr");
	countArr.innerHTML = '';
	let svgTree = document.getElementById("svg-tree");
	svgTree.innerHTML = '';
	
	var globalArray = document.querySelectorAll(elementID);
	for(let i = 0; i < globalArray.length; i++){
		globalArray[i].remove();
	}
}



async function sortOnID(sortingID, clearArr, navBarId){	
	//something fancy on click
	let countArr = document.getElementById("count-arr");
	if(clearArr){
		countArr.innerHTML = '';
		await clearArray("#array-1-element");
	}
	var heightFactor = 1;
	var arrayID = "array-1";
	var elementID = "#array-1-element";
	var length = 250;
	var width = 3;
	var margin = 0;
	var generateWaitTime = 0;
	var sortWaitTime = 10;
	var color = "#C4D7E0";
	var withBorder = false;
	var minArrSize = 1;
	var maxArrSize = 100;
	var depthFactor = 100;

	//if count array has elements - clear it!
	
	switch(sortingID){
		case 1:{
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			break;
		}
		case 2:{
		    await uniqueArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, heightFactor);
			break;
		}
		case 3:{
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);
		    await shuffleArrayStartToEnd(x, sortWaitTime);
			break;
		}
		case 4:{
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);
			await reverseArray(x, 0, x.length-1, width, margin, sortWaitTime, color);
			break;
		}
		case 5:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
		    var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await mergeSortHelper(x, 0, x.length, x.length, width, margin, sortWaitTime, depthFactor);
			await sorted(x);
			break;
		}
		case 6:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await BubbleSort(x, width, margin, sortWaitTime, color);
			await sorted(x);
			break;
		}
		case 7:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await selectionSort(x, width, margin, sortWaitTime, color); 
			await sorted(x);
			break;
		}
		case 8:	{
			await clearArray("#array-1-element");
			await uniqueArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await shuffleArrayStartToEnd(x, sortWaitTime);
			await treeSort(x, sortWaitTime);
			await sorted(x);
			break;
		}
		case 9:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await pancakeSort2(x, width, margin, sortWaitTime, color);
			await sorted(x);
			break;
		}
		case 10:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await heapSort(x, width, margin, sortWaitTime, color);
			await sorted(x);
			break;
		}
		case 11:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await GnomeSort(x, width, margin, sortWaitTime, color);
			await sorted(x);		
			break;
		}
		case 12:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await BingoSort(x, width, margin, sortWaitTime, color);
			await sorted(x);
		
			break;
		}
		case 13:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await combSort(x, width, margin, sortWaitTime, color);
			await sorted(x);
		
			break;
		}
		case 14:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await countSort(x, width, margin, sortWaitTime, color, heightFactor, countArr, depthFactor);
			await sorted(x);	
			break;
		}
		case 15:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await countSortInPlace(x, width, margin, sortWaitTime, color, heightFactor, countArr);
			await sorted(x);		
			break;
		}
		case 16:	{
			console.log("not yet implemented");
			//var globalArray = document.querySelectorAll(elementID);
			//var x = copyArray(globalArray);	
			//not yet implemented
			//( important
			//await PigeonholeSort(x, width, margin, sortWaitTime, color);
			//await sorted(x);
			break;
		}
		case 17:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await insertionSort(x, width, margin, sortWaitTime, color);   
			await sorted(x);
			break;
		}
		case 18:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await quick_sort(x, 0, x.length-1, width, margin, sortWaitTime, color);
			await sorted(x);
			break;
		}
		case 19:	{
			await clearArray("#array-1-element");
			await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize, heightFactor);
			var globalArray = document.querySelectorAll(elementID);
			var x = copyArray(globalArray);	
			await BucketSort(x, width, margin, sortWaitTime, color);			
			await sorted(x);
			break;
		}
	}
}









async function generateAndSort(arrayID, elementID, length, width, margin, generateWaitTime, sortWaitTime, color, withBorder, minArrSize, maxArrSize){
    
    //await randomArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder, minArrSize, maxArrSize);
    await uniqueArray(document.getElementById(arrayID), length, width, margin, generateWaitTime, color, withBorder);
    
    var globalArray = document.querySelectorAll(elementID);
    var x = copyArray(globalArray);
    //await reverseArray(x, 0, x.length-1, width, margin, sortWaitTime, color);
    await shuffleArrayStartToEnd(x, sortWaitTime);

    //var gARR = document.getElementById("array-1")
    //await mergeSortHelper(x, 0, x.length, x.length, width, margin, sortWaitTime, color);
    //await BubbleSort(x, width, margin, sortWaitTime, color);
    //await  selectionSort(x, width, margin, sortWaitTime, color); 
    
	await treeSort(x, sortWaitTime);
    
    //await pancakeSort2(x, width, margin, sortWaitTime, color);
    //await heapSort(x, width, sortWaitTime, color);
    //await GnomeSort(x, width, margin, sortWaitTime, color);
    //await BingoSort(x, width, margin, sortWaitTime, color);
    //await combSort(x, width, margin, sortWaitTime, color);
    //await countSort(x, width, margin, sortWaitTime, color);
    //await countSortInPlace(x, width, margin, sortWaitTime, color);
    //await PigeonholeSort(x, width, margin, sortWaitTime, color);
    //await  insertionSort(x, width, margin, sortWaitTime, color);   
    //await sorted(x, sortWaitTime);
    //await(quick)
	//await quick_sort(x, 0, x.length-1, width, margin, sortWaitTime, color);
    //await partition()
    //checkArrayHeights(x);
    //await BucketSort(x, width, margin, sortWaitTime, color);
	
	
	
	
    await sorted(x)
}
//id of array, num of elements/array length, element width, margin, generation wait time, sorting wait time, color, border flag (true or false) yay or nay
//generateAndSort("array-1", "#array-1-element", 250, 3, 0, 0, 10, "aquamarine", false, 0, 100);
//generateTextArray2(50);
//console.log("t", getTopTextArray());
//console.log("b", getBottomTextArray());
//initializeCountArr(20);
//let arr = getCountArray();
//arr[0].innerHTML = "10"
//console.log(arr);
//x[0] = x[1];

//generateAndSort("array-1", "#array-1-element",250, 3, 0, 0, 10, "aquamarine", false, 1, 100);
//sortOnID(1);
//checkArray(globalArray, x);
//checkArrayHeights(x);

function checkArrayHeights(array){
    //console.log("here", array.length);
    for(var i = 1; i < array.length; i++){
        if(parseInt(array[i].style.height) < parseInt(array[i-1].style.height)){
            throw new Error("heights are wrong");
        }
        //console.log("called");
    }
}

function checkArray(array1, array2){
    for(var i = 0; i < array1.length; i++){
        if(array1[i].style.height != array2[i].style.height){
            throw new Error();
        }
        //console.log("called");
    }
}



function copyArray(array){
    var resultArray = [];
    for(var i = 0; i < array.length; i++){
        resultArray.push(array[i]);
    }
    return resultArray;
}

function translateTranslate(translateStr){
    //"translate(num px)"
    let num = "";
    for(let i = 0; i < translateStr.length; i++){
      let currChar = translateStr.charAt(i)
      if(currChar >= "0" && currChar <= "9" ){
        num+=currChar;
      }
    }
    return num;
}

async function sorted(array, waitTime){
    for(var i = 0; i < array.length; i++){
        array[i].style.backgroundColor = "#0C1010";
        await wait(waitTime);
    }
}


/*
function updateArray(tempArr, start, end){
    var el = document.createElement("div");
    el.setAttribute("id", "array-1-element");
    el.classList.add("array-element");
    globalArray.insertBefore(el, globalArray[end-1].nextSibling);
    for(var i = start; i < end; i++){
        globalArray.removeChild(globalArray[i]);
    }
    //Marker
    //...X
    //marker was at globalArray[end-1].nextSibling
    //market is at something like globalArray[end-removedElements]
    for(var i = 0; i <= tempArr.length-1; i++){
        //index of temp array
        var tempIndex = tempArr.length-1-i;
        //adjust this baesed on marker
        var arrIndex = 1;
        globalArray.insertBefore(tempArr[tempIndex], globalArray[i+1]);
    }

    globalArray.removeChild(el);
    
    globalArray = document.querySelectorAll("#array-1-element");
}


*/




/*
Pass width and margin instead of using 30px/40px
Pick better green colors
Change bubble sort
Clean up script.js
*/


/*
Step-by-step pannel
next step, previous
*/

async function Swap(arr, index1, index2, width, margin, waitTime, color){
    let transform = arr[index1].style.transform;
    //console.log(transform);


    let el = arr[index1];

    arr[index1].style.backgroundColor = "#D47C7C";
    arr[index2].style.backgroundColor = "#D47C7C";

    await wait(waitTime);

    //update the order in the array

    arr[index1] = arr[index2];
    arr[index2] = el;

    //Update the order graphically

    //arr[index1].style.transform = `translate(${((width+margin)*index1)}px)`;
    //arr[index2].style.transform = `translate(${((width+margin)*index2)}px)`;

    /*
    console.log(`translate(${((width+margin)*index1)}px)`)
    console.log(transform);
    console.log("");
    console.log(arr[index2].style.transform)
    console.log(arr[index1].style.transform)
    console.log(`translate(${((width+margin)*index2)}px)`)*/

    arr[index2].style.transform = arr[index1].style.transform;
    arr[index1].style.transform = transform;
	

    //throw new Error();

/*
    arr[index1].style.transform = transform;
    arr[index2].style.transform = arr[index2].style.transform;
*/

    await wait(waitTime);

    arr[index1].style.backgroundColor = color;
    arr[index2].style.backgroundColor = color;
	
	
	//other sorting algos swap consecutive things, maybe heap sort doesn't so the colors are different
	
}

function getHeight(arr, index){
    return parseInt(arr[index].style.height, 10);
}

async function BubbleSort(arr, width, margin, waitTime, color){

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length-i-1; j++){
            //console.log("called");
            var b1Val = getHeight(arr, j);
            var b2Val = getHeight(arr, j+1);
            //arr[j].style.backgroundColor = "black";
            //arr[j+1].style.backgroundColor = "black";
            await wait(waitTime);
            if(b1Val > b2Val){
                //c <- important
                //arr[j+1].style.backgroundColor = color;//what is this?
                await Swap(arr, j, j+1, width, margin, waitTime, color);
                //Update blocks, because their order has changed
            }
        }
        arr[j].style.backgroundColor = "#79f883";
    }
}

/*async function Swap(arr, index1, index2, width, margin, waitTime, color){
    let transform = arr[index1].style.transform;
    //console.log(transform);


    let el = arr[index1];

    arr[index1].style.backgroundColor = "#D47C7C";
    arr[index2].style.backgroundColor = "#D47C7C";

    //console.log(index1, index2);

    //throw new Error();

    await wait(waitTime);

    arr[index1] = arr[index2];
    arr[index2] = el;

    arr[index2].style.transform = arr[index1].style.transform;
    arr[index1].style.transform = transform;

    await wait(waitTime);

    arr[index1].style.backgroundColor = color;
    arr[index2].style.backgroundColor = color;
}*/


async function selectionSort(arr, width, margin, waitTime, color){
    //sorting in place?
    //<=? >=
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i; j < arr.length; j++){
            //arr[j].style.backgroundColor = "black";
            //arr[minIndex].style.backgroundColor = "black";
            //await wait(waitTime);
            if(parseInt(arr[j].style.height) < parseInt(arr[minIndex].style.height)){
                //arr[j].style.backgroundColor = "#D47C7C";
                minIndex = j;
                //arr[minIndex].style.backgroundColor = "#D47C7C";
                await wait(waitTime);
            }
            //arr[j].style.backgroundColor = color;
            //arr[minIndex].style.backgroundColor = color;
        }
        await Swap(arr, minIndex, i, width, margin, waitTime, color);
        //Swap(arr, index1, index2, width, margin, waitTime, color)
        arr[i].style.backgroundColor = "#79f883";
    }
}

async function insertionSort(arr, width, margin, waitTime, color){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j >= 1; j--){
            //arr[j].style.backgroundColor = "black";
            //arr[j-1].style.backgroundColor = "black";
            //await wait(waitTime);
            //console.log("called");
            if(parseInt(arr[j].style.height) < parseInt(arr[j-1].style.height)){
                await Swap(arr, j, j-1, width, margin, waitTime, color);
                //Swap(arr, index1, index2, width, margin, waitTime, color)
            }
            //arr[j].style.backgroundColor = color;
            //arr[j-1].style.backgroundColor = color;
        }
    }
}


class Node{
    constructor(value){
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

//var root = new Node(50);

function getBalance(node){
    if(node == null){
        return 0;
    }
    return height(node.left) - height(node.right);
}

function height(node){
    if(node == null){
        return 0;
    }
    return node.height;
}

function rotateLeft(node){
    let newParent = node.right;
    let temp = newParent.left;
    newParent.left = node;
    node.right = temp;

    node.height = 1 + Math.max(height(node.left), height(node.right));
    newParent.height = 1 + Math.max(height(newParent.left), height(newParent.right));

    /*
    if(newParent == null){
        throw new Error();
    }*/
    return newParent;
}

function rotateRight(node){
    //=
    let newParent = node.left;
    let temp = newParent.right;
    newParent.right = node;
    node.left = temp;
    //node.left.right = node;
    //node.left = temp;
    //return temp;
    node.height = 1 + Math.max(height(node.left), height(node.right));
    newParent.height = 1 + Math.max(height(newParent.left), height(newParent.right));

    return newParent;
}

//function rebalance(node, value){
//function insertRebakan
//fi
//funti
function insertRebalance(node, value){
    node.height = 1 + Math.max(height(node.left), height(node.right));
    let balance = getBalance(node);
    //LL
    if(balance > 1){
        return rotateRight(node);
    }
    //RR
    else if(balance < -1){
        return rotateLeft(node);
    }
    //LR, RL...

    //RL
    else if(balance < - 1 && value < node.right.value){
        node.right = rotateRight(node.right);
        return rotateLeft(node);
    }
    //LR
    else if(balance > 1 && value > node.left.value){
        node.left = rotateLeft(node.left);
        return rotateRight(node);
    }
    return node;
    //else nothing
}

//...function deleteBalance(node, value){
//functiuon 
function delRebalance(node, value){
    if(node == null){
        return node;
        //why this?
    }
    node.height = 1 + Math.max(height(node.left), height(node.right));
    let balance = getBalance(node);
    //LL
    //inablanced to the left with no right skew
    if(balance > 1 && getBalance(node.left) >= 0){
        return rotateRight(node);
    }
    //RR
    //inbalanced to the right with no left skew
    else if(balance < 0 && getBalance(node.right) <= 0){
        return rotateLeft(node);
    }
    //LR
    //inbalanced to the left with a right skew
    else if(balance > 1 && getBalance(node.left) < 0){
        node.left = rotateLeft(node.left);
        return rotateRight(node);
    }
    //RL
    //inbalanced to the right with a left skew
    else if(balance < 1 && getBalance(node.right) > 0){
        node.right = rotateRight(node.right);
        return rotateLeft(node);
    }
    return node;
}
//}

function deleteHelper(parent, value){
    if(parent.left == null){
        return parent.right;
    }
    else if(parent.right == null){
        return parent.left;
    }
    else{
        let minValNode = getMinimumValueNode(parent.right, value);

        parent.value = minValNode.value
        //this might have an error?
        if(minValNode == parent.right){
            parent.right = parent.right.right;
        }
        else{
            del(parent.right, minValNode.value); 
        }
        //parent.right = del(parent.right, minValNode.value);
        //if the right is 
        return parent;
    }
}

function del(parent, value){
    if(value < parent.value){
        if(parent.left.value == value){
            parent.left = deleteHelper(parent.left, value);
            ///./parent.left = delRebalance(parent.right, value);//z!
        }
        else{
            del(parent.left, value);
            //parent.left = del(parent.left, value);
            //parent.right = delRebalance(parent.right, value);//z!
        }
        //parent.right = delRebalance(parent.left, value);//z!
        parent.left = delRebalance(parent.left, value);
        //..parent.right = del
    }
    else if(value > parent.value){
        if(parent.right.value == value){
            parent.right = deleteHelper(parent.right, value);
        }
            //else if(parent.left.value == )
        else{
            del(parent.right, value);
                //parent.right = del(parent.right, value);
        }
        parent.right = delRebalance(parent.right, value);
        //del(parent.right, value);
        // parent.left = delRebalance(parent.left, value);
    }
    return null;
    //return parent;
}

function insert(parent, value){
    if(value < parent.value){
        if(parent.left == null){
            //draw it
            parent.left = new Node(value);
        }
        else{
            insert(parent.left, value);
            //draw it


            //parent.left = rebalance(parent.left, value);
            //parent.left = rebalance(par)
            parent.left = insertRebalance(parent.left, value);
        } 
    }
    else if(value > parent.value){
        if(parent.right == null){
            parent.right = new Node(value);
        }
        else{
            insert(parent.right, value);
            //parent.right = rebalance(parent.right, value);
            //parent.right = insert
            //parent.right = rebalance(parent.right,)
            //parent.right = insrty
            parent.right = insertRebalance(parent.right, value);
        }
    }
}

function getMinimumValueNode(parent){
    //console.log("minValCall parent.left = ", parent.left);
    //should parent never be null?
    if(parent == null || parent.left == null){
        return parent;
    }
    return getMinimumValueNode(parent.left);
}
//fix params
async function partition(arr, start, end, width, margin, waitTime, color){
    let p = parseInt(arr[end].style.height);
    let i = start-1;
    let j = start;
    while(j < end){
        if(parseInt(arr[j].style.height) < p){
            i += 1;
            await Swap(arr, i, j, width, margin, waitTime, color);
        }
        j += 1;
    }
    i += 1
    await Swap(arr, i, j, width, margin, waitTime, color)
    console.log("i", i);
    return i
}

async function randomized_partition(arr, start, end, width, margin, waitTime, color){
    pivot_index = Math.ceil(Math.random() * (end - start) + start);
    console.log("pivot", pivot_index);
    await Swap(arr, pivot_index, end, width, margin, waitTime, color);
    return await partition(arr, start, end, width, margin, waitTime, color);
}

async function quick_sort(arr, start, end, width, margin, waitTime, color){
    if(start < end){
        i = await randomized_partition(arr, start, end,width, margin, waitTime, color);
        await quick_sort(arr, start, i-1, width, margin, waitTime, color);
        await quick_sort(arr, i+1, end, width, margin, waitTime, color);
    }
}


async function GnomeSort(arr, width, margin, waitTime, color){
    let i = 1;
    while(i != arr.length){
        if(i == 0){
			arr[0].style.backgroundColor = "#D47C7C";
			await wait(waitTime);
			arr[0].style.backgroundColor = color;
            i = 1;
        }
        if(parseInt(arr[i-1].style.height) <= parseInt(arr[i].style.height)){
			arr[i-1].style.backgroundColor = "#D47C7C";
			await wait(waitTime);
			arr[i-1].style.backgroundColor = color;
            i += 1;
        }
        else{
            await Swap(arr, i, i-1, width, margin, waitTime, color);
            i -= 1;
        }
    }
}


function findMinimum(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(parseInt(min.style.height) > parseInt(arr[i].style.height)){
            min = arr[i];
        }
    }
    return min
}

function findMaximum(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(parseInt(max.style.height) < parseInt(arr[i].style.height)){
            max = arr[i];
        }
    }
    return max;
}

function calcGap(gap){
    if(Math.floor(gap / 1.3 > 1)){
        return Math.floor(gap / 1.3);
    }
    return 1;
}

async function combSort(arr, width, margin, waitTime, color){
    let gap = Math.floor(arr.length / 1.3);
    let flag = true;

    while(gap > 1 || flag){
        if(gap == 1){
            flag = false;
        }
        for(let j = 0; j < arr.length-gap; j++){
            console.log(arr[j].style.height);
            console.log(arr.length,j+gap, arr[j+gap]);
            if(parseInt(arr[j].style.height) > parseInt(arr[j+gap].style.height)){
                await Swap(arr, j, j+gap, width, margin, waitTime, color);
                flag = true;
            }
        }
        gap = calcGap(gap);
    }
}

async function BingoSort(arr, width, margin, waitTime, color){
    let bingo = findMinimum(arr);
    let max = findMaximum(arr);
    let nextBingo = max;
    //let minimum = 
    let i = 0;
    while(i < arr.length){
        let start = i;
        for(let j = start; j < arr.length; j++){
            //console.log("called");
            //find the minimum
            if(parseInt(arr[j].style.height) == parseInt(bingo.style.height)){
                //rup rip comma
                await Swap(arr, j, i, width, margin, waitTime, color);
                //console.log(i);
                i += 1;
            }
            else if(parseInt(arr[j].style.height) < parseInt(nextBingo.style.height)){
                nextBingo = arr[j];
            }
            console.log("bingo bitches");
        }
        //console.log(nextBingo, i, arr);
        bingo = nextBingo;
        nextBingo = max;
    }
}

/*
function createLeftTreeEdge(svgTree, x1, y1, x2, y2){
    const ns = 'http://www.w3.org/2000/svg'
    let edge = document.createElementNS(ns, "path");
    edge.setAttribute("id", "svg-tree-edge");
    let d = `M ${x1} ${y1} C ${x1} ${y1}, ${x1 - (x2 - x1)} ${y1}, ${x2} ${y2}`
    edge.setAttribute("d", d);
    svgTree.appendChild(edge);
}
function createRightTreeEdge(svgTree, x1, y1, x2, y2){
    const ns = 'http://www.w3.org/2000/svg'
    let edge = document.createElementNS(ns, "path");
    edge.setAttribute("id", "svg-tree-edge");
    let d = `M ${x1} ${y1} C ${x1} ${y1}, ${x1 + (x2 - x1)} ${y1}, ${x2} ${y2}`;
    edge.setAttribute("d", d);
    svgTree.appendChild(edge);
}*/
function createTreeEdge(svgTree, x1, y1, x2, y2){
    const ns = 'http://www.w3.org/2000/svg'
    let edge = document.createElementNS(ns, "path");
    edge.setAttribute("id", "svg-tree-edge");
    let d = `M ${x1} ${y1} C ${x1} ${y1}, ${x1 + (x2 - x1)} ${y1}, ${x2} ${y2}`;
    edge.setAttribute("d", d);
    svgTree.appendChild(edge);
}


function createTreeNode(svgTree, cx, cy, size, textz){
    //r will be a function of the size
    let r = size;
    const ns = 'http://www.w3.org/2000/svg'
    let node = document.createElementNS(ns, "circle");
    node.setAttribute("id", "svg-tree-node");
    node.setAttribute("cx", cx);
    node.setAttribute("cy", cy);
    node.setAttribute("r", r);
    svgTree.appendChild(node);
}



function drawTree(svgTree, node, x, y, offset){
    //calculate radius
    //let r = 10;
    createTreeNode(svgTree, x, y, 10, "");
    let y2 = y+128;
    if(node.left != null){
        let x2 = x - offset;
        createTreeEdge(svgTree, x-10, y, x2, y2);
        drawTree(svgTree, node.left, x2, y2, offset/2);
    }
    if(node.right != null){
        let x2 = x + offset;
        createTreeEdge(svgTree, x+10, y, x2, y2);
        drawTree(svgTree, node.right, x2, y2, offset/2);
    }
}

/*
function drawTree(svgTree, node, x, y, offset){
    createTreeNode(svgTree, x, y, 3, "");
    let y2 = y+30;
    if(node.left != null){
        let x2 = x - offset*20;
        createTreeEdge(svgTree, x, y, x2, y2);
        drawTree(svgTree, node.left, x2, y2, offset-1);
    }
    if(node.right != null){
        let x2 = x + offset*20;
        createTreeEdge(svgTree, x, y, x2, y2);
        drawTree(svgTree, node.right, x2, y2, offset-1);
    }
}*/




function getPos(node, x, y, offset, value){
    if(node.value == value){
        return [x, y];
    }
    else{
        let y2 = y+30;
        if(node.left != null && value < node.value){
            let x2 = x - offset*20;
            return getPos(node.left, x2, y2, offset-1, value);
        }
        else if(node.right != null && value > node.value){
            let x2 = x + offset*20;
            return getPos(node.right, x2, y2, offset-1, value);
        }
        else{
            throw new Error(value);
        }
    }
}

function rootrebalance(root){
    var tempRoot = new Node(-1, 0, 0);
    tempRoot.left = root;
    return insertRebalance(tempRoot.left);
}

function rootRebalanceDelete(root){
    var tempRoot = new Node(-1, 0, 0);
    tempRoot.left = root;
    return delRebalance(tempRoot.left);
}
/*
function calculateOffset(numElements, border, radius){
    let i = 0;
    while(2**i < numElements && i < 1){
        i += 1;
        console.log("called");
    }
    return (2**(i+0.5))*((radius*2)+border);
}*/

function calculateOffset(numElements, border, radius){
    let i = 0;
    while(Math.pow(2, i) < numElements){
        i += 1;
    }
    return Math.pow(2, i+0.5) * ((radius*2)+border)
}


async function treeSort(arr, waitTime){
    var svgTree = document.getElementById("svg-tree")
    let sortedArr = [];
    let root = new Node(parseInt(arr[0].style.height));
    //let offset = (2**7.5)*((2*2)+1);

    //write something to better determine border and radius
    let offset = calculateOffset(arr.length, 2, 1)
    //let offset = Math.ceil(Math.log2(arr.length)) + 1;
    //let offset = Math.ceil(Math.pow(2, size)) + 1;
    arr[0].style.height = `0px`
    for(let i = 1; i < arr.length; i++){
        svgTree.innerHTML = '';
        //let val =  Math.ceil(Math.random()*size);
        let val = parseInt(arr[i].style.height);
        insert(root, val);
        root = rootrebalance(root);
        let pos = getPos(root, 2048, 250, offset, parseInt(arr[i].style.height));
        //console.log(pos);
        //move arr[i] to this position and delete it
        drawTree(svgTree, root, 2048, 250, offset);
        await wait(waitTime);
        arr[i].style.height = `0px`
        await wait(waitTime);
        //move the block to the pos
        //insert(root, arr[i]);
    }
    for(let i = 0; i < arr.length; i++){
        svgTree.innerHTML = '';
        let minVal = getMinimumValueNode(root).value;
        if(root.value == minVal){
            root = deleteHelper(root, minVal);
            root = rootRebalanceDelete(root);
        }
        else{
            del(root, minVal);
            root = rootRebalanceDelete(root);
            //console.log(root);
        }
        //update it
        //await(100);

        //fix this, maybe instead of #D47C7Crawing each time, add and remove nodes when deleting and inserting?

        //await wait(100);
        if(root != null){
            drawTree(svgTree, root, 2048, 250, offset);
            //await wait(100);
        }
        await wait(waitTime);
        sortedArr.push(minVal);
        arr[i].style.height = `${minVal}px`
        if(parseInt(arr[i].style.height) != sortedArr[i]){
            throw new Error("here");
        }
        await wait(waitTime);
    }
    if(svgTree.innerHTML != ''){
        //save the array!
        console.log(saveRandomArray(arr));
        throw new Error(svgTree.innerHTML)
    }
    //console.log(root);
    console.log(sortedArr, sortedArr.length);
    //return sortedArr;*/
}

//Everything except for the initial root is a balanced avl tree.
//think of it like two balanaced avl trees, one on the left, one on the right


function saveRandomArray(arr){
    let savedArr = [];
    for(let i = 0; i < arr.length; i++){
        savedArr.push(parseInt(arr[i].style.height));
    }
    return savedArr;
}

async function initSavedArray(array, arr, length){
    for(var i = 0; i < length; i++){
        //await wait(waitTime);
        var el = document.createElement("div");
        el.setAttribute("id", "array-1-element");
        //var value = Math.ceil(300 /(i+1));
        var value = parseInt(arr[i]);
        el.classList.add("array-element");
        el.style.height = `${value * 3}px`;
        el.style.width = `${5}px`;
        el.style.backgroundColor = "#D47C7C";
        if(false){
            el.style.borderStyle = "solid";
            el.style.borderColor = "black";
        }
        el.style.transform = `translate(${((5+2)*i)}px)`;
        array.appendChild(el);
        //console.log(el.style)
    }
    console.log(1)
    console.log(2)
    console.log(3)
    consolg.log(4)
}












/*
function createTreeEdge(svgTree, x1, y1, x2, y2){
    const ns = 'http://www.w3.org/2000/svg'
    let edge = document.createElementNS(ns, "path");
    edge.setAttribute("id", "svg-tree-edge");
    let d = `M ${x1} ${y1} C ${x1} ${y1}, ${x1 + (x2 - x1)} ${y1}, ${x2} ${y2}`;
    edge.setAttribute("d", d);
    svgTree.appendChild(edge);
}


function createTreeNode(svgTree, cx, cy, size, textz){
    //r will be a function of the size
    let r = size;
    const ns = 'http://www.w3.org/2000/svg'
    let node = document.createElementNS(ns, "circle");
    node.setAttribute("id", "svg-tree-node");
    node.setAttribute("cx", cx);
    node.setAttribute("cy", cy);
    node.setAttribute("r", r);
    svgTree.appendChild(node);
}



function drawTree(svgTree, node, x, y, offset){
    //calculate radius
    //let r = 10;
    createTreeNode(svgTree, x, y, 10, "");
    let y2 = y+128;
    if(node.left != null){
        let x2 = x - offset;
        createTreeEdge(svgTree, x-10, y, x2, y2);
        drawTree(svgTree, node.left, x2, y2, offset/2);
    }
    if(node.right != null){
        let x2 = x + offset;
        createTreeEdge(svgTree, x+10, y, x2, y2);
        drawTree(svgTree, node.right, x2, y2, offset/2);
    }
}


*/

//generate random character function
//generate random string function

//generate random number string function


//function to get the array of text and copy it to a reference array

//add transitions!  later? colors?
function randomChar(characterSet){
    return characterSet[Math.floor(Math.random()*characterSet.length)];
}

function randomString(min, max){
    let str = "";
    let size = Math.floor(Math.random() * (max - min) ) + min;
    for(let j = 0; j < size; j++){
        str += randomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    }
    return str;
}

function randomNumberString(min, max){
    let str = "" + randomChar("123456789");
    let size = Math.floor(Math.random() * (max - min) ) + min;
    for(let j = 0; j < size; j++){
        str += randomChar("0123456789");
    }
    return str;
}



function getTopTextArray(){
    let SVGTextArray = document.getElementById("svg-array");
    let arr = SVGTextArray.childNodes;
    return copyArray(arr).slice(1,Math.floor((arr.length/2))+1);
}

function getBottomTextArray(){
    let SVGTextArray = document.getElementById("svg-array");
    let arr = SVGTextArray.childNodes;
    return copyArray(arr).slice(Math.floor(arr.length/2)+1,Math.floor(arr.length)+1);
}

//same svg field, have a func to get the top array and have one to get the bottom array

function generateTextArray3(){
	//is text a problem?
    let SVGTextArray = document.getElementById("svg-text-array");
    const ns = 'http://www.w3.org/2000/svg'
    let text = document.createElementNS(ns, "text");
    text.innerHTML = "apples";
    //x = "10" y = "995" id = "vertical-text"
    text.setAttribute("x", "-10");
    text.setAttribute("y", "-1000");
    text.setAttribute("id", "vertical-text");

    //SVGTextArray.crea
    SVGTextArray.appendChild(text);
}

function initTopArr(){
	let grid = [];
	var x = 0;
	var y = 0;
	for(let i = 0; i < 30; i++){
		grid.push([]);
		//for(let j = 0; j < 10;
		let text = document.createElementNS('http://www.w3.org/2000/svg', "text");
		text.innerHTML = randomNumberString(1, 10);
		text.setAttribute("x", x);
		text.setAttribute("y", y);
		text.setAttribute("font-size", "3px");
		d.appendChild(text);
		arr[0].push(text);
		y += 3;
		throw new Error();
	}
}

function initializeTextArrays(){
	let arr = [[], []];
	var d = document.getElementById("top-svg-text-array");
	var y = -45;
	for(let i = 0; i < 30; i++){
		let text = document.createElementNS('http://www.w3.org/2000/svg', "text");
		text.innerHTML = randomNumberString(1, 10);
		text.setAttribute("x", "30");
		text.setAttribute("y", y);
		text.setAttribute("id", "vertical-text");
		text.setAttribute("font-size", "3px");
		d.appendChild(text);
		arr[0].push(text);
		y += 3;
	}
	d = document.getElementById("bottom-svg-text-array");
	y = -30;
	for(let i = 0; i < 30; i++){
		let text = document.createElementNS('http://www.w3.org/2000/svg', "text");
		text.innerHTML = "";
		text.setAttribute("x", "10");
		text.setAttribute("y", y);
		text.setAttribute("id", "vertical-text");
		text.setAttribute("font-size", "2px");
		d.appendChild(text);
		arr[1].push(text);
		y += 2;
	}
	return arr;
}

function redrawArray(svg, arr){
	for(let j = 0; j < arr.length; j++){
		svg.appendChild(arr[j]);
	}
}

async function countSortOnDigit(){

}

async function radixSort(){
	
}

async function moveText(){
	let arrs = initializeTextArrays();
	let top_arr = arrs[0];
	let bottom_arr = arrs[1];
	//top_arr[0].innerHTML = "";
	//console.log(top_arr[0]);
	//throw new Error();
	let top_svg = document.getElementById("top-svg-text-array");
	let bottom_svg = document.getElementById("bottom-svg-text-array");
	for(let i = 0; i < top_arr.length; i++){
		bottom_arr[i].innerHTML = top_arr[i].innerHTML;
		top_arr[i].innerHTML = "";
		top_svg.innerHTML = "";
		bottom_svg.innerHTML = "";
		redrawArray(top_svg, top_arr);
		redrawArray(bottom_svg, bottom_arr);
		await wait(100);
		//throw new Error();
	}
}

function generateTextArray2(size){
    let SVGTextArray = document.getElementById("svg-text-array");
    console.log("a", SVGTextArray);
    const ns = 'http://www.w3.org/2000/svg'
    let yPos = 1250;
    for(let j = 0; j < size; j++){
        let text = document.createElementNS(ns, "text");
        //text.innerHTML = randomString(1, 30);
        text.innerHTML = randomNumberString(1, 30);
        //x = "10" y = "995" id = "vertical-text"
        text.setAttribute("x", "260");
        yPos -= 15;
        text.setAttribute("y", String(yPos));
        text.setAttribute("id", "vertical-text");
		text.setAttribute("color", "red");
        //SVGTextArray.crea
        SVGTextArray.appendChild(text);
    }
}

function generateBottomTextArray2(size){
    let SVGTextArray = document.getElementById("svg-array");
    console.log("a", SVGTextArray);
    const ns = 'http://www.w3.org/2000/svg'
    let yPos = 26;
    for(let j = 0; j < size; j++){
        let text = document.createElementNS(ns, "text");
        //text.innerHTML = randomString(1, 30);
        text.innerHTML = randomNumberString(1, 30);
        //x = "10" y = "995" id = "vertical-text"
        text.setAttribute("x", "250");
        yPos -= 15;
        text.setAttribute("y", String(yPos));
        text.setAttribute("id", "vertical-bottom-text");
        //SVGTextArray.crea
        SVGTextArray.appendChild(text);
    }
}

function generateCountArray(){
    //make the count array with all the elements invisible

}

//    var globalArray = document.querySelectorAll(elementID);
//    var x = copyArray(globalArray);



function generateTextArray(){
	//is text a problem?
    let SVGTextArray = document.getElementById("svg-array");
    const ns = 'http://www.w3.org/2000/svg'
    let text = document.createElementNS(ns, "text");
    text.innerHTML = "apples";
    //x = "10" y = "995" id = "vertical-text"
    text.setAttribute("x", "10");
    text.setAttribute("y", "995");
    text.setAttribute("id", "vertical-text");

    //SVGTextArray.crea
    SVGTextArray.appendChild(text);
}


function initializeCountArr(countArr, size){
    const ns = 'http://www.w3.org/2000/svg'
    //x = "10" y = "995" id = "vertical-text"
    let x = 0;
	
	//make font size and spacing a function of the number of different types of elements

    for(let j = 0; j < size; j++){
        let text = document.createElementNS(ns, "text");
        text.innerHTML = "0";
        text.setAttribute("x", String(x));
        text.setAttribute("y", "110");
        text.setAttribute("id", "count-arr-text");
        text.setAttribute("font-size", "50px");
        countArr.appendChild(text);
        x += 90;
    }
    x = 0;
    for(let j = 0; j < size; j++){
        let text2 = document.createElementNS(ns, "text");
        text2.innerHTML = String(j+1);
        text2.setAttribute("x", String(x));
        text2.setAttribute("y", "250");
        text2.setAttribute("id", "count-arr-text");
        text2.setAttribute("font-size", "50px");
        countArr.appendChild(text2);
        x += 90;
    }
    let line = document.createElementNS(ns, "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "150");
    line.setAttribute("x2", "8900");
    line.setAttribute("y2", "150");
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "12");
    countArr.appendChild(line);
}

function getCountArray(){
    let SVGTextArray = document.getElementById("count-arr");
    let arr = SVGTextArray.childNodes;
    return copyArray(arr).slice(1,Math.floor((arr.length/2)));
}

//generateBottomArr("array-1", "bottom-array-element", 250, 3, 0, 0, 10, "aquamarine", false, 0, 100);

async function countSort(arr, width, margin, sortWaitTime, color, heightFactor, countArr, depthFactor){
	countArr.innerHTML = '';
    let max = parseInt(arr[0].style.height)/heightFactor;
    let min = parseInt(arr[0].style.height)/heightFactor;
    for(let j = 0; j < arr.length; j++){
        if(max < parseInt(arr[j].style.height)/heightFactor){
            max = parseInt(arr[j].style.height)/heightFactor;
        }
        if (min > parseInt(arr[j].style.height)/heightFactor){
            min = parseInt(arr[j].style.height)/heightFactor;
        }
    }
    initializeCountArr(countArr, (max-min) + 1); 
	let c = [];
	for(let i = 0; i < (countArr.childNodes.length / 2)-1; i++){
		c.push(countArr.childNodes[i]);
		//console.log(c[i]);
	}	
	//throw new Error("Here");
    for(let j = 0; j < arr.length; j++){
        c[parseInt(arr[j].style.height)/heightFactor-min].innerHTML = String(parseInt(c[parseInt(arr[j].style.height)/heightFactor-min].innerHTML)+1);
        //console.log(c[parseInt(arr[j].style.height)/heightFactor-min]);
		//await wait(10);
    }
    for(let j = 1; j < c.length; j++){
        c[j].innerHTML = String(parseInt(c[j-1].innerHTML)+parseInt(c[j].innerHTML));
        await wait(10);
    }
    //move everything down into the result arr
    let z = 0;
    let resArray = Array(arr.length);
    while(z < arr.length){
        //console.log(String(parseInt(c[arr[z]-min].innerHTML)-1));
        resArray[parseInt(c[parseInt(arr[z].style.height)/heightFactor-min].innerHTML)-1] = arr[z];
        //y will be constant. x will not -- you need to calculate it each time
        arr[z].style.transform = `translate(${(width+margin)*(c[parseInt(arr[z].style.height)/heightFactor-min].innerHTML)}px, ${depthFactor}px)`
        await wait(10);
        //x = c[parseInt(arr[z].style.height)/3-min].innerHTML
        //res[res.length-1].style.transform = `translate(${(width+margin)*(0)}px, ${250}px)`;
        //result_arr[count_arr[arr[z] - minEl]-1]

        //move arr[z] down and to result_arr[count_arr[arr[z] - minEl]-1]
        c[parseInt(arr[z].style.height)/heightFactor-min].innerHTML = String(parseInt(c[parseInt(arr[z].style.height)/heightFactor-min].innerHTML)-1);
        z += 1;
    }
    let y = 0;
    while(y < arr.length){
        //console.log(resArray[0])
        //console.log(String(parseInt(c[arr[z]-min].innerHTML)-1));
        
        //y will be constant. x will not -- you need to calculate it each time
        //let x = 0;//should be the current x
        //console.log(arr[y].style.transform);
        arr[y] = resArray[y];
        //console.log(resArray[y]);
        arr[y].style.transform = `translate(${getTranslateX(arr[y].style.transform)}px, ${0}px)`
        //console.log("adfg", `translate(${getTranslateX(arr[y].style.transform)}px, ${200}px)`);
        //console.log(arr[y].style.transform);
        //x = c[parseInt(arr[z].style.height)/3-min].innerHTML
        //res[res.length-1].style.transform = `translate(${(width+margin)*(0)}px, ${250}px)`;
        //result_arr[count_arr[arr[z] - minEl]-1]
        await wait(10);

        //move arr[z] down and to result_arr[count_arr[arr[z] - minEl]-1]
        //c[parseInt(arr[z].style.height)/3-min].innerHTML = String(parseInt(c[parseInt(arr[z].style.height)/3-min].innerHTML)-1);
        y += 1;
    }
    //move everything up into the normal array  
}


function getTranslateX(translate){
    let str = "";
    for(let i = 10; i < translate.length; i++){
        if (translate[i] == "p"){
            return str;
        }
        str += translate[i];
    }
}

async function countSortInPlace(arr, width, margin, sortWaitTime, color, heightFactor, countArr){
    let max = parseInt(arr[0].style.height)/heightFactor;
    let min = parseInt(arr[0].style.height)/heightFactor;
    for(let j = 0; j < arr.length; j++){
        if(max < parseInt(arr[j].style.height)/heightFactor){
            max = parseInt(arr[j].style.height)/heightFactor;
        }
        if (min > parseInt(arr[j].style.height)/heightFactor){
            min = parseInt(arr[j].style.height)/heightFactor;
        }
    }
    initializeCountArr(countArr, (max-min) + 1);   
	let c = [];
	for(let i = 0; i < (countArr.childNodes.length / 2)-1; i++){
		c.push(countArr.childNodes[i]);
	}
    let countArr2 = Array(c.length);
    countArr2.fill(0);
    for(let j = 0; j < arr.length; j++){
        c[parseInt(arr[j].style.height)/heightFactor-min].innerHTML = String(parseInt(c[parseInt(arr[j].style.height)/heightFactor-min].innerHTML)+1);
        countArr2[parseInt(arr[j].style.height)/heightFactor-min] += 1;
        await wait(10);
    }

    for(let j = 1; j < c.length; j++){
        c[j].innerHTML = String(parseInt(c[j-1].innerHTML)+parseInt(c[j].innerHTML));
        await wait(10);
    }	
    let z = arr.length-1;
    while(z >= 0){
        let index = parseInt(arr[z].style.height)/heightFactor- min;
        //throw new Error();
        while(countArr2[index] > 0){
			console.log("apppppples");
            //        await Swap(arr, i, largest, width, margin, waitTime, color);
            await Swap(arr, z, parseInt(c[index].innerHTML)-1, width, margin, sortWaitTime, color);
            c[index].innerHTML = String(parseInt(c[index].innerHTML)-1);
            countArr2[index] -= 1;
            index = parseInt(arr[z].style.height)/heightFactor - min;
        }
        z -= 1;
    }
}

async function randomRangeArray(){

}

async function insertionSortRange(arr, width, margin, waitTime, color, start, end){
    for(let i = start; i < end; i++){
        for(let j = i; j >= 1; j--){
            if(parseInt(arr[j].style.height) < parseInt(arr[j-1].style.height)){
                await Swap(arr, j, j-1, width, margin, waitTime, color);
            }
        }
    }
}

async function BucketSort(arr, width, margin, waitTime, color, start){
    //create buckets
    //compute n in some better way
    let numberOfBuckets = 100;
    let buckets = [];
    for(let j = 0; j < numberOfBuckets; j++){
        //animate this
        buckets.push([]);
    }
    console.log(buckets);
    for(let j = 0; j < arr.length; j++){
        //console.log(Math.floor((parseInt(arr[j].style.height) / 3) / numberOfBuckets))
        //console.log(buckets[Math.floor((arr[j].style.height / 3) / numberOfBuckets)]);

        buckets[Math.floor((parseInt(arr[j].style.height) / 3) / numberOfBuckets)].push(arr[j]);
    }
    for(let j = 0; j < buckets.length; j++){
        insertionSort(buckets[j], width, margin, waitTime, color, start);
    }
    for(let j = 0; j < buckets.length; j++){
        for(let x = 0; x < buckets[j].length; x++){
            arr[j+x] = buckets[j][x];
        }
    }
    
}



//sort range funciton

/*
BucketSort
RadixSort -- (normal, special one for numbers)
        -- organize the 1 digit numbers, then the 2 digit numbers, then ... n digit numbers.
        -- radix sort each of the ranges
Pigeonhole sort*/