/**
 * Created by jh on 2018/3/6.
 */
let express = require('express');
let app = express();
app.listen(3000);
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

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

//商户详情
let info = require('./detail/info');
//通过id来获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(info);
});



//评价列表 id,页码page
let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(comment);
});

//订单列表 username
let orderList = require('./orderlist/orderList');
app.get('/api/orderList/:username',(req,res)=>{
    res.send(orderList);
});

//提交评论 body-parser req.body
app.post('/api/comment',(req,res)=>{
    console.log(req.body);
   res.send({msg:'ok'});
});


//fetch(url,{
//    Accept:"application/json"
//}).then(res=>res.json()).then(data=>{
//    console.log(data)
//})