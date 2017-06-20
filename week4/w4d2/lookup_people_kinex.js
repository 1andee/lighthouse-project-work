const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  }
});

const userInput = process.argv.slice(2).join(" ");

console.log("Searching ...");

knex('famous_people')
.where('last_name', 'like', userInput)
.orWhere('first_name', 'like', userInput)
.then((result) => {
  console.log(result)
  console.log(`/----- End of results  -----\\`)
})
.then(function () {
  knex.destroy();
});
