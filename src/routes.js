const { Router } = require('express');

const CandidateController = require('./app/controllers/CandidateController');

const router = Router();

router.get('/candidates', CandidateController.index);
router.get('/candidates/:id', CandidateController.show);
router.delete('/candidates/:id', CandidateController.delete);
router.post('/candidates/', CandidateController.store);
router.put('/candidates/:id', CandidateController.update);

module.exports = router;
