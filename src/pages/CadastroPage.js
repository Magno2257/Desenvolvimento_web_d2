import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VagasDisponiveis from '../components/VagasDisponiveis';
import FormularioCadastro from '../components/FormularioCadastro';
import Header from '../components/header';
import './Cadastro.css';

function CadastroPage() {
  const [vagasCadastradas, setVagasCadastradas] = useState(() => {
    const localData = localStorage.getItem('vagasCadastradas');
    return localData ? JSON.parse(localData) : [];
  });
  const vagasOcupadas = new Set(vagasCadastradas.map((vaga) => vaga.vaga));

  useEffect(() => {
    localStorage.setItem('vagasCadastradas', JSON.stringify(vagasCadastradas));
  }, [vagasCadastradas]);

  const handleCadastro = (formData) => {
    const vagaIndex = parseInt(formData.vaga, 10) - 1;
    if (vagasOcupadas.has(formData.vaga)) {
      alert('Esta vaga já está ocupada! Por favor, escolha outra vaga.');
      return;
    }

    setVagasCadastradas([...vagasCadastradas, formData]);
    alert('Reserva cadastrada com sucesso!');
  };

  return (
    <>
      <Header />
      <main>
        <VagasDisponiveis vagasOcupadas={vagasOcupadas} />
        <FormularioCadastro onCadastro={handleCadastro} />
      </main>
    </>
  );
}

export default CadastroPage;