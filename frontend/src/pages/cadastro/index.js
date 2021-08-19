import "./cadastro.css";

const Cadastro = () => {
  function addUsuario(event) {
    event.preventDefault();

    let form = document.querySelector("form");

    const postUsuario = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: form.nome.value,
        sexo: form.sexo.value,
        email: form.email.value,
        senha: form.senha.value,
        telefone: form.telefone.value,
        cep: form.cep.value,
        cidade: form.cidade.value,
        estado: form.estado.value,
      }),
    };
    console.log(postUsuario);

    fetch("http://localhost:3001/usuarios", postUsuario)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .catch((error) => {
        form.reset();
        console.error("Falha inesperada: " + error);
      });
  }

  return (
    <div className="cadastro">
      <h1>Cadastro</h1>
      <form className="row g-2" onSubmit={addUsuario}>
        <div className="col-sm-9">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input type="text" name="nome" className="form-control" id="nome" />
        </div>
        <div className="col-sm-3">
          <label htmlFor="sexo" className="form-label">
            Sexo
          </label>
          <select
            type="select"
            name="sexo"
            className="form-select"
            id="sexo"
            placeholder="Sexo"
          >
            <option></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="senha" className="form-label">
            Senha
          </label>
          <input
            type="input"
            name="senha"
            className="form-control"
            id="senha"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="telefone" className="form-label">
            Telefone
          </label>
          <input
            type="input"
            name="telefone"
            className="form-control"
            id="telefone"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="cep" className="form-label">
            CEP
          </label>
          <input type="text" name="cep" className="form-control" id="cep" />
        </div>
        <div className="col-sm-6">
          <label htmlFor="cidade" className="form-label">
            Cidade
          </label>
          <input
            type="text"
            name="cidade"
            className="form-control"
            id="cidade"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="estado" className="form-label">
            Estado
          </label>
          <input
            type="text"
            name="estado"
            className="form-control"
            id="estado"
          />
        </div>

        <div className="col-sm-12 d-grid">
          <button
            className="btn btn-primary btn-block"
            type="submit"
            id="button"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
