/*## Ćwiczenie 3

W pliku cwiczenie3.js możesz znaleźć przykładowy konstruktor dla Robota. Konstruktor oczekuje, że podasz tylko imię robota.
Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
Utwórz kilka robotów i poszukaj czy w napisanym kodzie nie ma jakiś błędów.
*/
var Robot = function(name) {
    this.name = name;
    this.isFunctional = true; /*  this.isFunctional = false; */
}

Robot.prototype.sayHi = function(toWho) {
    if (this.isFunctional === true) { /*brakowalo odwolania this*/
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function(newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname; /*brakowalo odwolania this*/
};

Robot.prototype.fixIt = function() {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};
// moja metoda
Robot.prototype.food = function() {
    // this.isFunctional = false
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " like spaghetti oil.")
    } else {
        console.log("Robot " + this.name + " doesn't eat at all");
    }
    // else dziala tylko wtedy gdy this.isFunctional = false jest w środku prototypu food!! inaczej zawsze pisze wersje z 1 warunku...?
};


var Kate = new Robot("Kate"); // tworzy nowy obiekt
Kate.sayHi("Eva");
// Robot Kate greets Eva

// if this.isFunctional = false
// Robot Kate is broken

Kate.changeName("Queen of the Universe");
// Robot Kate changes name to Queen of the Universe

Kate.fixIt();
// Robot Queen of the Universe was fixed

Kate.food();
// Robot Queen of the Universe like spaghetti oil.
//
