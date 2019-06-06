const mongoose = require('mongoose');
const Person = mongoose.model('person');

async function getPeople () {
  return await Person.find();
}

async function addPerson(personObj) {
  const person = new Person(personObj);
  return await person.save();
}

async function deletePerson(personId) {
  try {
    await Person.deleteOne({ _id: personId });
    res.send(200);
  } catch(err) {
    res.status(500).json({ err });
  }
}

async function updatePerson({ _id, ...rest }) {
  return await Person.findOneAndUpdate({ _id }, rest, { new: true });
}

module.exports = {
  getPeople,
  addPerson,
  deletePerson,
  updatePerson,
};