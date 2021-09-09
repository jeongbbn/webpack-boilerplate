var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //index만 이렇게 해줘도 render가 되는 이유가 뭘까?
  //심지어 알아서 bundle된 애들로 render가 된다. (/dist/index.html)
  res.render('index', { title: 'Express' });
});

module.exports = router;
