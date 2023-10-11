const { Tarefa } = require("./Tarefa");

class ToDoList {
    #tarefas = [];

    adicionarTarefa(titulo, descricao) {
        const novaTarefa = new Tarefa(titulo, descricao);
        this.#tarefas.push(novaTarefa);
        console.log(`Nova tarefa adicionada: ${titulo}`);
    }

    listarTarefas() {
        if (this.#tarefas.length === 0) {
            console.log("Você não possui tarefas");
            return;
        } else {
            this.#tarefas.forEach((tarefa) => {
                const status =
                    tarefa.concluida === true ? "concluída" : "não concluída";
                console.log(`-${tarefa.titulo}: (${status}) -> ${tarefa.descricao}`);
            });
        }
    }

    marcarTarefaConcluida(titulo) {
        let tarefaEncontrada = false;

        for (const tarefa of this.#tarefas) {
            if (tarefa.titulo === titulo) {
                if (tarefa.concluida === true) {
                    console.log("Esta tarefa já está marcada como concluída");
                } else {
                    tarefa.concluida = true;
                    console.log(`Tarefa concluída: ${titulo}`);
                }
                tarefaEncontrada = true;
            }
        }

        if (!tarefaEncontrada) {
            console.log(`Tarefa com o título "${titulo}" não encontrada.`);
        }
    }

    removerTarefas(titulo) {
        this.#tarefas = this.#tarefas.filter((tarefa) => tarefa.titulo !== titulo)
        console.log(`Tarefa removida: ${titulo}`);
    }
}

const listaDeTarefas1 = new ToDoList();
listaDeTarefas1.adicionarTarefa("Compras", "compras de supermercado");
listaDeTarefas1.adicionarTarefa("Estudar", "Fazer exercicio");
listaDeTarefas1.listarTarefas();
listaDeTarefas1.marcarTarefaConcluida("Compras")
listaDeTarefas1.removerTarefas("Estudar")
listaDeTarefas1.listarTarefas();
listaDeTarefas1.marcarTarefaConcluida("Compras")



