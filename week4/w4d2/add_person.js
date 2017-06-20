// const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  // port     : settings.port,
  // ssl      : settings.ssl
  }
});

const lastName = process.argv[2];
const firstName = process.argv[3];
const birthDate = process.argv[4];


knex('famous_people').insert({last_name: lastName, first_name: firstName, birthdate: birthDate})
console.log(`Inserting new famous person ${firstName} ${lastName}...`)
  .then((result) => {
    console.log(result);
  })
  .then(function () {
    knex.destroy();
  });
