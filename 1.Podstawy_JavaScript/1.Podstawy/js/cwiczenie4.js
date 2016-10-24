/* ## Ćwiczenie 4
Napisz pętlę for, która będzie iterowała od 0 do 15. W każdej iteracji, sprawdź czy bieżąca liczba jest parzysta czy nieparzysta i wyświetl informacje w konsoli.
*/
var n = 15

// jeśli damy console.log z zerem przed for, to przy kazdej iteracji będziemy wykonywać jedno porównanie a nie dwa, przez co zwiększymy wydajność.
console.log("0 nie wiadomo czy parzyste czy nieparzyste");
for (var i = 1; i <= n; i++) {
    // if (i === 0) {
    // console.log(i + " " + "nie wiadomo czy parzyste czy nieparzyste");
    if (i % 2 === 0) {
        console.log(i + " " + "parzysta");
    } else {
        console.log(i + " " + "nieparzysta");
    }
}
