import Everything from './truth/everything';

const everything = new Everything();
const isFrozen = everything.getIsFrozen();

console.log(`The fact that everything is still frozen remains ${isFrozen}.`);
