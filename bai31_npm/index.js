var readLineSync = require('readline-sync');
var pet = {};
var name = readLineSync.question('pet name:');
var gender = readLineSync.question('Pet gender: ');
var weight = readLineSync.question('weight: ');
pet.name = name;
pet.Gender = gender;
pet.Weight = parseInt(weight);
console.log(pet);