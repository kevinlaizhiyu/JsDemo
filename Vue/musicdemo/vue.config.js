module.exports={
    lintOnSave:false,
    devServer:{
        proxy:{
            '/hehe':{
                target:'  ',//目标网址
                changeOrigin:true,
                pathRewrite:{
                    "^/hehe":''
                }
            }
        }
    }
}