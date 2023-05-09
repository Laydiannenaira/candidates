const { Router } = require('express');

const CandidateController = require('./app/controllers/CandidateController');

const router = Router();

router.get('/candidates', CandidateController.index);

module.exports = router;
