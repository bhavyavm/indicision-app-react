const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;

const isSenior = (age) => age > 60;

//named export 
export default isSenior;
export { isAdult, canDrink};

//default export
