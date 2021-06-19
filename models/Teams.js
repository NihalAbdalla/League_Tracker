const mongoose = require('mongoose');
// const playerStats = require('./playerStats');

const Schema = mongoose.Schema;

const teamsSchema = new Schema({
    team_name: {
        type: String,
        trim: true,
        required: "Enter a name for Teams"
    },
    image: {
        type: String
    },
    league_key: {
        type: String,
    },
    stats: {
        champions_won: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0
        },
        players: {
            name: String,
            type: Number,
            default: 0
        },
    }
});

const teams = mongoose.model("Teams", teamsSchema);

module.exports = teams;