document.getElementById("Schere").addEventListener("click", function() {

    console.log("Schere_Funktioniert");

});



document.getElementById("Stein").addEventListener("click", function() {

    console.log("Stein_Funktioniert");

});



document.getElementById("Papier").addEventListener("click", function() {

    console.log("Papier_Funktioniert");


});

function generate(){
console.log("clicked");
let randomNumber = Math.floor(Math.random() + 3);
console.log(randomNumber);

}

