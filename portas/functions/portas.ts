import PortaModel from '../models/porta';

export function criarPortas(
  qtde: number,
  portaComPresente: number
): PortaModel[] {
  return Array.from({ length: qtde }, (_, index) => {
    const numero = index + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  }); //Gerar array baseado na quantidade e numero
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map((portaAtual) => {
    const igualAModificada = portaAtual.numero === portaModificada.numero;
    if (igualAModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.removerSelecao();
    }
  });
}
