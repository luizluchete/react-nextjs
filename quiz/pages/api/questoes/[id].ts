import questoes from '../bancoDeQuestoes';
export default function handler(req, res) {
  const idSelecionado = +req.query.id;
  const questaoExiste = questoes.filter(
    (questao) => questao.id === idSelecionado
  );
  if (questaoExiste.length === 1) {
    const questaoSelecionada = questaoExiste[0].embaralharRespostar();
    res.status(200).json(questaoSelecionada.converterParaObjeto());
  } else {
    res.status(204).send();
  }
}
