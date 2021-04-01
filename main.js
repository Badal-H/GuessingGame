// alert("Badal Hossain");
// document.write("<h1>Badal Hossain</h1>");

// var num = 20;
// num = toString(num); 
// console.log(typeof(num));

// var num = "20.2135";
// num = parseFloat(num); 
// console.log(num);

// var num = 20.1274;
// console.log(num.toPrecision(4));

// console.log(typeof("20"));

// var firstName = "Badal";
// var lastName = " Hossain";

// document.write("My name is " + firstName + lastName);

// var num1 = 20;
// var num2 = 30;
// var num = num1 + num2;
// document.write("The Total sum is " + num);

// var text = "Bangladesh"; 
// var text = text.length(text);
// document.write(text);

// var text = "Bangladesh";
// var text = text.toUpperCase();
// document.write(text);

// var num2 = "Badal Hossain";
// var num = num2.slice(0,7);
// document.write(num);

// var firstName = prompt("Enter your first name : ");
// var lastName = prompt(" Enter your last name : ");
// var fullName = firstName + lastName;
// document.write(fullName);
// var fullName = fullName.length();
// document.write(fullName1);
// var fullName = fullName.toUpperCase;
// document.write(fullName);


// var num1 = parseInt(prompt("Enter your first number : "));
// var num2 = parseInt(prompt("Enter your second number : "));

// var sum, sub;
// sum = num1 + num2;
// document.write(num1 + " + " + num2 + " = " + sum + "<br/>"); 

// sub = num1 - num2;
// document.write(num1 + " - " + num2 + " = " + sub); 

// var base = parseFloat(prompt("Enter base : "));
// var height = parseFloat(prompt("Enter height : "));
// var area = base * height;
// document.write(area);

// var base = parseFloat(prompt("Enter Base : "));
// var height = parseFloat(prompt("Enter Height : "));
// var Triangle_area = (base*height)/2;
// document.write("Triangle_area " + " = " + Triangle_area);

// var farn = parseFloat(prompt("Enter Fahrenheit : "));
// var cels = (farn-32)*(5/9);
// document.write("Celcious : " + cels);

// var num = parseFloat(prompt(" Enter number : "));

// if (num>0)
//     console.log("positive");

// else if (num<0)
//     console.log("negative");

// else
//     console.log("Zero");


// var num = parseFloat(prompt("Enter a Number : "));

// if (num % 2 == 0)
//     document.write("Even");

// else
//     document.write("odd");

// var num = parseFloat(prompt("Enter your number : "));

// if (num>=80)
//     document.write("Your grade is A+");

// else if (num>=70)
//     document.write("Your grade is A");

// else if (num>=60)
//     document.write("Your grade is A-");

// else if (num>=50)
//     document.write("Your grade is B");

// else if (num>=40)
//     document.write("Your grade is C");

// else if (num>=33)
//     document.write("Your grade is D");

// else
//     document.write("Fail");


// var digit =prompt("Enter a number : ");

// switch(digit){
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("One");
//         break;
//     case "2":
//         document.write("Two");
//         break;
//     case "3":
//         document.write("Three");
//         break;
//     case "4":
//         document.write("Four");
//         break;
//     case "5":
//         document.write("Five");
//         break;
//     case "6":
//         document.write("Six");
//         break;
//     case "7":
//         document.write("Seven");
//         break;
//     case "8":
//         document.write("Eight");
//         break;
//     case "9":
//         document.write("Nine");
//         break;
//     default:
//         document.write("Invalid Digit");
// }

// var letter = prompt("Enter a letter : ");
// letter = letter.toLowerCase();

// switch(letter){
//     case "a":       
//     case "e":      
//     case "i":      
//     case "o":      
//     case "u":
//         document.write("Vowel letter");
//         break;
   
//     default:
//         document.write("Consonant Letter");
// }


// var ltr = prompt("Enter a letter : ");
// lttr = ltr.toLowerCase();

// switch(lttr){
//     case"a":
//     case"e":
//     case"i":
//     case"o":
//     case"u":
//         document.write("Vowel letter");
//         break;

//     default:
//         document.write("consonant letter");

// }


// for(var i=1; i<=10; i++ )
// {
//     document.write("<h1>Bangladesh</h1>");
// }

// for(var i=10; i>=1; i=i-1)
// {
//     document.write(" "+i);
// }


// sum = 0;

// for(var i=1; i<=10; i=i+1)
// {
//     sum = sum+i;
// }
// document.write("tital: " +sum);

// var m = parseFloat(prompt("Enter First Number :"));
// var n = parseFloat(prompt("Enter last Number :"));

// sum=0;

// for(var i=m; i<=n; i=i+1)
// {
//     sum = sum+i;
   
// }
// document.write(" total value is : " + sum);



// sum = 0;
// var i=1
// while(i<=100)
// {
//     document.write(" " + i);
//     i=i+1;
// }


// sum = 0;
// var i=1

// while(i<=100)
// {
//     if(i%3==0 || i%5==0)
//     {
//         sum = sum+i;
//     }
//     i = i+1;
// }

// document.write(sum);


// var i=1;

// do{
//      document.write(" " +i);
//      i=i+1;

// }while(i<=100)


// function square(num)
// {
//     var result = num*num;
//     document.write("results : " + result + "</br>");
// }
// square(2);
// square(4);
// square(6);
// square(8);


