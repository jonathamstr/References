 Angular App <a href="#tasks">Ir</a>
 [pookie](#tasks)
 * ##### provider()
    Creating services with it creates a configuring the provider

* ##### factory()
    Wrapper for the provider.

* ##### service()
    calls the factory function

* ##### value()
    calls factory()

* ##### const()
    Doesn't call the provider

# Services
<a name="tasks">
   my tasks
</a>
$provide
-------

    to know to create a Services
    The provide services creates a provider that then
    create a provider that creates a service to be provide

```javascript
$provider.provider('books',function(){
    this.$get = function(){
        var appName = 'Book Logger';
        return {
                appName: appName
        };
    }
});
```
# Using $provide.provider()
* Call the "provider" function on the $provide service
* Provider must define a "$get" function
* Service is the object returned from the $get function
* Configurable via the underlying provider

# Using $provide.factory
- Simpler version of provider when additional configuration is unnecessary
- Registers a service factory function that will return a service instance

*In big words, this one  create a instance*

# using $provide.service()
- Calls factory function which calls provider function
- Treats function it is passed as a constructor
- Executes constructor function with "new" operator
