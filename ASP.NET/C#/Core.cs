//Using for importing packages and namespaces
Using System;


//Declare the namespace, aggregates together all the files with same namespace
namespace supermva{
    //The method is gonna call on startup

    static void Main(string[] args){
        
    }
}

//To save a configuration property on the program use 
//Change FirstUserSetting to anything you want.
Properties.Settings.Default.FirstUserSetting = "abc";  

//To save the properties
Properties.Settings.Default.Save();  

/