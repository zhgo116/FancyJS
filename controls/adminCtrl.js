/**
 * Created by caosheng on 16-12-14.
 *
 */
var express = require('express');
var router = express.Router();
var setting=require('../config/settings');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('../views/manager/login', {title: 'Fancy后台首页',supplies:['mop','broom','duster'],page: 'index'});
});

module.exports = router;
