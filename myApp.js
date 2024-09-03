const env = require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

// Task 1: Create Person Schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
})

// Task 2: Create Person model from the schema
const Person = mongoose.model("Person", personSchema);

// Task 3:
const createAndSavePerson = (done) => {
  const canNgo = new Person ({
    name: "Can Ngo",
    age: 33,
    favoriteFoods: ["pizza", "burger", "fries"]
  })
  canNgo.save(function(err, data){
    if (err) return console.log(err);
    done(null, data);
  })
};

// Task 4:
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if (err) return console.log(err);
    done(null , data);
  })
};

// Task 5:
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName },function(err, data){
    if (err) return console.log(err);
    done(null , data);
  })
};

// Task 6:
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food}, function(err, data){
    if (err) return console.log(err);
    done(null , data);
  })
};

// Task 7:
const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, data){
    if (err) return console.log(err);
    done(null /*, data*/);
  })
};

// Task 8:
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  findPersonById(personId, function(err, data){
    if (err) return console.log(err);
    data.favoriteFoods.push(foodToAdd);
    data.save(function(err, data){
      if (err) return console.log(err);
      done(null , data);
    })
  })
};

// Task 9:
const findAndUpdate = (personName, done, {}) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName},
    { age: ageToSet},
    { new: true },
    function (err, updateDoc){
      if (err) return console.log(err);
      done(null , updateDoc);
    })
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
