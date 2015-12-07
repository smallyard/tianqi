exports.print = function (data) {
    if (data.errNum == 0) {
        var today = data.retData.today;
        var todayStr = " " + data.retData.city.bold + "天气 ".bold + today.type.magenta;
        todayStr += "  当前温度 " + today.curTemp.green;
        todayStr += "  最低温度 " + today.lowtemp.blue;
        todayStr += "  最高温度 " + today.hightemp.red;
        todayStr += "  风力 " + today.fengli.yellow;
        console.log(todayStr);
        console.log();
        today.index.forEach(function(item, index){
            console.log(" " + (++index) + "." + item.name + " " + item.index.magenta + " " + item.details.gray);
            console.log();
        });


        var forecast = data.retData.forecast;
        console.log(" 未来四天预报~".cyan);
        console.log();
        forecast.forEach(function (data) {
            var str = " " + data.date + " " + data.type.magenta;
            str += " 最低温度 " + data.lowtemp.blue;
            str += "  最高温度 " + data.hightemp.red;
            str += "  风力 " + data.fengli.yellow;
            console.log(str);
            console.log();
        });
    } else {
        console.log(data.errMsg.red);
    }
};
