//获取某个月的最后一天 date 为传入时间
    function GetLastDate(date) {
        var dt = typeof date == 'undefined' ? new Date() : new Date(date);
        dt.setDate(1);
        dt.setMonth(dt.getMonth() + 1);
        var cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
        return cdt;
    }

    //获取某个月的第一天是周几和最后一天是周几 date 为传入月 2016-3
    //返回值 为对象 周天-0  周六-6
    function GetFOLWeek(date) {

        var firstWeek, lastWeek;
        var dt = typeof date == 'undefined' ? new Date() : new Date(date);
        dt.setDate(1);
        firstWeek = dt.getDay();
        dt.setMonth(dt.getMonth() + 1);
        var cdt = new Date(dt.getTime() - 1000 * 60 * 60 * 24);
        lastWeek = cdt.getDay();
        return { 'firstWeek': firstWeek, 'lastWeek': lastWeek };
    }

    //获取价格表的起始周日日期和最后周六日期
    function GetFOLDay(date) {

        var firstDate, lastDate;
        //第一天
        var dt = typeof date == 'undefined' ? new Date() : new Date(date);
        dt.setDate(1);
        firstDate = new Date(dt.getTime() - dt.getDay() * 1000 * 60 * 60 * 24);
        //最后一天
        var cdt = GetLastDate(date);
        lastDate = new Date(cdt.getTime() + (6 - cdt.getDay()) * 1000 * 60 * 60 * 24);
        return { 'firstDate': firstDate, 'lastDate': lastDate };

    }
