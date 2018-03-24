var print = require("./print");
module.exports = function(city) {
    if (!city) {
        city = "ip";
    }

    const UID = "U785B76FC9";
    const KEY = "4r9bergjetiv1tsd";
    const ERROR_INFO = "我不是故意的......但臣妾真的查不到(✿◡‿◡)";
    var Api = require('./lib/api.js');
    var api = new Api(UID, KEY);

    api.getWeatherNow(city).then(function(data) {
        print.printToday(data, null, 4);
        api.getSuggestion(city).then(function(data) {
            print.printSuggestion(data);
            api.getDaily(city).then(function(data) {
                print.printDaily(data);
            }).catch(function() {
               console.log(ERROR_INFO.red);
            });
        }).catch(function() {
           console.log(ERROR_INFO.red);
        });
    }).catch(function() {
       console.log(ERROR_INFO.red);
    });
};