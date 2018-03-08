/**
 * Created by jh on 2018/3/6.
 */
let express = require('express');
let app = express();
app.listen(3000);

let ad =  require('./home/ad');
//广告接口
app.get('/api/ad',(req,res)=>{
    res.send(ad);
})

let list = require('./home/list');
//获取列表 需要传递城市,页码
app.get('/api/list/:city/:page',(req,res)=>{
    console.log(req.params.city);
    res.send(list);
})


//fetch(url,{
//    Accept:"application/json"
//}).then(res=>res.json()).then(data=>{
//    console.log(data)
//})