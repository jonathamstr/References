# Javascript Notes
[Queso](#tasks)
This thing is used to make a map to be used, and inserts a varaible 
in the called key
```javascript
var map = {};
function storePhi(event,phi){
    map[event] = phi;
}

console.log("pizza" in map);
//Checks if the variable exists in the map
```

We can use the "in" key word to loop throught the data of a map
```javascript
for(var event in map){
    console.log(event);
}
```

To check the existance of a variable in a map or array we can use
the "indexOf" function
```javascript
events.indexOf(event) != -1;
//Returns true if the events exists in array events
```

Some array and map methods

```javascript
events.push(value);
//Puts the value in the last index of the array
events.shift();
//Returns the value if the first element of the array
events.unshift(value);
//Puts the value in the first position of the array.
array.lastIndexOf2(2);
//Returns the last index of the value in the array.
array.slice(2,4);
//First value is where to cut, and the second where to end the
//slice 
array.slice(2);
//cuts from 2 to the end of the array
function remove(array,index){
    return array.slice(0.index)
        .concat(array.slice(index + 1));
}
//Removes the element from the list.
```

```javascript
console.log(typeof 4.5);
//Gets the type of the variable
confirm("Shall we,then?");
//True if the user selects ok
prompt("Insert the value");
//Shows a dialog for the user to insert in the value
switch(prompt("What is the weather like")){
    case "rainy":
    break;
    default:
    break;
}
```

Some functionts to use 
-----------------------

```javascript
square(12);
string.charAt(0); //Returns the position zero
range(1,10) //Returns an array from 1 to 9 
sum(range(1,10)) //Sums the values in the array
forEach(array,action); //The function action is passed 
//each value of the array
array.forEach(function)
//Function to call for each value in the array
```

Higher order Functions

    So this are used to return functions as the return values
    of another function that gives another level of abstraction
    to the usage of the functions we can call

```javascript
function greaterThan(n){
    return function(m){return m > n; };
}

var greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));
```

```javascript

```

We could add a bunch of arguments to the inner function(arg1,arg2 and so on)
and pass them all to f, but is not clear how many would be enough.
This solution would also deprive f of the information.

[1]:tasks