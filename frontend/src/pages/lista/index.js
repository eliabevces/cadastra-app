import React, { useEffect, useState } from "react";
import "./lista.css";

const Lista = () => {
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    const getUsuarios = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:3001/usuarios", getUsuarios)
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      });
  }, []);

  function buscaUsuario(event) {
    event.preventDefault();

    let form = document.querySelector("form");

    var url = new URL("http://localhost:3001/usuarios");

    var params = { nome: form.nome.value };


    url.search = new URLSearchParams(params).toString();

    fetch(url).then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      });
  }

  return (
    <div className="lista">
      <h1>Usuarios cadastrados</h1>

      <form className="searchBar" onSubmit={buscaUsuario}>
        <input type="text" placeholder="Nome completo" name="nome"  />
        <button type="submit" className="btn btn-primary btn-sm">
          Filtrar nome
        </button>
      </form>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios?.map((usuario, idx) => (
            <tr key={idx}>
              <th>{usuario.nome}</th>
              <th>{usuario.sexo}</th>
              <th>{usuario.email}</th>
              <th>{usuario.senha}</th>
              <th>{usuario.telefone}</th>
              <th>{usuario.cep}</th>
              <th>{usuario.cidade}</th>
              <th>{usuario.estado}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;
