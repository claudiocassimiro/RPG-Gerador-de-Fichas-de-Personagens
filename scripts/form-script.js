document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formFicha");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const classe = document.getElementById("classe").value;
    const habilidades = document.getElementById("habilidades").value;
    const nivel = document.getElementById("nivel").value;
    const forca = parseInt(document.getElementById("forca").value);
    const agilidade = parseInt(document.getElementById("agilidade").value);
    const craft = parseInt(document.getElementById("craft").value);
    const pericia = parseInt(document.getElementById("pericia").value);
    const coleta = parseInt(document.getElementById("coleta").value);
    const comunicador = parseInt(document.getElementById("comunicador").value);

    const totalAtributos =
      forca + agilidade + craft + pericia + coleta + comunicador;
    if (totalAtributos > 10) {
      alert("A soma dos atributos não pode exceder 10 pontos!");
      return;
    }

    const personagem = {
      nome,
      especie,
      classe,
      habilidades,
      nivel,
      atributos: {
        forca,
        agilidade,
        craft,
        pericia,
        coleta,
        comunicador,
      },
    };

    localStorage.setItem("personagem", JSON.stringify(personagem));

    window.location.href = "personage-viewer.html";
  });
});
