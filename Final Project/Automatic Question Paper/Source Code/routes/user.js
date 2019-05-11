var express = require('express');
var router = express.Router();
var Student = require('../models/Student');
var Faculty = require('../models/Faculty');
var FacultyCourse = require('../models/FacultyCourse');
var Course = require('../models/Course');
var StudentCourse = require('../models/StudentCourse');
var FacultyCourseQuestions = require('../models/FacultyCourseQuestions');
var MultipleQuestions = require('../models/MultipleQuestions');
var DescriptiveQuestions = require('../models/DescriptiveQuestions');

/* Get Students data */
router.get('/student/:uname/:upwd', function (req, res, next) {
  var query = { username: req.params.uname , user_password:req.params.upwd };
  Student.find(query,function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Get single user by ID */
router.get('/student/:id', function (req, res, next) {
  Student.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save user record */
router.post('/student', function (req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update user details */
router.put('/student/:id', function (req, res, next) {

  Student.findByIdAndUpdate(req.params.id,req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* Delete user record */
router.delete('/student/:id', function (req, res, next) {
  Student.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*----------------------------------------------------------------------------------------------------------------------------*/
/* Get Faculty data */
router.get('/faculty/:uname/:upwd', function (req, res, next) {
  var query = { username: req.params.uname , user_password:req.params.upwd };
  Faculty.find(query,function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Get single user by ID */
router.get('/faculty/:id', function (req, res, next) {
  Faculty.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save user record */
router.post('/faculty', function (req, res, next) {
  Faculty.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update user details */
router.put('/faculty/:id', function (req, res, next) {

  Faculty.findByIdAndUpdate(req.params.id,req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* Delete user record */
router.delete('/faculty/:id', function (req, res, next) {
  Faculty.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/* Courses */
router.get('/course/:id', function (req, res, next) {
  Course.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/course', function (req, res, next) {
  Course.find({}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/course', function (req, res, next) {
  Course.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*------------------------------------------------------------------------------------------------------------------------*/
//FacultyCourse
router.post('/facultycourse', function (req, res, next) {
  FacultyCourse.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/facultycourse/:fid', function (req, res, next) {
  var query = { fid : req.params.fid};
  FacultyCourse.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/facultycourse', function (req, res, next) {
  FacultyCourse.find({}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*------------------------------------------------------------------------------------------------------------------------*/
//StudentCourse
router.post('/studentcourse', function (req, res, next) {
  StudentCourse.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/studentcourse/:fcid', function (req, res, next) {
  var query = { fcid : req.params.fcid};
  StudentCourse.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/studentcourse/:fcid/:sid', function (req, res, next) {
  var query = { fcid : req.params.fcid,sid:req.params.sid};
  StudentCourse.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*------------------------------------------------------------------------------------------------------------------------*/
//FacultyCourseQuestions
router.post('/facultycoursequestions', function (req, res, next) {
  FacultyCourseQuestions.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/facultycoursequestions/:fcid', function (req, res, next) {
  var query = { fcid : req.params.fcid};
  FacultyCourseQuestions.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/facultycoursequestions/:fcid/:fc/:fct', function (req, res, next) {
  var query = { level : req.params.fc,fcid:req.params.fcid,dmq:req.params.fct};
  FacultyCourseQuestions.find(query, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*------------------------------------------------------------------------------------------------------------------------*/
//DescriptiveQuestions
router.post('/descriptivequestions', function (req, res, next) {
  DescriptiveQuestions.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/descriptivequestions/:id', function (req, res, next) {
  DescriptiveQuestions.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/*------------------------------------------------------------------------------------------------------------------------*/
//MultipleQuestions
router.post('/multiplequestions', function (req, res, next) {
  MultipleQuestions.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.get('/multiplequestions/:id', function (req, res, next) {
  MultipleQuestions.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
