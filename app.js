// STRING METHODS


/*1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.


var input=prompt()
var input2=prompt()


var fullName=input+input2;
console.log(fullName)*/

/*2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browse*/

// var mobile=prompt("enter your fav mobile")
// var favMob=mobile.length
// console.log(favMob)


/*3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/
// d
// var country="Pakistani"
// var index=country.indexOf("n")
// document.getElementById("pera").innerHTML=country;
// document.getElementById("pera2").innerHTML=index;
//  console.log(index)


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var a="Hello World"
// var b=a.lastIndexOf("l")

// document.getElementById("pera").innerHTML=a
// document.getElementById("pera2").innerHTML=b


/*5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/

// var a="pakistani"
// var b=a.charAt("3")
// document.getElementById("pera").innerHTML=a
// document.getElementById("pera2").innerHTML=b

// MATH METHODS

/**1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var a=prompt("Enter a Vlaue","0")
// var b=Math.floor(a)
// var c =Math.ceil(a)
// var d =Math.round(a)
//  document.getElementById("pera").innerHTML=a
//  document.getElementById("pera1").innerHTML=b
//  document.getElementById("pera2").innerHTML=c
//  document.getElementById("pera3").innerHTML=d

/* 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/



// var a=prompt("Enter a Vlaue","0")
// var b=Math.floor(a)
// var c =Math.ceil(a)
// var d =Math.round(a)
//  document.getElementById("pera").innerHTML=a
//  document.getElementById("pera2").innerHTML=b
//  document.getElementById("pera3").innerHTML=c
//  document.getElementById("pera4").innerHTML=d


/**3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

// var a=prompt()

// var b=a
// var c=Math.abs(b)
// document.getElementById("pera").innerHTML=a
//  document.getElementById("pera1").innerHTML=b
//  document.getElementById("pera2").innerHTML=c


/**4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.: */

// var a=prompt()
// var b=Math.random()

// document.getElementById("pera").innerHTML=a
//  document.getElementById("pera1").innerHTML=b


/** 5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser
*/


// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }










/**6. Write a program that shows a random number between 1
and 100 in your browser. */


// var  a=Math.floor(Math.random() * 100) + 1;
// document.getElementById("pera").innerHTML=a


/**7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */


// var a= parseInt(prompt())
// num1 = document.getElementById("firstNumber").value;
// num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML ="the weight of user is"+a+"KG"

/**8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user inp */



// var num = Math.ceil(Math.random() * 10);
// console.log(num);
//  var gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+gnum);

// DATE METHODS




/**1. Write a program that displays current date and time in
your browser. */

// var date=new Date()
//    document.getElementById("pera").innerHTML=date

// 2. Write a program that alerts the current month in words.
// For example December
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Dec"){
//     document.write("Current month: Dec")}

/**3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */

// var myDate = new Date();
// myDate.setFullYear(2021);
// myDate.setMonth(7);
// myDate.setDate(25);

// if(myDate.getDay() == 6 || myDate.getDay() == 0) alert('Sat!');
// document.getElementById(pera).innerHTML="Today is Sat"


/**4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")}



/**5. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


/**6. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM” */
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")

// .7 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// 8. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// 9. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.











// FUNCTIONS










// 1. Write a function that displays current date & time in your
// browser.
// function date() {
//     var date = new Date();
//     var hours = date.getHours();
//     var days = date.getDay(); 
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
    
// }



// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// function MyFunction() {
//     var first, second;
//     first = document.getElementById("firstname").value;
//     second = document.getElementById("lastname").value;

//     document.GetElementById("here").InnerHTML = first;
//     document.GetElementById("here").InnerHTML = second;
// }

/**3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */


// function addTwoNumbers(textBox1, textBox2){
//     var x=document.getElementById(textBox1).value;
//     var y=document.getElementById(textBox2).value;
//     var sum=0;
//     sum=Number(x)+Number(y);
//     alert("SUM is: " + sum);
// }



/**4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }


/** 5. Write a function that squares its argument*/
// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
// }

/** 6. Write a function that computes factorial of a number.*/

// function fact(N){
//     if(N <= 1){
//         return "1";
//     }
//     else
//     {
//       return N * fact(N-1);  
//     }
//   }
  
//   fact(5);
/**7. Write a function that take start and end number as inputs
& display counting in your browser. */



// function sum()
// {
//     var FirstNumber = 1;
//     var SecondNumber = document.getElementById('txtSecondNumber').value;
//     alert(parseInt(FirstNumber) + parseInt(SecondNumber));
// }
/**8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2 */

// function getHypotenuseLength(a, b) { 
//     if (a && b && Number.isFinite(a) && Number.isFinite(b)) {  
//         return Math.sqrt((a * a) + (b * b)); 
//     } 
//     throw "Invalid numbers"; 
// } 
 
// getHypotenuseLength(5, 12) // 13 



/**9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */


// var length = prompt("Enter a whole number for the length of your rectangle.");
//         var width = prompt("Enter a whole number for the width of your rectangle.");
//         function area(length, width) {
//             return length * width;
//         }
//         function perimeter(length, width) {
//             return 2*( length + width);
//         }
        
//         document.writeln('The area of your rectangle is ' + area(length, width));         
//         document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));





/**11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fo */

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DOWHILE LOOPS 


/**1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */

// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;        
//         }
//         return ans;
// }
// console.log(exp(2, 3))

/**2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not. */


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2021));
// console.log(leapyear(2012));



/**3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2 */




// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);


/**4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction. */

// function marks(){

//     var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }
// }

/**5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */

/**6.Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long.
 */

// function remVowel(str)
// {
//     var al = [ 'a', 'e', 'i', 'o', 'u',
//                'A', 'E', 'I', 'O', 'U' ];
//     var result = "";
     
//     for(var i = 0; i < str.length; i++)
//     {
         
//         if (!al.includes(str[i]))
//         {
//             result += str[i];
//         }
//     }
//     return result;
// }
 
// // Driver code
// var str = "GeeeksforGeeks - A Computer Science " +
//           "Portal for Geeks";
// document.write(remVowel(str));

/**7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence */


// function isVowel(ch)
// {
//     switch (ch) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         return true;
//     default:
//         return false;
//     }
// }

// function vowelPairs(s, n)
// {
//     let cnt = 0;
//     for (let i = 0; i < n - 1; i++) {

   
//         if (isVowel(s[i]) && isVowel(s[i + 1]))
//             cnt++;
//     }

//     return cnt;
// }
   


//     let s = "abaebio";
//     let n = s.length;
//     document.write(vowelPairs(s, n));
