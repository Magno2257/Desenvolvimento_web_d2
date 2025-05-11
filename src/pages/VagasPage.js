import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VagasDisponiveis from '../components/VagasDisponiveis';
import InformacoesCadastro from '../components/InformacoesCadastro';
import Header from '../components/header';

function VagasPage() {
  const [vagasCadastradas, setVagasCadastradas] = useState(() => {
    const localData = localStorage.getItem('vagasCadastradas');
    return localData ? JSON.parse(localData) : [];
  });

  const handleRemoverVaga = (index) => {
    const novasVagas = vagasCadastradas.filter((_, i) => i !== index);
    setVagasCadastradas(novasVagas);
  };

  useEffect(() => {
    localStorage.setItem('vagasCadastradas', JSON.stringify(vagasCadastradas));
  }, [vagasCadastradas]);

  const vagas = Array.from({ length: 20 }, (_, i) => i + 1);
  const vagasOcupadas = new Set(vagasCadastradas.map((vaga) => vaga.vaga));

  return (
    <>
      <Header />
      <main>
        <VagasDisponiveis vagasOcupadas={vagasOcupadas} />
        <InformacoesCadastro vagasCadastradas={vagasCadastradas} onRemoverVaga={handleRemoverVaga} />
      </main>
    </>
  );
}

export default VagasPage;