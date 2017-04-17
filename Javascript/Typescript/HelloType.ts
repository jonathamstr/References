
function greeter(person:string){
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);
 //events.service.ts

import {Injectable } from "@angular/core";

@Injectable()
export class EventsService{
    events: Array<Event> = [
        {

        }
    ];

    getData(){
        return this.events;
    }
}