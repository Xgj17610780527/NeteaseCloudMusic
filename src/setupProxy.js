/**
 * Created by Administrator on 2019/9/16 0016.
 */
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    // proxy是一个函数，第一个参数是 前缀
    app.use("/identity",proxy({
        target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/identity":""
        }
    }))
}