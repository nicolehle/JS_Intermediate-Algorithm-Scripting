/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/


var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }

  this.getLastName = function() {
    return fullName.split(" ")[1];
  }

  this.getFullName = function() {
    return fullName;
  }

  this.setFirstName = function(name) {
    return fullName = name + " " + fullName.split(" ")[1];
  }


  this.setLastName = function(name) {
    return fullName = fullName.split(" ")[0] + " " + name;
  }

  this.setFullName = function(name) {
    return fullName = name;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
