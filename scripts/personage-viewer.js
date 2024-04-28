document.addEventListener("DOMContentLoaded", function () {
  const personagem = JSON.parse(localStorage.getItem("personagem"));
  if (personagem) {
    document.getElementById("nome").textContent = personagem.nome;
    document.getElementById("especie").textContent = personagem.especie;
    document.getElementById("classe").textContent = personagem.classe;
    document.getElementById("habilidades").textContent = personagem.habilidades;
    document.getElementById("nivel").textContent = personagem.nivel;
    document.getElementById("forca").textContent = personagem.atributos.forca;
    document.getElementById("agilidade").textContent =
      personagem.atributos.agilidade;
    document.getElementById("craft").textContent = personagem.atributos.craft;
    document.getElementById("pericia").textContent =
      personagem.atributos.pericia;
    document.getElementById("coleta").textContent = personagem.atributos.coleta;
    document.getElementById("comunicador").textContent =
      personagem.atributos.comunicador;
  } else {
    alert("Nenhum personagem encontrado.");
  }
});

function aumentarAtributo(atributo) {
  const spanAtributo = document.getElementById(atributo);
  const valorAtual = parseInt(spanAtributo.textContent);
  if (valorAtual < 6) {
    spanAtributo.textContent = valorAtual + 1;
  } else {
    alert("Limite máximo de pontos atingido para este atributo.");
  }
}
