import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
//import 'materizalize-css/dist/css/materialize.min.css';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {

    constructor(props) {
        super(props)

        this.inputRef = null;

        this.state = {
            pendingItem:'',
            list:[],
            doneList:[],
        };

    };

    handlePendingItem = event => {
        const item = String(event.target.value || '').trim();

        this.setState({
            pendingItem: item
        });
    }

    handleButtonSubmit = event => {
        event.preventDefault();

        if (this.state.pendingItem.length === 0) {
            return;
        }

        // Verificando se a tarefa já existe na lista
        // (se existir, não será permitido acrescentar)
        if (this.state.list.find(item => item.label === this.state.pendingItem)) {
            return alert('Essa tarefa já existe! Escreva outra tarefa')
        }

        this.setState({
            // Atualizando a lista com o elemento submetido
            list: [...this.state.list, {label: this.state.pendingItem}],

            // Redefinindo valor do <input>
            pendingItem: ''
        });

        if (this.inputRef) {
            this.inputRef.focus();
        }
    }

    // Função que remove o elemento selecionado
    handleRemove = itemToRemove => {
        if (!confirm(`Remover a tarefa "${itemToRemove.label}"?`)) {
            return;
        }

        this.setState({
            list: this.state.list.filter(item => item !== itemToRemove)
        });
    }

    // Função que atualiza a lista de tarefas realizadas
    handleDone = doneItem => {
        this.setState({
            list: this.state.list.filter(item => item !== doneItem),
            doneList: [...this.state.doneList, doneItem]
        });
    }

    // Função que remove o elemento da lista de tarefas já realizadas
    handleRemoveDone = itemToRemove => {
        if (!confirm(`Remover a tarefa "${itemToRemove.label}"?`)) {
            return;
        }

        this.setState({
            doneList: this.state.doneList.filter(item => item !== itemToRemove)
        });
    }

    render() {
        return(
            <div className="wrapper">
                <Title title={'Lista de Tarefas'}/>
                <TodoForm
                    ref={(input) => this.inputRef = input}
                    value={this.state.pendingItem}
                    onChange={this.handlePendingItem}
                    onSubmit={this.handleButtonSubmit}
                />
                <TodoList list={this.state.list} onRemove={this.handleRemove} onDone={this.handleDone} />
                <TodoList list={this.state.doneList} onRemove={this.handleRemoveDone}>
                    Tarefas Prontas
                </TodoList>
            </div>
        );
    }
}

export default App;
