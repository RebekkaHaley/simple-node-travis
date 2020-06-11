// set local variable populated by environment variable $FAVOURITE_FOOD
const FAVOURITE_FOOD = process.env.FAVOURITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    
    // start of updated code
    console.log(`My favourite food is ${FAVOURITE_FOOD} <3`);
    // end of updated code

    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
