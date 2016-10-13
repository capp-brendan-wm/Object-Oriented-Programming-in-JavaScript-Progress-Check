var Fruits = function(name, eatenTime, type, price) {

    this.name = name;
    this.eatenTime = eatenTime;
    this.type = type;
    this.price = price;

};

Fruits.prototype.displayFruits = function() {

    document.write("<input type='text' size='100' value=\'" + this.name +
        ": eaten during " + this.eatenTime + ", it is categorized as a " + this.type + ", it costs $" +
        this.price.toFixed(2) + "\'><br><br>");
    this.launchFruits();

};

Fruits.prototype.launchFruits = function() {

    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.name).innerHTML = "A pear can be eaten almost at any time of the day, but it is preferred during " + this.eatenTime + ".";

};

function main() {

    var Fruits1 = new Fruits("Pear", "Lunch", "Fruit", 1.00);
    Fruits1.displayFruits();

}