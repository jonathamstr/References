var fs = require('fs');
var journal = [];

function addEntry(events,didITurnIntroASquirrel){
    journal.push({
      events: events,
      squirrel: didITurnIntroASquirrel
    });
}
//We create a function to insert the data to the journal
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
/*var s = JSON.stringify(journal);
fs.writeFile("journalEntry.json",s,function(err){
  if(err){
    return console.log(err);
  }
  console.log("The file was saved!");
})*/
function phi(table){
  return (table[3] * table[0] - table[2] * table[1])/
      Math.sqrt((table[2] + table[3])*
                (table[0] + table[1])*
                (table[1] + table[3])*
                (table[0] + table[2]));
}
console.log(phi([76,9,4,1]));

function hasEvent(event,entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0,0,0,0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if(hasEvent(event,entry)) index += 1;
    if(entry.squirrel) index +=2;
    table[index] += 1;
  }
  return table;
}

var map = {};
//You can access the values and create map values
//Use the values, we store the value as key -> value way
function storePhi(event,phi){
  map[event] = phi;
}

function Rabbit(type){
    this.type = type;
}
//Create a Constructor
Rabbit.prototype.speak = function (line) {
    console.log("The " + this.type + " rabbit says '"+
                line + "'");
};
//Adds a method to the prototype
Rabbit.prototype.teeth = "small";
//Adds the small feature to all the Rabbits but it can be overwrited
var killerRabbit =  new Rabbit("kiler");
killerRabbit.teeth = "long, sharp, and bloody";

Rabbit.prototype.dance = function() {
    console.log("The " + this.type + " rabbit dances a jig,");
};
//Adds the function to all the Rabbits

Object.defineProperty(Object.prototype, "hiddenNonsense",
                    {enumerable:false, value: "Hi"});
//Create a non enumable property that won't show in the
for(var name in map)
    console.log(name);
    //Gets the values inside map
map.hasOwnProperty("toString");
//Checks the existence of the value but that has been assined by propery and inheritance. Doesn't look and the prototypes
console.log("toString" in map);
//If we check the existence like that it'll return true.
for(var name in map){
    if (map.hasOwnProperty(name)) {
        // ...  this is an own property
    }
}
//Create an empty prototype
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
// → false
console.log("pizza" in map);
// → true
