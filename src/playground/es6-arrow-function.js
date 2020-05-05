// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));



const user = {
    name: 'bhavya',
    age: '17',
    location: 'bangalore'
  }
  const getLocation = () => <p>{user.location}</p>;
  const templateTwo = (
    <div>
      {user.name ? user.name : 'Anonymous'}
      {user.age && user.age > 18 && <p>Age:{user.age}</p>}
      {getLocation()}
    </div>
  );
