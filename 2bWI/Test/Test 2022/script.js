document.getElementById("button").addEventListener("click", function () {
    calc();
});

function calc() {
    let a = document.getElementById("in").value;


    let result = (a);
    let result1 = Math.round(result);

    if (result1 == 0) {
        console.log();
    } else if (result1 > 0) {
        for (let index = 0; index <= result1; index++) {
            console.log(index);
        }
    }

    document.getElementById("enterout").innerHTML = Hans;

}













