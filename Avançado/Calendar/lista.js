const button = document.querySelector('.add-task');
const input = document.querySelector('.write-task');
const listaCom = document.querySelector('.list-task');
let selecDat = null;
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || {};
document.getElementById("calendarDays").addEventListener("click", function(event) {
    if (event.target.classList.contains('day')) {
        selecDat = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${event.target.textContent}`;
        mostrarTarefas();
    }
});

function addTarefa() {
    if (!tarefas[selecDat]) {
        tarefas[selecDat] = [];
    }
    
    tarefas[selecDat].push({
        tarefa: input.value,
        concluida: false
    });
    input.value = '';
    salvarTarefas();
    mostrarTarefas();
    atualizarCalendario();
}

function mostrarTarefas() {
    listaCom.innerHTML = '';
    if (selecDat && tarefas[selecDat]) {
        tarefas[selecDat].forEach((item, index) => {
            listaCom.innerHTML += `
                <li class="task ${item.concluida ? 'done' : ''}">
                    <img src="./img/checked.png" onclick="concluirTarefa('${selecDat}', ${index})">
                    <p>${item.tarefa}</p>
                    <img src="./img/trash.png" onclick="deletarTarefa('${selecDat}', ${index})">
                </li>
            `;
});
}
}

function deletarTarefa(data, index) {
    tarefas[data].splice(index, 1);
    if (tarefas[data].length === 0) delete tarefas[data];
    salvarTarefas();
    mostrarTarefas();
    atualizarCalendario();
}







function concluirTarefa(data, index) {
    tarefas[data][index].concluida = !tarefas[data][index].concluida;
    salvarTarefas();
    mostrarTarefas();
}
function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function atualizarCalendario() {
    document.querySelectorAll('.day').forEach(day => {
        const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day.textContent}`;
        if (tarefas[dateKey] && tarefas[dateKey].length > 0) {
            day.style.borderBottom = '3px solid green';
        } else {
            day.style.borderBottom = 'none';
        }
    });
}
button.addEventListener('click', addTarefa);
atualizarCalendario();