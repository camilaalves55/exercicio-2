import './style.css';
import React, { useState, useEffect } from 'react';

const ComponenteRelogio = () => {
  const [tempoAtual, setTempoAtual] = useState(new Date()); 
  const [mostrarMensagem, setMostrarMensagem] = useState(false); 

  useEffect(() => {
    const intervaloAtualizacao = setInterval(() => {
      setTempoAtual(new Date()); 
    }, 1000);

    return () => clearInterval(intervaloAtualizacao);
  }, []);

  useEffect(() => {
    setMostrarMensagem(true); 
    const tempoParaOcultarMensagem = setTimeout(() => {
      setMostrarMensagem(false); 
    }, 5000);

    return () => clearTimeout(tempoParaOcultarMensagem);
  }, []); 

  return (
    <div className="componente-relogio">
      <h1 className="relogio">{tempoAtual.toLocaleTimeString()}</h1>
      {mostrarMensagem && <p className="mensagem">Relógio em Tempo Real!</p>}
    </div>
  );
};

export default ComponenteRelogio;
