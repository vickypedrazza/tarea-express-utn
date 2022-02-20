router.get('/', function(req, res, next){
    res.render('index', {title: 'hola'});
});

module.exports = router;
