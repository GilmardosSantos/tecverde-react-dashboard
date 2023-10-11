class Endereco {
  constructor(
    public cep = '',
    public rua = '',
    public numero = '',
    public bairro = '',
    public cidade = '',
    public estado = '',
  ) {
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
}

export default Endereco;
