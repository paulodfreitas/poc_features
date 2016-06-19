const extractMatchFeatures = require("./extract_match_features");
const fs = require("fs");
const zlib = require("zlib");
const JSONStream = require("JSONStream");
const InvalidMatch = require("./invalidMatch");

const outputFileName = "../matches.csv";

var JSONParser =  JSONStream.parse("*");

function listToString(list) {
    return list.join(", ")+"\n";
}

var nrParsedMatches = 0;
var invalidMatchesReasons = {};
invalidMatchesReasons[1] = 0;
invalidMatchesReasons[2] = 0;
invalidMatchesReasons[3] = 0;
invalidMatchesReasons[4] = 0;
invalidMatchesReasons[5] = 0;
invalidMatchesReasons[6] = 0;
invalidMatchesReasons[7] = 0;

JSONParser.on("data", function(match) {
    try {
        var teams = extractMatchFeatures(match);
        fs.appendFileSync(outputFileName, listToString(teams.RADIANT));
        fs.appendFileSync(outputFileName, listToString(teams.DIRE));
        nrParsedMatches++;
        if (nrParsedMatches % 100 == 0) {
            console.log(nrParsedMatches, " parsed matches.");
        }
    } catch (err) {
        if (err instanceof InvalidMatch) {
            invalidMatchesReasons[err.code]++;
        } else {
            console.log("Error on match: "+match.match_id, err);
            fs.writeFileSync("invalid_match.json", JSON.stringify(match, null, 4));
            throw err;
        }
    }
});

JSONParser.on("end", function() {
    console.log("Finished.");
    console.log("Print min max");
    console.log(invalidMatchesReasons);
});

var dumpFileName = "/home/paulo/yaspdump/yasp-dump-2015-12-18.json.gz";
var dumpStream = fs.createReadStream(dumpFileName);
dumpStream.pipe(zlib.createGunzip()).pipe(JSONParser);
