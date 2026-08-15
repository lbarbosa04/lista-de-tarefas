function adicionarSazonais() {

    const inputTarefas = document.getElementById('tarefasMes')
    const inputData = document.getElementById('dataTarefa')
    const inputVencimento = document.getElementById('vencimentoTarefa')
    const lista = document.getElementById('listaTarefas')

    const texto = inputTarefas.value.trim()
    const dataValor = inputData.value
    const vencimentoValor = inputVencimento.value

    if (texto === "" || !dataValor || !vencimentoValor) {
        alert("ERRO: Digite todas as informações")
        return
    }
    
    const partesData = dataValor.split('-')
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`

    let blocoDia = document.getElementById(`dia-${dataValor}`)

    if (!blocoDia) {
        blocoDia = document.createElement('details')
        blocoDia.id = `dia-${dataValor}`
        blocoDia.classList.add('bloco-dia')

        const tituloDia = document.createElement('summary')
        tituloDia.textContent = `Data: ${dataFormatada}`
        blocoDia.appendChild(tituloDia)

        const ulDia = document.createElement('ul')
        blocoDia.appendChild(ulDia)

        lista.appendChild(blocoDia)
    }

    const ulDoDia = blocoDia.querySelector('ul')

    const item = document.createElement('li')
    
    const spanTexto = document.createElement('span')
    spanTexto.textContent = texto
    item.appendChild(spanTexto)

    if (vencimentoValor) {
        const partesVenc = vencimentoValor.split('-')
        const vencFormatado = `${partesVenc[2]}/${partesVenc[1]}/${partesVenc[0]}`

        const badgeVencimento = document.createElement('small')
        badgeVencimento.textContent = `(Vence em: ${vencFormatado})`
        badgeVencimento.classList.add('vencimento-tag')
        item.appendChild(badgeVencimento)
    }

    const botaoApagar = document.createElement('button')
    botaoApagar.textContent = "Apagar"
    botaoApagar.classList.add('botao-apagar')
    botaoApagar.onclick = function() {
        item.remove()
        if (ulDoDia.children.length === 0) {
            blocoDia.remove()
        }
    }

    const botaoConcluido = document.createElement('button')
    botaoConcluido.textContent = "Concluido"
    botaoConcluido.classList.add('botao-concluido')
    botaoConcluido.onclick = function() {
        item.classList.toggle('concluido')
    }     
    
    item.appendChild(botaoApagar)
    item.appendChild(botaoConcluido)
    
    ulDoDia.appendChild(item)
     
    inputTarefas.value = ""
    inputVencimento.value = ""
}