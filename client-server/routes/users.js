var express = require('express');
var assert = require('assert');
var restify = require('restify-clients')
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://127.0.0.1:4000'
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  client.get('/users', function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  })
});

router.get('/:id', function (req, res, next) {
  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  })
});

router.put('/:id', function (req, res, next) {
  client.put(`/users/${req.params.id}`, req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  })
});

router.delete('/:id', function (req, res, next) {
  client.del(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  })
});

router.post('/:id', function (req, res, next) {
  client.post(`/users`, req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  })
});

module.exports = router;
