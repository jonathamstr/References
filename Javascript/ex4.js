function range(start,end,Step){
    array = []
    var step = Step !== undefined ? Step : 1;
    for(var i = start; passed(i,end,step) ; i+=step){
        array.push(i);
    }
    return array;
}

function passed(i,end,step){
    var res = step > 0 ? i<=end : i>=end;
    return res;
}
console.log(range(5,0,-2));

function sum(array) {
    var result = 0;
    for(var num in array){
        result += array[num];
    }
    return result;
}

console.log(sum(range(0,10)));
