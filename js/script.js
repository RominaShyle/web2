
var num = 378;
//let num = 1;

var num1 = "378";
// var 123 = 35;

console.log(num);

var greeting = "Jam ne Javascript!";
console.log(greeting);


document.write('<p style="border:1px solid; padding:10px">Sot harxhova ' + num + ' leke!</p>')

//alert(greeting)

/* ky 
eshte nje koment */



var fjali = 'numri i pare eshte '+ num +' ';

var x = 10;
var y = 4;
var linebreak = "<br>";



document.write(linebreak);


document.write("x + y = " + (x+y));

document.write(linebreak);

document.write("x - y = ");

document.write(x-y);
document.write(linebreak);


document.write("x * y = ");

document.write(x*y);


document.write(linebreak);

document.write("x / y = ");

document.write(x/y);
document.write(linebreak);

document.write("x % y = ");

document.write(x%y);
document.write(linebreak);


//&& dhe || 



var a = true;
var b = false;


console.log(a && b) //nxjerr false
console.log(a || b) //nxjerr true
console.log(!a && b) //nxjerr false
console.log(!a || b) //nxjerr false
console.log((!a || b) || (a && !b)) //nxjerr true




//Strukturat e kontrollit: if statements


// if(kushti){
// //instr
// }else if(kushti 2){
//     //instr
// }else if(kushti 3){
// //instr
// }
// else {

// }




/*Ushtrim: gjej shenjen e numrit*/


var numri = 8;

if(numri > 0){
    console.log('numri eshte pozitiv!');
}
else if(numri < 0){
    console.log('numri eshte negativ!');
}
else {
    console.log('numri eshte 0!');
}


var gjuha = 'it';
var pershendetja; 

switch(gjuha){

case 'sq':
    pershendetja = 'Pershendetje!';
    break;

case  'it':
    pershendetja = 'Ciao!';
    break;

case  'en':
    pershendetja = 'Hello!';
    break;
case  'ru':
    pershendetja = 'Spasiba!';
    break;
case 'es':
    pershendetja = 'Hola!';
    break;
case  'de':
    pershendetja = 'Hallo!';
    break;
case 'fr':
    pershendetja = 'Salut!';
    break;

 default:
    alert('Ju lutem vendosni gjuhen e duhur!')
    break;
}

//document.getElementById('ciao').innerHTML = pershendetja;




//While loop
/*Afishoni numrat 1-10*/


var nr = 1;


// while(nr <=10){

//     document.write('<br>' +nr + '<br>');
//     nr++;

// }


for(var i=1; i<=10; i++){

    console.log(i);
}


//shuma e numrave nga 1-10

var j=1;
var shuma = 0;


while(j<=10){
shuma +=j;
j++;
}

document.write('<br>Shuma e 10 numrave te pare eshte: ' + shuma);


var sum = 0;
for(var k=1; k<=9; k++){ 

    sum += k;
}

document.write('<br>Shuma e 9 numrave te pare eshte: ' + sum);


i = 1;

for(j=10; j>=8; j--){

    console.log('Javascript, hera e ' + i);
    i = i+1;
}

/*arrays */

var fruits = ['apple', 'cherry', 'orange', 'grape']; 

//alternative : vvar fruits = new Array();

fruits.push('Banana', 'Strawberry');



//fruits[0] = 'banana'
//console.log(typeof(fruits))
//var ifundit = fruits.pop() //fshin el. e fundit dhe e kthen
//var i_pari = fruits.shift()  //fshin elementin e pare


//console.log(ifundit)
var size = fruits.length;

console.log(size)
document.write('<br>Elementi i pare eshte: <span style="color:red">' + fruits[0] + '</span>');
document.write('<br>Elementi i dyte eshte: <span style="color:darkred">' + fruits[1] + '</span>');
document.write('<br>Elementi i trete eshte: <span style="color:orange">' + fruits[2] + '</span>');
document.write('<br>Elementi i fundit eshte: <span style="color:purple">' + fruits[size-1] + '</span>');



/* KONTROLLO NESE EKZISTON NUMRI 6*/

var numrat = [0, 9, 9, 4 , 2];
console.log(numrat)
var num = 6;
var ugjet = false;

for(var k=0; k< numrat.length; k++){

if(numrat[k] == num){
    ugjet = true;
    document.write('<br>Numri u gjet ne pozicionin '+ k)
    break;
}

}

if(ugjet == false){
    document.write('<br>Numri nuk u gjet!')

}



/*funksionet */






/*strings*/

var str1 = "Ky eshte nje string me thonjeza cift";
var str2 = 'Ky eshte nje string me thonjeza teke Ky';


// "\"->backslash (escape character)... \' -> nxjerr vetem ' ..... \" -> nxjerr vetem " .... \\ -->nxjerr vetem \

var str3 = 'Libri im i preferuar eshte \'Madamme Bovari \'. ';


//var str4 = new String (''); 


//str3.length -> nxjerr sa karaktere ka stringu

// str3.indexOf("eshte", 4) -> kthen 3, kerkon pozicionin ku ndodhet nje fjale per here te pare, nese nuk gjendet kthen -1
// str2.lastIndexOf("Ky") -> kthen 37, kerkon pozicionin ku ndodhet nje fjale per here te fundit, nese nuk gjendet kthen -1

str1.substring(3,8); //->3->pozicioni fillestar ; 8->pozicioni i fundit -> nxjerr eshte

str1.substr(3,5); // njesoj si .substring, por parametri i dyte eshte nr i karaktereve qe do marrim nga pozicioni 3. => nxjerr eshte

str3.replace("Madamme", "Zonja"); //zevendeson fjalen e pare me te dyten, nese nuk e gjen, sben ndryshime

// str1.toUpperCase() ->tgjitha kapitale
// str1.toLowerCase() ->tgjitha me te vogla



str3.charAt(0) //->karakterin qe ndodhet ne pos 0 


var personi = {
    firstname: "John",
    lastname:"Doe",
    age:"28" ,
    getData : function(){
        return this.firstname + " " + this.lastname + " eshte " + this.age + " vjec.";
    },
    greet: function(a){
        alert("hi " + a + ". Une jam " + this.firstname)
    }
}


var obj = {};



var obj1 = {
    ssn: "2093482904583"
}

delete obj1.ssn;   //->fshij dhe propertyn dhe vleren e propertyt
//var person2 = personi; 


// var vlera = prompt('Vendos nje emer', 'Ana');
//personi.greet(vlera);

obj.ssn= "12349345";

