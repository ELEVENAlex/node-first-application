const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  scure: true,
  auth: {
    user: 'elevenpipeador@gmail.com',
    pass: 'wyedzuolprkidsrl'
  },
})

transporter.verify().then( () => {
  console.log('Listo para enviar mails')
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mailsent', function(req, res, next) {
  transporter.sendMail({
    from: ('<?>', [req.body.email]),
    to: 'elevenpipeador@gmail.com',
    Subject: 'ContactPage',
    text: req.body.content
  })

  res.send('Email enviado!');
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;