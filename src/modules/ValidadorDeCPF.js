export default class ValidadorDeCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, ''); // REMOVE TUDO O QUE NÃO FOR NUMERO DA STRING CPF
      }
    });
  }

  // GERA NOVAMENTE OS DOIS ULTIMOS DIGITOS PARA CONFIRMAR O CPF
  validar() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length != 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // remove os dois ultimos digitos

    // gera os ultimos digitos novamente
    const primeiroDigito = ValidadorDeCPF.gerarDigito(cpfParcial);
    const segundoDigito = ValidadorDeCPF.gerarDigito(cpfParcial + primeiroDigito);

    // concatena e retorna se é igual ou não
    const cpfFinal = cpfParcial + primeiroDigito + segundoDigito;
    return (this.cpfLimpo === cpfFinal);
  }

  static gerarDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfParcial.length + 1;

    const produto = cpfArray.reduce((acumulador, valor) => {
      acumulador += Number(valor) * regressivo;
      regressivo--;
      return acumulador;
    }, 0);

    const digito = 11 - (produto % 11);
    console.log(digito)
    return digito > 9 ? 0 : digito;
  }
}