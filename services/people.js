const mongoose = require('mongoose');
const Person = mongoose.model('person');

async function getPeople () {
  return await Person.find();
}

async function addPerson (personObj) {
  const person = new Person(personObj);
  return await person.save();
}

module.exports = {
  getPeople,
  addPerson
};