
setInterval(() => {
    var d1 = new Date('2020-10-1 18:00:00');
    var d2 = new Date();
    var dayTime1 = d1.toLocaleDateString();
    var dayTime2 = d2.toLocaleDateString();//注意，转化成本地时间之后不能在进行加减计算，否则出来的结果就是NAN

    var Section = d1 - d2;
    var Seconds = parseInt(Section / 1000)

    var day = parseInt(Seconds / 86400)
    var hours = parseInt((Seconds % 86400) / 3600)
    var minutes = parseInt(((Seconds % 86400) % 3600) / 60)
    var sec = parseInt((((Seconds % 86400) % 3600) % 60))
    var str = '闭关还剩下' + day + '天' + hours + '小时' + minutes + '分钟' + sec + '秒';
    var showTime = $('.timeContainer').innerText; 
   
    showTime=str
    console.log(showTime)
}, 1000);

console.log(window.reload(true))