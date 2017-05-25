var express = require('express');
var bodyParser = require('body-parser');
var fh = require('fh-mbaas-api');

var SAML_SERVICE = process.env.SAML_SERVICE;

if (!SAML_SERVICE || SAML_SERVICE === '') {
  console.error('SAML Service not configured - please set SAML_SERVICE env var');
}

var router = new express.Router();
router.use(bodyParser());

router.post('/session/login_host', function(req, res, next) {
  // Fetch the MBaaS SSO Service Host for the Client to use
  fh.service({
    "guid": SAML_SERVICE,
    "path": "/session/login_host",
    "method": "POST",
    "params": {
      token: req.body.token
    }
  }, function(err, body, service_res) {
    if (err) {
      // An error occurred
      console.log('Service call failed: ', err, service_res);
      
      next(err);
    } else {
      res.json({
        "sso": body.host
      });
    }
  });
});

router.post('/session/valid', function(req, res, next) {
  console.log('/session/valid', req.body);
  // As the SSO Service if this device has a current session
  fh.service({
    "guid": SAML_SERVICE,
    "path": "/session/valid",
    "method": "POST",
    "params": {
      token: req.body.token
    }
  }, function(err, body, service_res) {
    console.log('call', body, service_res);
    if (err) {
      // An error occurred
      console.log('Service call failed: ', err, service_res);

      next(err);
    } else {
      res.json(body);
    }
  });
});

module.exports = router;