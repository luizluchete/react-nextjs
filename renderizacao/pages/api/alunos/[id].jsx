export default function handler(req, res) {
  const id = +req.query.id;
  res.status(200).json({
    id,
    nome: `Luiz Vieira ${id}`,
    email: `asdasdasda@aluno.com.br ${id}`,
  });
}
