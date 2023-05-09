const CandidatesRepository = require('../repositories/CandidatesRepository');

class CandidateController {
  index(request, response) {
    // Listar todos os candidatos
    const candidates = CandidatesRepository.findAll();

    response.json(candidates);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new CandidateController();
