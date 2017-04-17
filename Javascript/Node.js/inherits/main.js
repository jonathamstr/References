var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    EventEmitter.call(this);
    this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting);
    this.emit('greet', data);
}


var greeter1 = new Greetr();

greeter1.on('greet',(data) =>{
    console.log("Someone greeted!" + data);
})

greeter1.greet('Tony');

//---------------------------------- Objects

var obj = {
    name : 'John Doe',
    greet: function(){
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
//Replaces de object where to call de object
obj.greet.call({name: 'Jane Doe'});