# Angular
## Events

To call a event we do it by the () parenthesis and we put the event there. We provide the name of the event we wanna call and we provide de argument
```javascript 
export class ContactFormComponent {
    log(x){
        console.log(x);
    }
}
```
To be call this way 
```html
<input ngControl="firstName" #firstName="ngForm" (change)="log(firstName)" id="firstName"/>
```

The temporary variable firstName is gonna have the value of ngForm that makes a reference to ngControl

To show a control in the diferent cases
```html
<div class="alert alert-danger" *ngIf="!firstName.valid"/>
```