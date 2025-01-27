const elemento = document.createElement('to-do-list');
const button = document.querySelector('.add-task');
const input = document.querySelector('.write-task');
const listaCom = document.querySelector('.list-task');

let lista = []


function addtarefa(){
    lista.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrar()
}
function mostrar() {
    let newli = ''

    lista.forEach((item, index) => {
        newli = newli + `
            <li class="task ${item.concluida && "done"}">
            <img  src="./img/checked.png" onclick="concluir(${index})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" onclick="deleteitem(${index})">
            </li>
        
        `
    });
    listaCom.innerHTML = newli;
}
function deleteitem(index){
    lista.splice(index, 1)
    mostrar()

}
function concluir(index){

    lista[index].concluida = !lista[index].concluida
    mostrar()

}

button.addEventListener('click', addtarefa );
listaCom.appendChild(elemento);






