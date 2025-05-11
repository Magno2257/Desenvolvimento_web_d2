import React from 'react';

function InformacoesCadastro({ vagasCadastradas, onRemoverVaga }) {
  return (
    <section className="informacoes-cadastro">
      <h1>Informações do Cadastro</h1>
      {vagasCadastradas.length === 0 ? (
        <p>Nenhum cadastro realizado ainda.</p>
      ) : (
        vagasCadastradas.map((vaga, index) => (
          <div key={index}>
            <p>
              <strong>Vaga {index + 1}:</strong>
            </p>
            <p>
              <strong>Placa:</strong> {vaga.placa}
            </p>
            <p>
              <strong>Proprietário:</strong> {vaga.proprietario}
            </p>
            <p>
              <strong>Apartamento:</strong> {vaga.apartamento}
            </p>
            <p>
              <strong>Bloco:</strong> {vaga.bloco}
            </p>
            <p>
              <strong>Modelo:</strong> {vaga.modelo}
            </p>
            <p>
              <strong>Cor:</strong> {vaga.cor}
            </p>
            <p>
              <strong>Número da Vaga:</strong> {vaga.vaga}
            </p>
            <button
              className="remover-vaga btn-vermelho"
              onClick={() => onRemoverVaga(index)}
            >
              Remover
            </button>
            <hr />
          </div>
        ))
      )}
    </section>
  );
}

export default InformacoesCadastro;