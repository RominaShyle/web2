console.log('lali')
document.getElementById('demo').innerHTML = 
"<p style='color:red;padding:20px'>laliefkjslbntvhukdfjghkegirugskfkjtg </p>"

 var demo = document.getElementById('demo');
 demo.innerHTML = "<p style='color:red;padding:20px'>laliefkjslbntvhukdfjghkegirugskfkjtg </p>"

 document.querySelectorAll('#demo.lali')[0].innerHTML = "As";


//  function ndryshoVlere(){

//     document.querySelector('#clickMe').innerHTML = "Changed!"
//  }


function ndryshoVlere(butoniIm){
    if(butoniIm.innerHTML == "Click me!")
    butoniIm.innerHTML = "Changed!"
    else 
    butoniIm.innerHTML = "Click me!"
}


function ndryshoNgjyre(){

    document.querySelector('ul').style.backgroundColor = "#75586e";
    document.getElementsByClassName('lali')[0].style.backgroundColor = "#d6d6d6"
    document.getElementsByClassName('lali')[0].style.marginTop = "20px"
    document.getElementsByClassName('lali')[1].style.backgroundColor = "#d6d6d6"
    document.getElementsByClassName('lali')[1].style.margin = "20px";
    document.getElementsByClassName('lali')[1].innerHTML = "E ndryshuar nga butoni!";
    document.getElementById('color_changer').style.display = "none"

}

document.getElementById('clickMe').addEventListener('dblclick', ndryshoNgjyre)


document.getElementById('demo').addEventListener('click', ndryshoNgjyre)
// document.getElementById('clickMe').addEventListener('dblclick', function(){
//     alert('aa')
// })



var prindi = document.getElementsByClassName('row')[0];

var iKrijuar = document.createElement('p');

var teksti = document.createTextNode('Ky eshte nje paragraf i ri.');


iKrijuar.appendChild(teksti);


var femija = document.querySelector('#ketu');

//prindi.replaceChild(iKrijuar, femija)

//fshihet elementi  document.querySelector('.row').remove() (fshihet bashke me gjithe femijet)
//prindi.removeChild(femija)


//prindi.appendChild(iKrijuar)


function isKeyPressed(eventi,butoniIm){

if(eventi.shiftKey){
    butoniIm.style.color = "red";
}

else if(eventi.ctrlKey){
    butoniIm.style.color = "blue";

}


}








