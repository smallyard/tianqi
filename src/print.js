exports.printToday = function (data) {    var todayData = data.results[0];    var todayStr = "\n " + todayData.location.name.bold + "今天天气 ".bold + todayData.now.text.magenta         + "  当前温度 " + todayData.now.temperature.green + "℃".green;    console.log(todayStr);}exports.printSuggestion = function (data) {    var suggestion = data.results[0].suggestion;    console.log("\n 1.穿衣\t".bold + suggestion.dressing.brief.magenta);    console.log(" 2.紫外线强度\t".bold + suggestion.uv.brief.magenta);    console.log(" 3.感冒\t".bold + suggestion.flu.brief.magenta);    console.log(" 4.运动\t".bold + suggestion.sport.brief.magenta);    console.log(" 5.旅游\t".bold + suggestion.travel.brief.magenta);    console.log(" 6.洗车\t".bold + suggestion.car_washing.brief.magenta);}exports.printDaily = function (data) {    var daily = data.results[0].daily;    console.log();    daily.forEach(function (data) {        var str = " " + data.date.bold + " 白天 " + data.text_day.magenta+ " 晚上 " + data.text_night.magenta;        str += "  最高温度 " + data.high.blue + "℃".blue        str += "  最低温度 " + data.low.red + "℃".red        str += "  风力 " + data.wind_scale.yellow + "级".yellow        str += "  风速 " + data.wind_speed.yellow + "km/s".yellow        console.log(str);    });}