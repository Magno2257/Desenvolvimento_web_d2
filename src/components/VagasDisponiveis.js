import React from 'react';

function VagasDisponiveis({ vagasOcupadas }) {
  const vagas = [...Array(20)].map((_, i) => i + 1);

  return (
    <section className="container">
      <h1>Vagas Disponíveis</h1>
      <div className="flexbox">
        {vagas.map((numeroVaga) => (
          <div
            key={numeroVaga}
            style={{
              backgroundColor: vagasOcupadas.has(String(numeroVaga)) ? 'lightgreen' : '',
            }}
          >
            {numeroVaga}
          </div>
        ))}
      </div>
    </section>
  );
}

export default VagasDisponiveis;