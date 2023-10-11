class Tarefa{
    titulo;
    descricao;
    conluido;
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao
        this.conluido = false;
    }
}

class ToDoList{
    #tarefas = []; // como não recebe nada, não precisa de constructor 

    adicionarTarefas(titulo, descricao){
        const novaTarefa = new Tarefa(titulo, descricao)
        this.#tarefas.push(novaTarefa)
        console.log(`Nova tarefa adicionada: ${titulo}.`)
    }

    listarTarefas(){
        this.#tarefas.forEach((tarefa)=>{
            // let status;
            // if(tarefa.conluida){
            //     status = 'concluída';
            // } else {
            //     status = 'não concluída'
            // }

            const status = tarefa.conluida === true ? 'concluída' : 'não concluída' // condição ? consequencia se verdadeiro : consequencia se falso

            console.log(`${tarefa.titulo}: (${status}) ${tarefa.descricao}.`)
        })

    }

    marcarTarefaConcluida(titulo){
        const indexDaTarefa = this.#tarefas.findIndex((tarefa)=> tarefa.titulo === titulo);
        if (indexDaTarefa === -1){
            console.log(`Tarefa não encontrada: ${titulo}`)
        } else{
            this.#tarefas[indexDaTarefa].conluida = true;
            console.log(`Tarefa concluída: ${titulo}`)
        }
    }

    removerTarefa(titulo){
        // this.#tarefas.filter((tarefa) => tarefa.titulo !== titulo);
        // console.log(`Tarefa removida: ${titulo}.`)

        const index = this.#tarefas.findIndex((tarefa) => tarefa.titulo === titulo); 
        if (index !== -1) {    
            this.#tarefas.splice(index, 1);    
            console.log(`Tarefa removida: ${titulo}.`);  
        } else {    
            console.log(`Tarefa com o título "${titulo}" não encontrada.`);
        }
    }

    
}

const listaDeTarefas = new ToDoList();
console.log(listaDeTarefas)

listaDeTarefas.adicionarTarefas('Médico', 'marcar checkup anual')
listaDeTarefas.adicionarTarefas('comprar', 'sabonete líquido')
listaDeTarefas.listarTarefas()
listaDeTarefas.marcarTarefaConcluida('Médico')
listaDeTarefas.marcarTarefaConcluida('teste')

listaDeTarefas.removerTarefa('Médico')
console.log()
listaDeTarefas.listarTarefas()