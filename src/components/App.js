import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
//import 'materizalize-css/dist/css/materialize.min.css';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import DoneList from './DoneList';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pendingItem:'',
            list:[],
            doneList:[],
        };

    };

    handlePendingItem = event => {
        this.setState({
            pendingItem: event.target.value
        });
    }

    handleButtonSubmit = event => {
        event.preventDefault();
        if(this.state.list.indexOf(this.state.pendingItem) > -1) {  // Verificando se a tarefa já existe na lista (se existir, não será permitido acrescentar)
            return alert('Essa tarefa já existe! Escreva outra tarefa')
        }

        this.setState({
            list: [...this.state.list, this.state.pendingItem], // Atualizando a lista com o elemento submetido
        });

        this.setState({
            pendingItem: ''
        });
    }

    handleRemove = index => { // Função que remove o elemento selecionado
        this.setState({
            list: this.state.list.filter(item => {
                return this.state.list.indexOf(item) !== index
            })
        });
    }

    handleDone = index => { // Função que atualiza a lista de tarefas realizadas

        const newDoneElement = this.state.list.filter(item => {
            return this.state.list.indexOf(item) === index
        })

        this.setState({
            doneList: [...this.state.doneList, newDoneElement],
            list: this.state.list.filter(item => {
                return this.state.list.indexOf(item) !== index
            })
        });
    }

    handleRemoveDone = index => { // Função que remove o elemento da lista de tarefas já realizadas
        this.setState({
            doneList: this.state.doneList.filter(item => {
                return this.state.doneList.indexOf(item) !== index
            })
        });
    }

    render() {
        return(
            <div className="wrapper">
                <Title title={'Lista de Tarefas'}/>
                <TodoForm
                    pendingItem={this.state.pendingItem}
                    handlePendingItem={this.handlePendingItem}
                    handleButtonSubmit={this.handleButtonSubmit}
                />
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleDone={this.handleDone} />
                <DoneList doneList={this.state.doneList} handleRemoveDone={this.handleRemoveDone}/>
            </div>
        );
    }
}

export default App;
