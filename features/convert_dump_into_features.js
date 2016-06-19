const extractMatchFeatures = require("./extract_match_features");
const fs = require("fs");
const zlib = require("zlib");
const JSONStream = require("JSONStream");

const outputFileName = "../matches.csv";

var JSONParser =  JSONStream.parse("*");

function listToString(list) {
    return list.join(", ")+"\n";
}

var nrParsedMatches = 0;

JSONParser.on("data", function(match) {
    var teams = extractMatchFeatures(match);
    fs.appendFileSync(outputFileName, listToString(teams.RADIANT));
    fs.appendFileSync(outputFileName, listToString(teams.DIRE));
    nrParsedMatches++;
    if (nrParsedMatches % 100 == 0) {
        console.log(nrParsedMatches, " parsed matches.");
    }
});

JSONParser.on("end", function() {
    console.log("Finished.");
    console.log("Print min max");
});

var dumpFileName = "/home/paulo/yaspdump/yasp-dump-2015-12-18.json.gz";
var dumpStream = fs.createReadStream(dumpFileName);
dumpStream.pipe(zlib.createGunzip()).pipe(JSONParser);
