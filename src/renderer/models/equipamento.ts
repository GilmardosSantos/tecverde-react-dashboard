class Equipamento {
  constructor(
    public serial: string = '',
    public marca: string = '',
    public modelo: string = '',
    public patrimonio: string = '',
    public produto: string = '',
    public observacao: string = '',
    public estadoEquipamento: string | string[] = '',
    public tipoEquipamento: string = '',
  ) {
    this.serial = serial;
    this.marca = marca;
    this.modelo = modelo;
    this.patrimonio = patrimonio;
    this.produto = produto;
    this.observacao = observacao;
    this.estadoEquipamento = '';
    this.tipoEquipamento = '';
  }
}
export default Equipamento;
