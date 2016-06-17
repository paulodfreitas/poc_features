const extractMatchFeatures = require("../extract_match_features");
const fs = require('fs');

fs.readFile("../../sample_match.yasp", function(err, data) {
    if (err) throw err;
    var match = JSON.parse(data);
    var teams = extractMatchFeatures(match);
    console.log(teams.RADIANT);
    console.log(teams.DIRE);
});