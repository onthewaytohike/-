var zz = [1, 1, '', 2, 3, 4, 5, 6, 5, 43, 2, 1];
        //数组去重
        var x = zz.reduce((prev, next) => {
            prev.indexOf(next) == -1 ? prev.push(next) : '';
            return prev;
        }, []);
        console.log(x);

        //数组重复项及计数
        let count = 0, repeatObj = {};
        var y = zz.reduce((prev, next) => {
            prev.indexOf(next) == -1 ? prev.push(next) : (repeatObj[next] = typeof repeatObj[next] == 'undefined' ? 2 : ++repeatObj[next]);
            return prev;
        }, []);
        console.log(repeatObj)
