function adicionarSazonais() {

    const hoje = new Date()

    const dia = String(hoje.getDate()).padStart(2, '0')   //padStart informa a data com dois numeros
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const ano = hoje.getFullYear()

    const inputTarefas = document.getElementById('tarefasMes')
    const inputVencimento = document.getElementById('vencimentoTarefa')
    const lista = document.getElementById('listaTarefas')

    const texto = inputTarefas.value.trim()  // Retira os espaços da string
    const vencimentoTarefa = inputVencimento.value

    // alerta se faltar alguma informação
    if (texto === "" || !vencimentoTarefa) {
        alert("ERRO: Digite todas as informações")
        return
    }

    const dataFormatada = `${dia}/${mes}/${ano}`   // para exibir (com barras)
    const dataValor = `${ano}-${mes}-${dia}`        // para usar como id (sem caracteres especiais)

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

    const partesVenc = vencimentoTarefa.split('-') 
    const vencFormatado = `${partesVenc[2]}/${partesVenc[1]}/${partesVenc[0]}`

    const badgeVencimento = document.createElement('small')
    badgeVencimento.textContent = `(Vence em: ${vencFormatado})`
    badgeVencimento.classList.add('vencimento-tag') //Style no CSS
    item.appendChild(badgeVencimento)

    const botaoApagar = document.createElement('button')
    botaoApagar.textContent = "Apagar"
    botaoApagar.classList.add('botao-apagar') //Style no CSS
    botaoApagar.onclick = function () {
        item.remove()
        if (ulDoDia.children.length === 0) {
            blocoDia.remove()
        }
    }

    const botaoConcluido = document.createElement('button')
    botaoConcluido.textContent = "Concluido"
    botaoConcluido.classList.add('botao-concluido') //Style no CSS
    botaoConcluido.onclick = function () {
        item.classList.toggle('concluido')
    }

    item.appendChild(botaoApagar)
    item.appendChild(botaoConcluido)

    ulDoDia.appendChild(item)

    //Limpas os campos depois de digitar
    inputTarefas.value = ""
    inputVencimento.value = "" 
}