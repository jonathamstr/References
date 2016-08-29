function gatherCorrelations(journal){
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++){
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++){
            var event = events[i];
            if(!(event in phis))
            phis[event] = phi(tableFor(event,journal));
        }
    }
    return phis;
}
var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);

for (var event in correlations){
    var correlation = correlations[event];
    if(correlation > 0.1 || correlation < -0.1)
    console.log(event + " : " + correlation);
}

for(var i = 0; i<JOURNALlength; i++){
    var entry = JOURNAL[i];
    if(hasEvent("peanuts",entry) &&
        !hasEvent("brushed teeth",entry))
        entry.event.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth",JOURNAL)));


//Another important thing to remember

var todoList = [];
function rememberTo(task){
    todoList.push(task);
}
function whatIsNext(){
    return todoList.shift();
}

function urgentlyRememberTo(task){
    todoList.unshift(task);
}

console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));


console.log([0,1,2,4,5].slice(2,4));

function remove(array,index){
    return array.slice(0,index)
        .concat(array.slice(index + 1));
}

console.log("one two three".indexOf("ee"));
console.log("   okay \n".trim());
//Takes whitespaces and linebreaks
var string = "abc";

string.length;
string.charAt(0);
string[1];

//The arguments Object
function noArguments(){}
noArguments(1,2,3); //This is okay
function threeArguments(a,b,c)
threeArguments(); //So is this

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");
// → You gave me 3 arguments.
function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza",
         "running", "television");
         //reads the first argument in the right way but the next arguments are read in with the arguments Object
         Math.max(maximum);
         Math.min(minimum);
         Math.sqrt(square root);
         Math.cos(cosine);
         Math.sin(sine);
         Math.tan(tangent);
         Math.PI;

         function randomPointOnCircle(radius) {
           var angle = Math.random() * 2 * Math.PI;
           return {x: radius * Math.cos(angle),
                   y: radius * Math.sin(angle)};
         }
         console.log(randomPointOnCircle(2));
         // → {x: 0.3667, y: 1.966}

console.log(Math.floor(Math.random() * 10));
//Rounds to the closest to the whole down number. Produces a number between zero and 9

console.log(Math.floor(Math.random() * 10));
var myVar = 10;
console.log("myVar" in window);
// → true
console.log(window.myVar);
// → 10
//Windows is the global object where the variables are stored.
