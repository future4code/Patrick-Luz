function criarTarefa() {
  const tarefa = document.getElementById("tarefa");
  const escolhaDia = document.getElementById("dias-semana").value;
  const listaTarefa = document.getElementById(escolhaDia);

  listaTarefa.innerHTML += `<li>${tarefa.value}</li>`;
  tarefa.value = "";
}
