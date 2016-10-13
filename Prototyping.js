var Fruits = function(name, eatenTime, color, price){

    this.name = name;
    this.eatenTime = eatenTime;
    this.color = color;
    this.price = price;

};

Fruits.prototype.displayFruits = function() {

    document.write("<input type='text' size='180' value=\'" + this.name + "s" + " are eaten during " + this.eatenTime + " the " +
        this.color + " varies based on the fruit" +
        ", costs an average of $" + this.price.toFixed(2) + ", this is also based on the fruit that is bought." + "\'><br>" );
    this.launchFruits();

};

Fruits.prototype.launchFruits = function() {

    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text Area" + "</textarea><br>" );
    document.getElementById(this.name).innerHTML =   "Currently cannot eat a " + this.name;

};

function Pear(name, eatenTime, color, price, numberOfSeeds){

    Fruits.call(this, name, eatenTime, color, price);
    this.numberOfSeeds = numberOfSeeds;

}

Pear.prototype.constructor= Pear;

Pear.prototype.displayFruits = function () {

    document.write("<input type='text' size='180' value=\'" + this.name + "s" + " are eaten during " + this.eatenTime + ", they are the color " + this.color + "," +
        " they cost $" + this.price.toFixed(2) + " and have " +  this.numberOfSeeds + " seeds.\'><br>" );
    this.launchFruits();

};
Pear.prototype.launchFruits = function(){

    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text Area" + "</textarea><br>" );
    document.getElementById(this.name).innerHTML = "Cannot launch a " + this.name;
    var output = "";
    for(var pear = 1; pear <= 5; pear++) {
        output += "Pear " + pear + " eaten. " + "\n";
    }
    output += "Engage the pear!";
    document.getElementById(this.name).innerHTML = output;

};

function Apple(name, eatenTime, color, price, nbrMasts) {

    Fruits.call(this, name, eatenTime, color, price);
    this.nbrMasts = nbrMasts;

}

Apple.prototype= Object.create(Fruits.prototype);

Apple.prototype.constructor = Apple;

Apple.prototype.displayFruits = function() {

    document.write("<input type='text' size='100' value=\'" + this.name + "s" +
        " are eaten during " + this.eatenTime + ", they are the color " + this.color +
        ", they cost $" + this.price.toFixed(2)  + " and have " +
        this.nbrMasts + " seeds."  + "\'><br><br>");
    this.launchFruits();

};

Apple.prototype.launchFruits = function() {

    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Cutting off the skin.\n";
    output += "Slicing the apple into pieces\n";
    output += "Time to eat!";
    document.getElementById(this.name).innerHTML = output;

};

function Cherry(name, eatenTime, color, price, nbrSeeds) {

    Fruits.call(this, name, eatenTime, color, price);
    this.nbrSeeds = nbrSeeds;

}

Cherry.prototype = Object.create(Fruits.prototype);

// the subclass constructor
Cherry.prototype.constructor = Cherry;

Cherry.prototype.displayFruits = function() {

    document.write("<input type='text' size='100' value=\'" + this.name +
        " are eaten during " + this.eatenTime + ", they are the color " + this.color +
        ", they cost $" + this.price.toFixed(2)  + " and have " +
        this.nbrSeeds + " seed."  + "\'><br><br>");
    this.launchFruits();

};

Cherry.prototype.launchFruits = function() {

    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    for (var eat = 1; eat <= this.nbrSeeds; eat++) {
        output += "Eating " + eat + " cherry.\n";
    }
    output += "Spitting out the seed!";
    document.getElementById(this.name).innerHTML = output;

};

function Orange(name, eatenTime, type, price, nbrSeeds) {

    Fruits.call(this, name, eatenTime, type, price);
    this.nbrSeeds = nbrSeeds;

}

Orange.prototye = Object.create(Fruits.prototype);

Orange.prototype.constructor = Orange;

Orange.prototype.displayFruits = function() {

    document.write("<input type='text' size='100' value=\'" + this.name +
        " are eaten in the " + this.eatenTime + ", they are the color " + this.color +
        ", they cost $" + this.price.toFixed(2)  + " and have " +
        this.nbrSeeds + " seeds."  + "\'><br><br>");
    this.launchFruits();

};

Orange.prototype.launchFruits = function() {

    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Peeling the bitter tasting skin off.\n";
    output += "Splitting it into pieces to enjoy one slice per bit.\n";
    output += "It is now prepared to be eaten.";
    document.getElementById(this.name).innerHTML = output;

};

function main() {

    var fruitsArray = [];

    fruitsArray[0] = new Fruits("Fruit", "morning, lunch, snack time, or dinner,", "color", 1.00);
    fruitsArray[1] = new Pear("Pear", "lunch", "green", 1.00, 9);
    fruitsArray[2] = new Apple("Apple", "snack time", "red", .87, 17);
    fruitsArray[3] = new Cherry("Cherries", "dinner", "red", 1.83, 1);
    fruitsArray[4] = new Orange("Oranges", "morning", "orange", 1.14, "6-8");

    for (var i = 0; i < fruitsArray.length; i++) {
        fruitsArray[i].displayFruits();
    }

}