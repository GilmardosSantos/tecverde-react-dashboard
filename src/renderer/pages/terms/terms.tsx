import { useState } from 'react';
import TextField from '@mui/material/TextField';
import RcInput from '../../components/input/input';
import Termo from '../../models/termo';

const bgColor = 'bg-[rgb(44,31,90)]';

function TermsComponent() {
  const [termo, setTermo] = useState(new Termo());
  return (
    <div className="term-container rounded-md  flex gap-2">
      <section className="wrapper rounded p-2 bg-indigo-950 flex flex-col flex-wrap gap-2 basis-1/2">
        <span className="title-wrapper flex justify-center">
          <h1 className="text-2xl font-sans font-semibold text-indigo-600">
            Gerador de Termos
          </h1>
        </span>
        <hr className="border-indigo-600" />
        <div
          id="dados-cadastrais"
          className="flex flex-grow flex-wrap overflow-hidden"
        >
          <span className="text-xl font-sans font-thin italic ml-2 text-indigo-600">
            <h1>Dados Cadastrais</h1>
          </span>
        </div>
        <div className="content-container flex flex-grow flex-wrap justify-center overflow-hidden">
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
      </section>
      <section className="r_wrapper bg-red-800 rounded p-2 flex flex-col flex-wrap gap-2 flex-1">
        <span className="title-wrapper">
          <h1>Termos</h1>
        </span>
      </section>
    </div>
  );
}

export default TermsComponent;
