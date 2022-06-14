console.log('hello');
//console.log('precious child');
//alert('get help here');
//variables
var b="checkie";
console.log(b);

var somebody=45;

console.log(somebody);


//var age = prompt("what is your age?");

//document.getElementById("serious").innerHTML=age;

//numbers in javascript.

var num =100000;
var chec=2000;
var hr=10;
var ans =chec*hr;
var cub=num+ans
console.log(cub);

// increment numbers by 1
var hi=10;
hi++;
//console.log(hi);

//decrement numbers by 1
hi--;
console.log(hi);

//divide,multiple*,remainder %
console.log(num/6);

console.log(num%6);
//increment/decrement by any number you want 
var kai=10;
kai += 20;
console.log(kai);
/*function
create a function
call a function
*/
function fun(){
    console.log('this is a function ')
}
fun();
/* creating a function that takes in a name and says hello followed by your name
name:'bisola'
return: 'hello bisola' */

/*function greeting(yourName){
var result='this'+' is '+ yourName; //string concatenation
console.log(result);
}

var slick = prompt('what is your name');
greeting(slick);
*/

//how to add arguments work in functions?
function sumNumbers(num1,num2){
var result=num1+num2;
console.log(result);

}
sumNumbers(10, 10);

/*whileloops
var num =0;
while (num<100){
num +=1;
console.log(num);

}
*/
//for loop
for(let num = 0; num < 100; num++){
    console.log(num);
}

//datatypes
let yourage =18;//number
let yourName='bob';//string
let name ={first: 'Jane', last:'Doe'};//object
let truth=false;//boolean
let groceries=['apple','banana','orange'];//array
let random;//undefined
let nothing=null;//value null

//strings in javascript (common methods)
let fruit='banana';
let morefruits='banana\napple';
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[2]);
console.log(fruit.split(','));//split by a comma
console.log(fruit.split(''));//split by a character
var b='smoothie';
console.log(b);

//array creation
let fruits=['banana','apple','orange','pineapple'];
fruits = new Array('banana','apple','orange','pineapple');
//alert(fruits[0]);
 console.log(fruits[2]);//access value at index 2nd.
 fruits[0]='pear';//change value of object in an array
 console.log(fruits);

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods.
console.log('to string',fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);//removes last item
console.log(fruits.push('blackberries'),fruits);//adds to last item

console.log(fruits[3]);
fruits[fruits.length]='new fruit';//same as push
console.log(fruits)

fruits.shift();//remove first element
console.log(fruits)

fruits.unshift('kiwi');
console.log(fruits);
 let vegetables =['asparagus','tomatoes','broccoli'];
 let allGroceries=fruits.concat(vegetables);
 console.log(allGroceries);
 console.log(allGroceries.slice(1,4));
 console.log(allGroceries.reverse());

 
let someNumbers=[5,10,2,25,3,255,1,2];
console.log(someNumbers.sort(function(a,b) {return a-b}));//sort ascending
console.log(someNumbers.sort(function (a,b){return b-a}));//sort descending

let emptyArray =new Array();
for(let num=0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//objects in javascript

let student={
first:'rafeh',
last:'qazi',
age:25,
height:170,
studentInfo:function(){
    return this.first + '\n' + this.last + '\n' + this.age;
}



};
//console.log(student.first);
//console.log(student.last);
//student.first='notfafeh';//change value
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//conditionals,control flows (if else)
//conditionals,control flows(if else)
//18-35 is my targer demographic
//&&AND
//|| OR
var age = 45
//prompt('what is your age?');
 if ((age>=18) &&(age<=35 )){
    look ='target demo';
    console.log(look);
 }
 else{ look ='not my audience'
console.log(look);
 }

 //switch statements
 //differentiate between weekday vs weekend
 //day 0 --->Sunday
  //day 1 --->Monday-->Weekday
   //day 2 --->Tuesday
    //day 3 --->Wednesday
     //day 4 --->Thursday-->weekday
      //day 5 --->Friday-->weekend
 //day 6 ---> Saturday -->weekend
 switch(5){

    case 0:
        text='weekend';
        case 5:
            text ='weekend';
            break;
            case 6 :
                text ='weekend'
              break;
                default:
                    text ='weekday'
 }

 console.log(text);
 