// function addition(m,n)
// {
//     var results = m+n;
//     document.write(m + " + " + n + " = " + results + "</br>");
// }
// addition(6,4);



// function subtruction(x,y)
// {
//     var results = x-y;
//     document.write(x + " - " + y + " = " + results);
// }
// subtruction(6,4);


// var number = Number(prompt("Enter a number"));
// var num = number>0 ? "Positive" : number<0 ? "Negative" : "Zero"
// document.write(num);


// var number = Number(prompt("Enter your Number : "));
// var num = number>0 ? "Positive" : number<0 ? "Negative" : number==0 ? "Zero" : "Invalid Number"
// document.write(num);



// var names = new Array(5);

// names[0] = "Badal Hossain";
// names[1] = "joyoty Saha";
// names[2] = "Rifat Ahmed";
// names[3] = "Toimur khan";
// names[4] = "Juthi Hasan";

// console.log(names[1]);
// console.log(names.length);



// var num = [10, 20, 30, 40, 50];

// var sum = 0;

// for(i=0; i<=4; i++)
// {
//     console.log(num[i]);
//     sum = sum + num[i];  
// }
// console.log("The sum is : " + sum);

// var num = new Array();
// for(var i=0; i<5; i++)
// {
//     num[i] = parseInt(prompt("Enter Your Number's : "));
// }
// var sum = 0;
// for(var i=0; i<5; i++)
// {
//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log("Sum : " + sum);


// var fruits, fLen, text, i;
// fruits = ["Mango", "Tango", "Fango", "Bango"];
// fLen = fruits.length;

// text = "<ul>"
// for(i=0; i<fLen; i++)
// {
//     text += "<li>" + fruits[i] + "</li>" ;
// }
// text += "</ul>"

// document.write(text);



// var names, fLen, text, i ;
// names = ["Badal Hossain", "Jannat Mimo", "Joyoty Saha", "Rony Ahmed"];
// fLen = names.length;
// text = "<ul>"
// for(i=0; i<fLen; i++)
// {
//     text += "<li>" + names[i] + "</li>" ;
// }
// text += "</ul>"
// document.write(text);

// var names,fLen,text,i;
// names = ["Badal", "Arif", "Kabir", "Rahil"];
// fLen = names.length;
// text = "<ul>";
// for(i=0; i<fLen; i++)
// {
//     text+="<li>" + names[i] + "</li>";
// }
// text += "</ul>";
// document.write(text);

// var names, slicednames, sortednames;
// names = ["badal", "arif", "rony", "rubel"];
// document.write(names.join(" * ") + "</br>");

// slicednames = names.slice(1, 3);
// document.write(slicednames.join(" * ") + "</br>");

// sortednames = names.sort();
// document.write(sortednames + "</br>");



// var num;
// num = [20, 5, 25, 45, 95];
// num.sort(function(a,b)
// {
//     return b-a;
// });
// document.write(num);


// var num;
// num = Math.min(40, 100, 1, 5, 25, 10);

// document.write(num);

// function Student (name,age,cgpa,institute) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.institute = institute;
    
//     this.display = function () {
//         document.write("Name : " + this.name + "</br>");
//         document.write("age : " + this.age + "</br>");
//         document.write("cgpa : " + this.cgpa + "</br>");
//         document.write("institute : " + this.institute);
//     }
// }
// var student1 = new Student("Badal Hossain", 27, 3.20, "Stamford University Bangladesh");
// var student2 = new Student("rony Hossain", 27, 3.20, "Stamford University Bangladesh");
// var student3 = new Student("rubel Hossain", 27, 3.20, "Stamford University Bangladesh");
// var student4 = new Student("shihaab Hossain", 27, 3.20, "Stamford University Bangladesh");
// var student5 = new Student("adnan Hossain", 27, 3.20, "Stamford University Bangladesh");
// var student6 = new Student("ratul Hossain", 27, 3.20, "Stamford University Bangladesh");

// student5.display();


// function Student(name, age, cgpa, institute){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.institute = institute;

//     this.display = function(){
//         document.write("Name : " + this.name + "</br>");
//         document.write("age : " + this.age + "</br>");
//         document.write("cgpa : " + this.cgpa + "</br>");
//         document.write("institute : " + this.institute);
//     } 
// }
// var student1 = new Student ("Badal Hossain", 27, 3.20, "stamford University Bangladesh");

// student1.display();




var numofWon = 0;
var numofLost = 0;

for (i=1; i<=3; i++){

    var guessNumber = parseInt(prompt("Enter a Guess Number 1 to 3 : "));
    var randomNumber = Math.floor(Math.random()*3 ) + 1;

    if(guessNumber==randomNumber){
        document.write("You have won" + "<br>");
        numofWon++
    } else{
        document.write("You have lost : The random number was : " + randomNumber + "<br>");
        numofLost++
    }

}
document.write("-------------------------------------------" + "<br>")
document.write("Total number of won : " + numofWon + "<br>");
document.write("Total number of Lost : " + numofLost +"<br>");
document.write("-------------------------------------------" + "<br>")

// var win = parseInt(win);
// var loss = parseInt(loss);

if (numofWon > numofLost){
    document.write("২ টাহা জিতছো মামু")
} else{
    document.write("হাইরা গেছস...১০০ টাহা দে হালা")
}






