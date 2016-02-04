/*jslint browser: true node:true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

    "use strict";
    var favoris = [];
    var blacklist = [];

    favoris.push(localStorage.favoris);
    blacklist.push(localStorage.blacklist);


    var img;
    var nom;
    var age;
    var i;
    var a;
    var b;

    function rappel() {
  
        $.getJSON("http://catinder.samsung-campus.net/proxy.php", {}, function (data) { 
            console.log(data);
            img = data.results[0].picUrl;
            nom = data.results[0].name;
            age = data.results[0].age;
            document.getElementById("image").src = img;
            document.getElementById("nom").innerHTML = "Nom : " + nom;
            document.getElementById("age").innerHTML = "Age : " + age + " ans";
        });
    }



    function stockage() {



        favoris.push(img, nom, age);

        localStorage.favoris = favoris;

        if (localStorage) {
            
            localStorage.setItem('favoris', favoris);

            console.log(localStorage.getItem('favoris'));
        }
    }

    function blackliststock() {



        blacklist.push(img, nom, age);

        localStorage.blacklist = blacklist;

        if (localStorage) {
            localStorage.setItem('blacklist', blacklist);
            console.log(localStorage.getItem('blacklist'));
        }
    }   

    $('#accept').click(function () {

        stockage();
        rappel();


    });

    $('#refus').click(function () {

        blackliststock();
        rappel();
    });

    $('.burger-button').click(function () {

        $("#barre").animate({left: "0%"});
    });

    $('.favoris').click(function () {

        $("#favoris").animate({left: "0%"});
        $("#barre").animate({left: "-100%"});
        $("#blacklist").animate({left: "-100%"});
    });

    $('.accueil').click(function () {

        $("#barre").animate({left: "-100%"});
        $("#favoris").animate({left: "-100%"});
        location.reload();
    });

    $('.fleche').click(function () {

        $("#barre").animate({left: "-100%"});

    });


    $('#suivant').click(function () {

        affFav();
    });
 
    $('#suivant2').click(function () {

        affBlack();
    });

    $('.blacklist').click(function () {

        $("#barre").animate({left: "-100%"});
        $("#blacklist").animate({left: "0%"});
        $("#favoris").animate({left: "-100%"});

    });



    function affFav() {

        var str = localStorage.getItem('favoris');
        var res = str.split(",");

        var length = res.length;



for (i = 1; i < length; i++){
  
        a = i + 1;
        b = a + 1;

        $("#favoris").append('<div><img src=" ' + res[i] + ' " id="image"/></div>');
        $("#favoris").append('<li id="nom"> Nom : ' + res[a] + '</li>');
        $("#favoris").append('<li id="age"> Age : ' + res[b] + '</li>');

        i = i + 2;

}

    }


    function affBlack() {

        var str = localStorage.getItem('blacklist');
        var res = str.split(",");

        var length = res.length;




for (i = 1; i < length ; i++){
  
        a = i + 1;
        b = a + 1;

        $("#blacklist").append('<div><img src=" ' + res[i] + ' " id="image"/></div>');
        $("#blacklist").append('<li id="nom"> Nom : ' + res[a] + '</li>');
        $("#blacklist").append('<li id="age"> Age : ' + res[b] + '</li>');

        i = i + 2;

        }

    }

    rappel();

});


