var reverseArray = function(array){
    var list = []
    for(var i = array.length - 1; i >= 0; i--){
        list.push(array[i]);
    }
    return list;
}

var list = ["a","b","c"];

console.log(reverseArray(list));

function reverserInPlace(array) {
    var size = Math.floor(array.length/2);
    for(var i = 0; i < 1 ; i++ ){
        var swap = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = swap;
    }
}

reverserInPlace(list);
console.log(list);

console.log(reverseArray(list));

function arrayToList(array) {
    var  lista = {}
    if (array.length > 1){
        lista = Node(array[0],arrayToList(array.slice(1)));
    }
    else{
        lista = Node(array[0],null);
    }
    return lista;
}

function Node(value,list){
    var thing = {};
    thing.value = value;
    thing.rest = list
    return thing
}
function listToArray(list) {
    var array = []
    array.append(list.value);
    if(list.rest == null)
}
var lista = arrayToList(list);
console.log(lista);
