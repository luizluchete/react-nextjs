// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, nome: 'Caneta', preco: 5.6 },
    { id: 2, nome: 'Caderno', preco: 15.6 },
    { id: 3, nome: 'Borracha', preco: 2.6 },
    { id: 4, nome: 'Lapis', preco: 1.6 },
    { id: 5, nome: 'Bolsa', preco: 55.6 },
  ]);
}
