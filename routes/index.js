var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: '统一建模语言理论测试',
        head1:'西安软件服务外包学院',
        head2:'统一建模语言理论测试',
        subject:'考试科目：统一建模语言UML',
        time:'时间:100分钟',
        score:'得分：',
        class:'班级：',
        id:'学号：',
        name:'姓名：',
        topic1:'一&nbsp填空题(每题5分 共10分)',
        fill1:'1.UML的中文全称是：',
        fill2:'2.对象最突出的特征是：',
        topic2:'二&nbsp选择题(每题5分 共10分)',
        singleChoice1:'1.UML 与软件工程的关系是:',
        singleChoice1_a:'(A)&nbspUML 就是软件工程',
        singleChoice1_b:'(B)&nbspUML 参与到软件工程中软件开发过程的几个阶段',
        singleChoice1_c:'(C)&nbspUML 与软件工程无关',
        singleChoice1_d:'(D)&nbspUML 是软件工程的一部分',
        singleChoice2:'2.Java 语言支持:',
        singleChoice2_a:'(A)&nbsp单继承',
        singleChoice2_b:'(B)&nbsp多继承',
        singleChoice2_c:'(C)&nbsp单继承和多继承都支持',
        singleChoice2_d:'(D)&nbsp单继承和多继承都不支持'
    });
});

router.post('/', function (req, res) {

    console.log(req.body);
});

module.exports = router;