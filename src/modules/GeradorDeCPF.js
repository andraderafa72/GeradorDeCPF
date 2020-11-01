import ValidadorDeCPF from './ValidadorDeCPF';

export default class GeradorDeCPF {

  // retorna os 9 primeiros digitos do CPF
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  // formata o CPF XXX.XXX.XXX-XX
  format(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  // GERA OS DOIS ULTIMOS DIGITOS, VALIDA E FORMATA O CPF
  gerarCPF() {
    const cpfGerado = this.rand();
    const primeiroDigito = ValidadorDeCPF.gerarDigito(cpfGerado)
    const segundoDigito = ValidadorDeCPF.gerarDigito(cpfGerado + primeiroDigito);
    const cpfFinal = cpfGerado + primeiroDigito + segundoDigito;
    return this.format(cpfFinal)
  }
}