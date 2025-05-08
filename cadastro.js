// js/cadastro.js
import { db } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

document.getElementById("formCadastro").addEventListener("submit", (e) => {
  e.preventDefault();

  const getValores = (nome) => {
    return Array.from(document.getElementsByName(nome))
      .map(input => input.value)
      .filter(value => value.trim() !== "");
  };

  const congregacao = {
    congregacao: document.getElementById("congregacao").value,
    cidade: document.getElementById("cidade").value,
    diasCulto: document.getElementById("diasCulto").value,
    diaRJM: document.getElementById("diaRJM").value,
    anciao: getValores("anciao"),
    coopOficio: getValores("coopOficio"),
    diacono: getValores("diacono"),
    coopJovens: document.getElementById("coopJovens").value
  };

  push(ref(db, "congregacoes"), congregacao)
    .then(() => {
      alert("Congregação cadastrada com sucesso!");
      document.getElementById("formCadastro").reset();
    })
    .catch((error) => {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Veja o console para detalhes.");
    });
});

