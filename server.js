// set local variable populated by environment variable $FAVORITE_FOOD
const favoriteFood = process.env.FAVORITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    
    // start of updated code
    console.log(`My favorite food is ${favoriteFood}`);
    // end of updated code

    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
