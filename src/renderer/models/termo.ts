import Endereco from './endereco';

class Termo {
  constructor(
    public nome = '',
    public numeroDocumento = '',
    public emailProfisional = '',
    public emailPessoal = '',
    public tipoContrato = '',
    public cargo = '',
    public data = '',
    public endereco = new Endereco(),
    public equipamentos = '',
    public estadoEquipamento = '',
    public acao = [],
  ) {
    this.nome = nome;
    this.numeroDocumento = numeroDocumento;
    this.emailProfisional = emailProfisional;
    this.emailPessoal = emailPessoal;
    this.tipoContrato = tipoContrato;
    this.cargo = cargo;
    this.data = data;
    this.endereco = endereco;
    this.equipamentos = equipamentos;
    this.estadoEquipamento = estadoEquipamento;
    this.acao = acao;
  }
}

export default Termo;
