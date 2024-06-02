// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import casaMikeYakaites from "./assets/casaMikeYakaites.jpg";
import bookPixabay from "./assets/bookPixabay.jpg";
import espelhoNadineWuchenauer from "./assets/espelhoNadineWuchenauer.jpg"
import "./App.css"

const App = () => {
  const [step, setStep] = useState(1);
  const [generoEscolhido, setGeneroEscolhido] = useState('');
  const [objetoHistoria, setObjetoHistoria] = useState('');
  const [fotoHistoria, setFotoHistoria] = useState({foto: "", creditos: ""});


  const handleGeneroEscolha = (num) => {
    const generos = ['Fantasia', 'Terror', 'Ficção Científica'];
    setGeneroEscolhido(generos[num - 1]);
    setStep(2);
  };

  const handleObjetoEscolha = (num) => {
    const objetos = ['Casa Antiga', 'Espelho', 'Livro'];
    const fotos = [casaMikeYakaites, espelhoNadineWuchenauer, bookPixabay,];
    const creditos = ["Foto de uma casa de madeira antiga por Mike Yakaites", "Foto de um espelho redondo por Nadine Wuchenauer", "Foto de um livro aberto por Pixabay"]
    setObjetoHistoria(objetos[num - 1]);
    setFotoHistoria({foto: fotos[num-1], creditos: creditos[num-1]})

    setStep(4);
  };

  const renderStep1 = () => (
    <div className='container'>
      <h1>Abertura Generation!</h1>
      <p className='explicacao'>Hoje vamos trabalhar nosso trabalho em equipe escrevendo uma história juntes,<br/> mas antes disso as pessoas instrutoras precisam escolher um némero entre 1 e 3.</p>
      <p><b>Yuri</b>, escolha um número:</p>
      <button onClick={() => handleGeneroEscolha(1)}>1</button>
      <button onClick={() => handleGeneroEscolha(2)}>2</button>
      <button onClick={() => handleGeneroEscolha(3)}>3</button>
    </div>
  );

  const renderStep2 = () => (
    <div className='container'>
      <p>O gênero da história deverá ser:</p>
      <h1> {generoEscolhido}</h1>
      <button onClick={() => setStep(3)}>Continuar</button>
    </div>
  );

  const renderStep3 = () => (
    <div className='container'>
      <p><b>Camila</b> agora é a sua vez de escolher um número:</p>
      <button onClick={() => handleObjetoEscolha(1)}>1</button>
      <button onClick={() => handleObjetoEscolha(2)}>2</button>
      <button onClick={() => handleObjetoEscolha(3)}>3</button>
    </div>
  );

  const renderStep4 = () => (
    <div className='container'>
      <p>A história será sobre um/a:</p>
      <h1>{objetoHistoria}</h1>
      <img src={fotoHistoria.foto} alt={fotoHistoria.creditos} className="imagemObjeto"></img>
      <figcaption>{fotoHistoria.creditos}</figcaption>
      <button onClick={() => setStep(5)}>Continuar</button>
    </div>
  );

  const renderStep5 = () => (
    <div className='container'>
      <p className='explicacao'>Agora é a hora do trabalho em equipe!<br></br> Escrevam uma história de <b>{generoEscolhido}</b> sobre um/a <b>{objetoHistoria}</b></p>
      <textarea rows="10" cols="50" />
      <button onClick={() => setStep(1)}>Recomeçar</button>

    </div>
  );

  return (
    <div>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
      {step === 5 && renderStep5()}
    </div>
  );
};

export default App;
