//01获取元素
function $(selector,all){
    return all?document.querySelectorAll(selector):document.querySelector(selector)
}

//02获取任意对象的css属性
function getStyle(obj,attr){
   return window.getComputedStyle?window.getComputedStyle(obj)[attr]:obj.currentStyle[attr]
}

//03设定范围生成随机数
function ranNum(min,max){
    return min<max? Math.round(Math.random()*(max-min)+min):Math.round(Math.random()*(min-max)+max)
}
