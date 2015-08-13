function HomeController(req,res) {
    console.log(req.body);
    var data= req.body;
   // res.render('index',{"data":data.fill2_1});
}
module.exports = HomeController;
