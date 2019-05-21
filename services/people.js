const mongoose = require('mongoose');

const Person = mongoose.model('person');

async function getPeople () {
  return await Person.find();
}

module.exports = {
  getPeople
};