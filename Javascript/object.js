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
