var request = require("request");
var config = require("./lib/config");
var print = require("./lib/print");

module.exports = function (word) {
    word = encodeURIComponent(word);
    request.get(config.city + word, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var cityResult = JSON.parse(body);
            if (cityResult.errNum == 0) {
                var options = {
                    url: config.weather + cityResult.retData.cityCode,
                    headers: {
                        "apikey": config.apikey
                    }
                };
                request.get(options, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        print.print(JSON.parse(body));
                    }
                });
            } else {
                console.log(cityResult.retMsg.red);
            }
        }
    });
};
