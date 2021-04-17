(function(global,$){
  var Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName,lastName,language)
  } //coding it this way so the new keyword doesnt have to be used all the time

  var supportedLanguages = ["en", "es"] //hidden to outside world, uses closure

  var greetings ={
en: 'Hello',
es: 'Hola'
  }; 

  var formalGreetings ={
en: 'greetings',
es: 'saludos'
  };

  var logMessages ={
      en: 'Logged In',
      es: 'Inicio sesion'
  }
  Greetr.prototype = {
fullName: function(){
    return this.firstName + ' ' + this.lastName;
},

validate: function(){
    if(supportedLanguages.indexOf(this.language) === -1){
throw "invalid message"
    }
},//throws error if language isnt found in supported languages arr

greeting: function(){
    return greetings[this.language] + ' ' + this.firstName + '!'
},

formalGreeting: function(){
return formalGreetings[this.language] + this.fullName()
}

  }; //prototype of all object below, methods go here

  Greetr.init = function(firstName,lastname,language){
     var self = this  //dont have to worry about what this is later
     self.firstName = firstName || '';
     self.lastname = lastname || '';
     self.language = language || 'en'
  }
  Greetr.init.prototype = Greetr.prototype
  global.Greetr = global.G$ = Greetr
}(window, jQuery));
//iife
//takes in global and jquery object and has window as global object