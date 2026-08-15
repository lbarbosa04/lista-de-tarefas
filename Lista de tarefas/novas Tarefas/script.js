function adicionarSazonais(){

     const inputTarefas = document.getElementById('tarefasMes')
     const item = document.getElementById('listaTarefas')
     const texto = inputTarefas.value.trim()

         if(texto === ""){
            alert("ERRO: Digite uma tarefa...")
            return
         }
     
     const item = document.createElement('li')
     item.textContent = texto

         lista.appendChild(item)

     const botaoApagar = document.createElement('button')//criação do botão para apagar
         botaoApagar.textContent = "Apagar"
         botaoApagar.classList.add('botao-apagar')  //Para utilizar o CSS
 
             botaoApagar.onclick = function(){
                 item.remove()
             }

                 item.appendChild(botaoApagar)
                 item.appendChild(item)

     const botaoConcluido = document.createElement('button')
         botaoConcluido.textContent = "Concluido"
         botaoConcluido.classList.add('botao-concluido')
         
             botaoConcluido.onclick() = function(){
                item.classList.toggle('concluidp')
             }  
             
                 item.appendChild(botaoConcluido)     
     




    inputTarefas.value = ""
}