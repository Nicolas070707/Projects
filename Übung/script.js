let x = document.getElementById('add1').value;
let y = document.getElementById('add2').value;
let z = document.getElementById('opRes');
x = x.replace(/,/, ".");     // Ersetzt ein Komma in der 
y = y.replace(/,/, ".");     // Zahl durch einen Dezimalpunkt

if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
  z.value = "Fehler: keine Zahl";
} else {
  z.value = parseFloat(x) + parseFloat(y);
}