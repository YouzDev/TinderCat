
console.log(localStorage.getItem('favoris'));






$('#suivant').click(function() {

/*var image = localStorage.getItem('favoris');
var nom =  localStorage.getItem('favoris').name;
var age =  localStorage.getItem('favoris').age;
*/

var image 

var str = localStorage.getItem('favoris');
var res = str.split(",");

var length = res.length;

for(var i =1; i < length; i++){

document.getElementById("image").src += res[i];
/*document.getElementById("nom").innerHTML += "<strong>Nom : </strong>" + res[i];
document.getElementById("age").innerHTML += "<strong>Age : </strong>" + res[i];
*/
}



});

