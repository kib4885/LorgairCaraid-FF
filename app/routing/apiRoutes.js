var foodieData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friendList", function (req, res) {
        res.json(foodieData);
        console.log(req)
    });
    // console.log(foodieData);
    
    app.post("/api/friendList", function (req, res) {
        
        var foodieInfo = reg.body;
        var leastDif = 41;
        var index = 0;

        for (var i = 0; foodieData.length > i; i++) {
            var difference = 0;
            for (var j = 0; j < foodieData[i].scores.length; i++) {
                var scoreComp = Math.abs(foodieData[i].scores[j] - newfoodie.scores[j]);
                difference += scoreComp;
            }
            console.log(foodieData[i].scores)
            if (difference < leastDif) {
                leastDif = difference;
                index = i;
            }
            console.log(index)
        }
        foodieData.push(foodieInfo);
        res.json(foodieData[index]);
    });
}