//Javascript Constructor
function person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

    this.toString =  function(){
      return "This is the person called " + first + " " +
        last + " with " + age + " years and an eye color of " +
        eye;
    }
}

var myFather =  new person("John","Doe",50,"blue");
var myMother = new person("Sally","Rally",48,"green");
console.log(myFather.toString());

var listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1-1]);
//You can do some kinds of calculations on the index of the array

//Almost every Javascript values have properties with the
//the exception of null and undefined
/*Difference between
value.x
  value.x gets the property x of the value
  x has to be a valid variable name
and
value[x]
  value[x] evalutes the expression and gets the property of the
    value returned by the expresssion.
    on the value[x]. x can be any value, "2" and "John Doe"
    but you can use those values as dot operator because they're not
    values variable names.
*/
var doh = "Doh";
console.log(typeof doh.toUpperCase);
//Gets the typeof of the variable we just provided.
console.log(doh.toUpperCase());

//Some methods of the arrays

var mack = []
mack.push("Mack");
//Inserts the value un the arrays, can take various arguments
mack.join(" ");
//Glues the elements of the array with the given arguments
mack.pop();
//Takes the last inserted item in the array, deletes it from the array
//and the values is returned
