var fs = require("fs");

fs.readFile("mmr.txt", function(err, data) {
    if (err) throw err;

    var mmrMap = {

    };

    var fileContent = data.toString();
    var lines = fileContent.split("\n");

    var playerId = null;
    var regex = /\ *[0-9]+\) "([0-9]+)"/;

    for (var i = 0; i < lines.length; i++) {
        try {
            var matches = lines[i].match(regex);
            if (i % 2 == 0) {
                playerId = matches[1];
            } else {
                mmrMap[playerId] = parseInt(matches[1]);
            }
        } catch (err) {
            fs.writeFileSync("mmr.json", JSON.stringify(mmrMap, null, 2));
            console.log(lines[i]);
            console.log(matches);
            throw err;
        }
    }

    fs.writeFileSync("mmr.json", JSON.stringify(mmrMap, null, 2));
    console.log("end");
});
