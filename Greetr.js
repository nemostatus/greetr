(function(global,$){
  var Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName,lastName,language)
  } //coding it this way so the new keyword doesnt have to be used all the time

  Greetr.prototype = {}; //prototype of all object below

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