
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.string('description');
      table.date('date_achieved');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {

};
