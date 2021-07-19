import Questao from '../components/Questão';
import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor ?', [
    RespostaModel.errada('preto'),
    RespostaModel.errada('verde'),
    RespostaModel.errada('vermelho'),
    RespostaModel.certa('amarelo'),
  ]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questao valor={questaoTeste}></Questao>
    </div>
  );
}
