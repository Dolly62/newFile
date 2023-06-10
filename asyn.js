console.log("Person1: shows ticket");
console.log("Person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const addButter = new Promise((resolve, reject) => resolve(`butter`));

  const getColdDrinks = new Promise((resolve, reject) => resolve(`Cold Drink`))

  let ticket = await promiseWifeBringingTickets;

  console.log(`wife: i have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: i got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife: no i need butter on my popcorn");

  let butter = await addButter;

  console.log(`husband: i got some ${butter} on popcorn`);
  console.log('husband: anything else');
  console.log('wife: Yes, i want cold drink');

  let coldDrink = await getColdDrinks;

  console.log(`husband: i got ${coldDrink}`);
  console.log('husband: anything else');
  console.log('wife: lets go we are getting late');
  console.log('husband: thank you for the reminder');

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("Person4: shows ticket");
console.log("Person5: shows ticket");
