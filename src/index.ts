import Everything from '@/src/Everything';

const everything = new Everything();
const isFrozen = everything.getIsFrozen();

console.log(`The fact that everything is still frozen remains ${isFrozen}.`);
