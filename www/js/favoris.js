
console.log(localStorage.getItem('favoris'));




var str = localStorage.getItem('favoris');
var res = str.split(",");

var length = res.length;



/*var str2 = localStorage.getItem('nom');
var res2 = str2.split(",");

var length2 = res2.length;*/



function affFav(){

/*var image = localStorage.getItem('favoris');
*/
/*var age =  localStorage.getItem('favoris').age;*/

/*var nom =  localStorage.getItem('favoris').name;
console.log(nom);
*/
console.log(length);


for(var i = 1; i < length ; i++ ){
	
var a = i + 1,
	b = a + 1;
console.log(length);
/*document.getElementById("image").src = res[i];*/
$("#favoris").append('<div><img src=" ' + res[i] + ' " id="image"/></div>');
$("#favoris").append('<li id="nom"> Nom : '+ res[a] +'</li>');
$("#favoris").append('<li id="age"> Age : '+ res[b] +'</li>');
/*console.log("i" , i ,"a" , a , "b" , b);*/
i = i + 2;

/*
document.getElementById("age").innerHTML += "<strong>Age : </strong>" + res[i];*/

}

/* $( "div" ).each(function( index, element ) {
*/






/*for(var i = 1; i != length2; i++){

$("#favoris").append('<div><li id="nom">'+ res2[i] +'</li></div>');

}*/

}


/*var str = localStorage.getItem('url');
var res = str.split(",");

var length = res.length;

for(var i =1; i < length; i++){

document.getElementById("image").src = res[1];

var str2 = localStorage.getItem('nom');
var res2 = str2.split(",")


document.getElementById("nom").innerHTML = "<strong>Nom : </strong>" + res2[1];
var str3 = localStorage.getItem('age');
var res3 = str3.split(",")




document.getElementById("age").innerHTML = "<strong>Age : </strong>" + res3[1];
*/