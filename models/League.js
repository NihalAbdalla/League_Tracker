const mongoose = require('mongoose');
// const league = require('./league');

const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: {
        type: String,
    },
   
    image: {
        type: String
    },

});

const league = mongoose.model("League", leagueSchema);

module.exports = league;