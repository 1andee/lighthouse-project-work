const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const userInput = process.argv.slice(2).join(" ");

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  console.log("Searching ...");

  client.query(`SELECT * FROM famous_people WHERE
    UPPER(last_name) LIKE UPPER('%${userInput}%') OR
    UPPER(first_name) LIKE UPPER('%${userInput}%')`, [], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log(`Found ${result.rowCount} person(s) by the name '${userInput}'`)
      if (!result.rowCount) {
        console.log(`Please try a different search.`)
      } else {
        let num = 1;
        result['rows'].forEach((record) => {
          let born = record.birthdate;
          console.log(`- ${num}: ${record.first_name} ${record.last_name}, born '${born.getFullYear()}-${born.getMonth()}-${born.getDate()}'`)
          num++;
        });
        console.log(`/----- End of results  -----\\`)
      }
      client.end();
    });
  });
