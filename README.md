# 📋 Lista de Tarefas Sazonais

Uma lista de tarefas (to-do list) simples, construída com **HTML, CSS e JavaScript puro** (sem frameworks ou bibliotecas externas). As tarefas são organizadas automaticamente em blocos por data, com opção de marcar como concluídas ou apagar.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

- ✅ Adicionar tarefas com título e data de vencimento
- 📅 Agrupamento automático das tarefas em blocos expansíveis (accordion) por dia
- ✔️ Marcar/desmarcar tarefas como concluídas
- 🗑️ Apagar tarefas individualmente
- 🧹 Remoção automática do bloco do dia quando fica vazio
- 🎨 Tema escuro (dark mode) por padrão
- 📱 Layout responsivo para telas menores

---

## 🖥️ Demonstração

```
┌─────────────────────────────────────┐
│         LISTA DE TAREFAS             │
├─────────────────────────────────────┤
│ [Adicionar Tarefa] [Vencimento] [+]  │
├─────────────────────────────────────┤
│ ▸ Data: 22/08/2026                   │
│   ┌───────────────────────────────┐ │
│   │ Comprar material escolar       │ │
│   │ (Vence em: 25/08/2026)         │ │
│   │           [Apagar] [Concluido] │ │
│   └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 📁 Estrutura do projeto

```
projeto/
├── index.html      # Estrutura da página
├── style.css        # Estilização (tema escuro)
└── script.js         # Lógica de adicionar/remover/concluir tarefas
```

---

## 🚀 Como usar

1. Baixe ou clone os arquivos do projeto.
2. Certifique-se de que os três arquivos (`index.html`, `style.css`, `script.js`) estejam na **mesma pasta**.
3. Abra o arquivo `index.html` diretamente no navegador (não precisa de servidor).
4. Preencha o campo de texto com o nome da tarefa.
5. Selecione a data de vencimento.
6. Clique em **"Adicionar"** (ou pressione Enter, se essa opção estiver habilitada).

> 💡 Não é necessário instalar nada — o projeto roda inteiramente no navegador.

---

## 🧠 Como funciona (resumo técnico)

A função principal, `adicionarSazonais()`, faz o seguinte:

1. Lê o texto da tarefa e a data de vencimento digitados pelo usuário.
2. Valida se ambos os campos foram preenchidos.
3. Verifica se já existe um bloco (`<details>`) para o dia atual na lista.
   - Se não existir, cria um novo bloco expansível com o título da data.
4. Cria o item da tarefa (`<li>`) contendo:
   - o texto da tarefa,
   - um selo (`<small>`) com a data de vencimento formatada,
   - um botão para apagar a tarefa,
   - um botão para marcar/desmarcar como concluída.
5. Insere o item dentro do bloco do dia correspondente.
6. Limpa os campos do formulário para a próxima tarefa.

Cada tarefa concluída recebe a classe CSS `.concluido`, que aplica um texto riscado e reduz a opacidade do item. Cada bloco de dia vazio (sem nenhuma tarefa) é removido automaticamente da tela.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página e formulário |
| CSS3 | Estilização, tema escuro, responsividade |
| JavaScript (Vanilla) | Manipulação do DOM, lógica de adicionar/remover tarefas |

---

## 📌 Possíveis melhorias futuras

- [ ] Persistência de dados (salvar tarefas no `localStorage` ou em um backend)
- [ ] Edição de tarefas já criadas
- [ ] Filtro para exibir apenas tarefas pendentes ou concluídas
- [ ] Validação de datas de vencimento no passado
- [ ] Notificações/alertas para tarefas próximas do vencimento

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.