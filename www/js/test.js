/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
*/

/*$("#barre").hide();*/
$(document).ready(function() {

/*console.log(localStorage.getItem('favoris'));*/

var favoris = [];
var blacklist = [];

favoris.push(localStorage['favoris']);
blacklist.push(localStorage['blacklist']);

/*favoris['url'].push(localStorage['favoris']['url']);
favoris['nom'].push(localStorage['favoris'['nom']]);
favoris['age'].push(localStorage['favoris'['age']]);*/
var img;
var nom;
var age;

function rappel(){
  
    $.getJSON("http://catinder.samsung-campus.net/proxy.php", {}, function (data) { 
     console.log(data);
     img = data.results[0].picUrl;
     nom = data.results[0].name;
     age = data.results[0].age;
    document.getElementById("image").src = img;
    document.getElementById("nom").innerHTML = "Nom : " +  nom;
    document.getElementById("age").innerHTML = "Age : " + age + " ans";


});
}


/*}*/
function stockage(){



 favoris.push(img, nom, age);
/*favoris['favoris'].push(img, nom, age);*/

            
            //console.log(array);
            localStorage['favoris'] = favoris;

            localStorage['favoris']

            if (localStorage) {
              localStorage['favoris'] = document.getElementById("favoris");
              localStorage.setItem('favoris', favoris);

              console.log(localStorage.getItem('favoris'));

}
}

/*function stockageblack(){



   blacklist.push(img, nom, age);


            
            //console.log(array);
            localStorage['blacklist'] = blacklist;

            localStorage['blacklist']

            if (localStorage) {
              localStorage['blacklist'] = document.getElementById("blacklist");
              localStorage.setItem('blacklist', blacklist);

              /*console.log(localStorage.getItem('blacklist'));*/
/*
}
localStorage.clear();

}*/

$('#accept').click(function() {

/*if(favoris.length != 0) {*/
   stockage();
/*}*/

rappel();
/*location.reload();*/

});

$('#refus').click(function(){

stockageblack();
rappel();
});

$('.burger-button').click(function() {

     $("#barre").animate({left: "0%"});
});

$('.favoris').click(function() {

     $("#favoris").animate({left: "0%"});
     $("#barre").animate({left: "-100%"});
      $("#blacklist").animate({left: "-100%"});
    });

$('.accueil').click(function() {

     $("#barre").animate({left: "-100%"});
     $("#favoris").animate({left: "-100%"});
    location.reload();
    });

$('.fleche').click(function() {

     $("#barre").animate({left: "-100%"});

    });

$('#refus').click(function() {

    stockage();
/*location.reload();*/

});

$('#suivant').click(function() {

affFav();
  });
/*
$('#suivant2').click(function() {

affBlack();
  });
*/
$('.blacklist').click(function() {

     $("#barre").animate({left: "-100%"});
     $("#blacklist").animate({left: "0%"});

});



function affFav(){

var str = localStorage.getItem('favoris');
var res = str.split(",");

var length = res.length;

console.log(length);


for(var i = 1; i < length ; i++ ){
  
var a = i + 1,
  b = a + 1;
console.log(length);
/*document.getElementById("image").src = res[i];*/
$("#favoris").append('<div><img src=" ' + res[i] + ' " id="image"/></div>');
$("#favoris").append('<li id="nom"> Nom : '+ res[a] +'</li>');
$("#favoris").append('<li id="age"> Age : '+ res[b] +'</li>');

i = i + 2;

}


}


/*function affBlack(){

var str = localStorage.getItem('blacklist');
var res = str.split(",");

var length = res.length;

console.log(length);


for(var i = 1; i < length ; i++ ){
  
var a = i + 1,
  b = a + 1;
console.log(length);
document.getElementById("image").src = res[i];
$("#favoris").append('<div><img src=" ' + res[i] + ' " id="image"/></div>');
$("#favoris").append('<li id="nom"> Nom : '+ res[a] +'</li>');
$("#favoris").append('<li id="age"> Age : '+ res[b] +'</li>');

i = i + 2;

}


}*/

rappel();

});


