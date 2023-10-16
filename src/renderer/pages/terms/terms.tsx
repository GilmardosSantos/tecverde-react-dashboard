/* eslint-disable react/jsx-no-bind */
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFetch } from '../../services/useFetch';
import RcInput from '../../components/input/input';
import Termo from '../../models/termo';
import Equipamento from '../../models/equipamento';
import RcSelect from '../../components/select/select';
import RcAutoComplete from '../../components/autocomplete/autocomplete';
import Options from '../../models/options';
import { GlpiProvider, useGlpi } from '../../services/glpi.context';

function UnwrappedComponent() {
  const [termo, setTermo] = useState(new Termo());
  const [equipamento, setEquipamento] = useState(new Equipamento());

  function adicionarEquipamento(tipoAcao: string): void {
    console.log(equipamento);
    if (tipoAcao === 'retirada') {
      setTermo((prevVal) => ({
        ...prevVal,
        equipamentos: [...prevVal.equipamentos, equipamento],
      }));
    }
  }

  const tipoEquipamentoOptions: Options<any>[] = [
    new Options('Computer', 'Desktop', 'DES'),
    new Options('Computer', 'Notebook', 'NOT'),
    new Options('Phone', 'Celular', 'CEL'),
    new Options('Phone', 'Tablet', 'TAB'),
    new Options('Line', 'Linhas'),
  ];

  async function getEquipamentoOptions(tipoEquipamento: Options<any>) {
    const { filter, value } = tipoEquipamento;
    const URL_API = 'https://api.publicapis.org/entries';
    switch (value) {
      case 'Computer':
        fetch(URL_API)
          .then(async (response) => {
            if (!response.ok) throw new Error('Response error');
            const data = await response.json();
            console.log(data);
            return data;
          })
          .catch((err) => {
            console.error(err);
          });
        break;
      case 'Phone':
        break;
      case 'Line':
        break;
      default:
        break;
    }
    // switch(tipoEquipamento)
  }

  return (
    <div className="term-container rounded-md  flex gap-2 selection:bg-indigo-500 selection:text-indigo-800">
      <section className="wrapper rounded p-2 bg-indigo-950 flex flex-col flex-wrap gap-2 basis-1/2">
        <span className="title-wrapper flex justify-center">
          <h1 className="text-2xl font-sans font-semibold text-indigo-600">
            Gerador de Termos
          </h1>
        </span>
        <hr className="border-indigo-600" />

        <span className="text-2xl font-sans font-thin italic ml-2 text-indigo-600">
          <h1>Dados Cadastrais</h1>
        </span>
        <hr className="border-indigo-600 w-[225px] m-2" />

        <div className="dados-container flex flex-grow flex-wrap justify-between ml-4 overflow-hidden gap-1">
          <div className="item basis-[256px]">
            <RcInput
              name="nome"
              label="Nome Completo"
              model={termo.nome}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="numeroDocumento"
              label="N° do Documento"
              model={termo.numeroDocumento}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="emailPessoal"
              label="Email pessoal"
              model={termo.emailPessoal}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="numeroDocumento"
              label="N° do Documento"
              model={termo.numeroDocumento}
              setModel={setTermo}
            />
          </div>
        </div>
        <br />
        <span className="text-2xl font-sans font-thin italic ml-2 text-indigo-600">
          <h1>Endereço</h1>
        </span>
        <hr className="border-indigo-600 w-[225px] m-2" />
        <div className="endereco-container flex flex-grow flex-wrap justify-between ml-4 overflow-hidden gap-1">
          <div className="item basis-[256px]">
            <RcInput
              name="cep"
              label="Cep"
              model={termo.endereco.cep}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="rua"
              label="Rua"
              model={termo.endereco.rua}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="numero"
              label="Numero"
              model={termo.endereco.numero}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="bairro"
              label="Bairro"
              model={termo.endereco.bairro}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="cidade"
              label="Cidade"
              model={termo.endereco.cidade}
              setModel={setTermo}
            />
          </div>
          <div className="item basis-[256px]">
            <RcInput
              name="estado"
              label="Estado"
              model={termo.endereco.estado}
              setModel={setTermo}
            />
          </div>
        </div>
        <br />
        <span className="text-2xl font-sans font-thin italic ml-2 text-indigo-600">
          <h1>Equipamentos</h1>
        </span>
        <hr className="border-indigo-600 w-[225px] m-2" />
        <div className="equipamentos-container flex flex-grow flex-wrap justify-between ml-4 overflow-hidden gap-1">
          <div className="item basis-[256px]">
            <RcAutoComplete
              label="Tipo do Equipamento"
              model={equipamento.tipoEquipamento}
              setModel={setEquipamento}
              onChange={getEquipamentoOptions}
              name="tipoEquipamento"
              options={tipoEquipamentoOptions}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              name="patrimonio"
              label="Patrimonio"
              model={equipamento.patrimonio}
              setModel={setEquipamento}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              name="marca"
              label="Marca"
              model={equipamento.marca}
              setModel={setEquipamento}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              name="modelo"
              label="Modelo"
              model={equipamento.modelo}
              setModel={setEquipamento}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              name="Serial"
              label="Serial"
              model={equipamento.serial}
              setModel={setEquipamento}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              name="estadoEquipamento"
              label="Estado do Equipamento"
              model={equipamento.estadoEquipamento}
              setModel={setEquipamento}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              name="observacao"
              label="Observacao"
              model={equipamento.observacao}
              setModel={setEquipamento}
            />
          </div>
          <div className="item basis-[256px]">
            <RcAutoComplete
              label="Tipo do Equipamento"
              model={equipamento.tipoEquipamento}
              setModel={setEquipamento}
              name="tipoEquipamento"
            />
          </div>
        </div>
        <div className="buttons-container flex flex-grow flex-wrap justify-between w-[25%] ml-4 overflow-hidden gap-1">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              adicionarEquipamento('devolucao');
            }}
          >
            Retirada
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              adicionarEquipamento('retirada');
            }}
          >
            Devolução
          </Button>
        </div>
      </section>
      <section className="r_wrapper bg-red-800 rounded p-2 flex flex-col flex-wrap gap-2 flex-1">
        <span className="title-wrapper">
          <h1>Termos</h1>
        </span>
      </section>
    </div>
  );
}

function TermsComponent() {
  return (
    <GlpiProvider>
      <UnwrappedComponent />
    </GlpiProvider>
  );
}

export default TermsComponent;
