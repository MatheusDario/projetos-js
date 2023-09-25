function main() {

    let tarefas = document.querySelector('.inputTar')
    let res = document.querySelector('.campoRes')

    function criaLi() {
        const lista = document.createElement('li')
        lista.setAttribute('class', 'list-group-item')
        return lista
    }

    function criaBtnCancel(li) {
        const btn = document.createElement('button')
        btn.innerText = 'Apagar'
        btn.setAttribute('class', 'apagar btn btn-outline-primary')
        li.appendChild(btn)
    }

    function criaTarefa(text) {
        let li = criaLi()
        li.innerText = text
        criaBtnCancel(li)
        res.appendChild(li)
        limpaInput()
        salvarTarefas()
    }

    function salvarTarefas() {
        const liTarefas = res.querySelectorAll('li')
        let listaDeTarefas = []

        for (let tarefa of liTarefas) {
            let tarefaTxt = tarefa.innerText
            tarefaTxt = tarefaTxt.replace('Apagar', '').trim()
            listaDeTarefas.push(tarefaTxt)
        }
       
        const tarefasJSON = JSON.stringify(listaDeTarefas)
        localStorage.setItem('tarefas', tarefasJSON)
        
    }

    function adicionaTarefaSalva() {
        const tarefas = localStorage.getItem('tarefas')
        const listaDeTarefas = JSON.parse(tarefas)
        
        for(let tarefas of listaDeTarefas) {
            criaTarefa(tarefas)
        }
    }

    adicionaTarefaSalva()

    function limpaInput() {
        tarefas.value = ''
        tarefas.focus()
    }

    function apagarTarefa(el) {
       el.parentElement.remove()
       salvarTarefas()
    }

    document.addEventListener('keypress', e => {
        if(e.key === "Enter") {
            if(!tarefas.value) return
            criaTarefa(tarefas.value)
        }
    })
  
    document.addEventListener('click', e => {
        const el = e.target
        if(!tarefas.value) return
        if(el.classList.contains('btnAdi')) { criaTarefa(tarefas.value) }
    })

    document.addEventListener('click', e => {
        let el = e.target
        if (el.classList.contains('apagar')) {  
            apagarTarefa(el)
        }
    })
}


main()