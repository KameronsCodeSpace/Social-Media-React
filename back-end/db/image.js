
const knex = require('./connection');

module.exports = {

  getByUser: function(id){
    return knex('images').where('user_id', id);
  }
}