
function adicionar() {

    const inputTarefas = document.getElementById('tarefas')
    const lista = document.getElementById('listaTarefas')

    const texto = inputTarefas.value.trim()

    if (texto === "") {
        alert("Digite uma tarefa antes de adicionar!")
        return
    }

    const item = document.createElement('li')
    item.textContent = texto

    const botaoApagar = document.createElement('button')
    botaoApagar.textContent = "Apagar"
    
 botaoApagar.style.backgroundColor = "#e74c3c"
 botaoApagar.style.color = "white"
 botaoApagar.style.border = "none"
 botaoApagar.style.padding = "5px 10px"
 botaoApagar.style.borderRadius = "4px"
 botaoApagar.style.cursor = "pointer"

    botaoApagar.onclick = function() {
        item.remove()
    }

    item.appendChild(botaoApagar)


    lista.appendChild(item)

    const concluido = document.createElement("button")
    concluido.textContent = "Concluido"

 concluido.style.backgroundColor = "#e74c3c"
 concluido.style.color = "white"
 concluido.style.border = "none"
 concluido.style.padding = "5px 10px"
 concluido.style.borderRadius = "4px"
 concluido.style.cursor = "pointer"
   
    concluido.onclick = function(){
        item.classList.toggle('concluido')
    }
    
    item.appendChild(concluido)

    inputTarefas.value = ""
}