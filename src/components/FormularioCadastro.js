import React, { useState } from 'react';

function FormularioCadastro({ onCadastro }) {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastro(formData);
  };

  return (
    <section className="formulario">
      <h1>Formulário de Cadastro</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="placa">Placa de veículo</label>
        <input type="text" name="placa" required id="placa" value={formData.placa} onChange={handleChange} />

        <label htmlFor="proprietario">Nome do proprietário</label>
        <input type="text" name="proprietario" required id="proprietario" value={formData.proprietario} onChange={handleChange} />

        <label htmlFor="apartamento">Número do apartamento</label>
        <input type="number" name="apartamento" required id="apartamento" value={formData.apartamento} onChange={handleChange} />

        <label htmlFor="bloco">Bloco do apartamento</label>
        <input type="text" name="bloco" required id="bloco" value={formData.bloco} onChange={handleChange} />

        <label htmlFor="modelo">Modelo do veículo</label>
        <input type="text" name="modelo" required id="modelo" value={formData.modelo} onChange={handleChange} />

        <label htmlFor="cor">Cor do veículo</label>
        <input type="text" name="cor" required id="cor" value={formData.cor} onChange={handleChange} />

        <label htmlFor="vagas">Número da vaga de estacionamento</label>
        <input type="number" name="vaga" required id="vagas" value={formData.vaga} onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}

export default FormularioCadastro;