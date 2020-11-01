import GeradorDeCPF from './modules/GeradorDeCPF';
import ValidadorDeCPF from './modules/ValidadorDeCPF';
import './assets/style/style.css';

const gerador = new GeradorDeCPF();
const cpfGerado = document.querySelector('.cpf-gerado');
const btnGerar = document.querySelector('.gerar-cpf');
const btnValidar = document.querySelector('.validar-cpf');
const inputCPF = document.querySelector('#cpf');
const divResultado = document.querySelector('.resultado');


let cpf = gerador.gerarCPF()
console.log(cpf)
cpfGerado.innerHTML = cpf

btnGerar.addEventListener('click', () => {
  cpf = gerador.gerarCPF()
  console.log(cpf)
  cpfGerado.innerHTML = cpf
});

btnValidar.addEventListener('click', (e) => {
  const cpfValue = inputCPF.value.replace(/\D+/g, '');

  if (cpfValue.length !== 11) {
    alert('CPF digitado inválido')
    return;
  };
  if (typeof cpfValue === 'undefined') {
    alert('CPF digitado inválido')
    return;
  };

  const resultado = new ValidadorDeCPF(cpfValue);

  if (resultado.validar()) {
    console.log('valido')
    divResultado.style.backgroundColor = 'green';
    divResultado.innerHTML = 'CPF Válido';
  } else {
    divResultado.style.backgroundColor = 'red';
    divResultado.innerHTML = 'CPF inválido';
  }
});
// const validador = new ValidadorDeCPF();