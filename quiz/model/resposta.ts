export default class RespostaModel {
  #valor: string;
  #certa: boolean;
  #revelada: boolean;

  constructor(valor: string, certa: boolean, revelada = false) {
    this.#valor = valor;
    this.#certa = certa;
    this.#revelada = revelada;
  }

  static errada(enunciado: string) {
    return new RespostaModel(enunciado, false);
  }
  static certa(enunciado: string) {
    return new RespostaModel(enunciado, true);
  }

  get valor() {
    return this.#valor;
  }

  get certa() {
    return this.#certa;
  }

  get revelada() {
    return this.#revelada;
  }

  converterParaObjeto() {
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada,
    };
  }

  revelar() {
    return new RespostaModel(this.#valor, this.#certa, true);
  }
}
