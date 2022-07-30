// TODO: Import the parent class
const boat = require('./vechicle.js')

// TODO: Create a `Boat` class that extends the `Vehicle` class
class boat extends vechicle {
  constructor()

};

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
