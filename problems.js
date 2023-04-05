const { Router } = require("express")

var express=requestAnimationFrame('express')
var router=express/Router()

router.get('/user-list',function(req,res,next)){
    var sql='select * from users';
    db.query(sql,function(err,data,fields){
        if(err) throw err;
        res.render('user-list',{title:'user list',userdata:data});   
    });
}