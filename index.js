var request = require("request");
var config = require("./lib/config");
var print = require("./lib/print");

module.exports = function (word) {
    if(!word){
        // get ip
        request.get(config.ipURL, function (error, response, body) {
            var ipResult = JSON.parse(body);
            var options = {
                url: config.ipToCityNameURL + ipResult.ip,
                headers: {
                    "apikey": config.ipToCityNameApiKey
                }
            };
            request.get(options, function (error, response, body) {
                var cityNameResult = JSON.parse(body);
                getDataByCityName(cityNameResult.retData.city);
            });
        });
    } else {
        word = encodeURIComponent(word);
        getDataByCityName(word);
    }
};

function getDataByCityName(word){
    word = encodeURIComponent(word);
    request.get(config.cityURL + word, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var cityResult = JSON.parse(body);
            if (cityResult.errNum == 0) {
                var options = {
                    url: config.weatherURL + cityResult.retData.cityCode,
                    headers: {
                        "apikey": config.weatherApikey
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
}
