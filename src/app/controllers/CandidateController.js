const CandidatesRepository = require('../repositories/CandidatesRepository');

class CandidateController {
  async index(request, response) {
    // Listar todos os candidatos
    const candidates = await CandidatesRepository.findAll();

    response.json(candidates);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;

    const candidate = await CandidatesRepository.findById(id);

    if (!candidate) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(candidate);
  }

  async store(request, response) {
    // Criar um registro
    const { name, partido, votos } = request.body;

    if (!name || !partido) {
      return response.status(400).json({ error: 'Name  or Partido is required' });
    }

    const nameExists = await CandidatesRepository.findByName(name);
    const partidoExists = await CandidatesRepository.findByPartido(partido);

    if (nameExists && partidoExists) {
      return response.status(400).json({ error: 'Partido and Name is exists' });
    }

    const candidate = await CandidatesRepository.create({ name, partido, votos });

    response.json(candidate);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;

    const { name, partido, votos } = request.body;

    const candidateExists = await CandidatesRepository.findById(id);

    if (!candidateExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name || !partido) {
      return response.status(400).json({ error: 'Name  or Partido is required' });
    }

    const nameExists = await CandidatesRepository.findByName(name);
    const partidoExists = await CandidatesRepository.findByPartido(partido);

    if ((nameExists && partidoExists) && (nameExists && partidoExists).id !== id) {
      return response.status(400).json({ error: 'Partido and Name is exists' });
    }

    const candidate = await CandidatesRepository.update(id, { name, partido, votos });

    response.json(candidate);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const candidate = await CandidatesRepository.findById(id);

    if (!candidate) {
      return response.status(404).json({ error: 'User not found' });
    }

    await CandidatesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CandidateController();
