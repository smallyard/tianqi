var request = require("request");
var config = require("./config");
var print = require("./print");

module.exports = function (word) {
    if (word) {
        getDataByCityName(word);
    } else {
        request.get(config.ip.url, function (error, response, body) {
            var ipResult = JSON.parse(body);
            var options = {
                url: config.ipToCity.url + ipResult.ip,
                headers: {
                    "apikey": config.ipToCity.key
                }
            };
            request.get(options, function (error, response, body) {
                var cityNameResult = JSON.parse(body);
                getDataByCityName(cityNameResult.retData.city);
            });
        });
    }
};

function getDataByCityName(word) {
    word = encodeURIComponent(word);
    var options = {
        url: config.weather.url + word,
        headers: {
            "apikey": config.weather.key
        }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            print.print(JSON.parse(body));
        }
    });
}
