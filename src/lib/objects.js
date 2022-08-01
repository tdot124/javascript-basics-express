const createPerson = (name, age) => {
  const obj = {
    name: name,
    age: age
  }
  return obj;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map (name => name.age);
};

const findByName = (name, people) => {
  const search = people.filter(arr => arr['name'] === name);
  return search[0];
};

const findHondas = cars => {
  return cars.filter(arr => arr['manufacturer'] === 'Honda');
};

const averageAge = people => {
  const agesArr = people.map(person => person.age);
  const totalAge = agesArr.reduce((acc,age) => acc + age);
  return totalAge / agesArr.length;  
};
 
const createTalkingPerson = (name, age) => {
  const obj = {
    name: name,
    age: age,
    introduce: function(person) {
      return 'Hi ' + person + ', my name is ' + this.name + ' and I am ' + this.age +'!';
    }
  }
  return obj;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
