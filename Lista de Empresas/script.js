function adicionar() {
    const inputTarefas = document.getElementById('tarefas')
    const lista = document.getElementById('listaTarefas')

    const texto = inputTarefas.value.trim()

    if (texto === "") {
        inputTarefas.innerHTML ="Digite uma tarefa antes de adicionar!"
        return
    }

    // Cria o novo item <li>
    const item = document.createElement('li')
    item.textContent = texto

    // Cria o botão de apagar
    const botaoApagar = document.createElement('button')
    botaoApagar.textContent = "Apagar"

    // Quando clicar no botão, remove o <li> pai dele
    botaoApagar.onclick = function() {
        item.remove()
    }

    // Coloca o botão dentro do item
    item.appendChild(botaoApagar)

    // Adiciona o item na lista
    lista.appendChild(item)

    // Limpa o campo de texto
    inputTarefas.value = ""
}