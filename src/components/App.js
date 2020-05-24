import React, {useState} from "react";
import "../styles/reset.css";
import "../styles/App.css";
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
//import 'materizalize-css/dist/css/materialize.min.css';

const App = function () {
    const [pendingItem, setPendingItem] = useState('');
    const [list, setList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    let inputRef = null;

    const handlePendingItem = event => {
        setPendingItem(String(event.target.value || ''));
    };

    const handleButtonSubmit = event => {
        event.preventDefault();

        const label = pendingItem.trim();

        if (label.length === 0) {
            return;
        }

        // Verificando se a tarefa já existe na lista
        // (se existir, não será permitido acrescentar)
        if (list.find(item => item.label === label)) {
            return alert('Essa tarefa já existe! Escreva outra tarefa')
        }

        // Atualizando a lista com o elemento submetido
        setList([...list, {label}]);

        // Redefinindo valor do <input>
        setPendingItem('');

        if (inputRef) {
            inputRef.focus();
        }
    }

    // Função que remove o elemento selecionado
    const handleRemove = itemToRemove => {
        if (!confirm(`Remover a tarefa "${itemToRemove.label}"?`)) {
            return;
        }

        setList(list.filter(item => item !== itemToRemove));
    };

    // Função que atualiza a lista de tarefas realizadas
    const handleDone = doneItem => {
        setList(list.filter(item => item !== doneItem));
        setDoneList([...doneList, doneItem]);
    };

    // Função que remove o elemento da lista de tarefas já realizadas
    const handleRemoveDone = itemToRemove => {
        if (!confirm(`Remover a tarefa "${itemToRemove.label}"?`)) {
            return;
        }

        setDoneList(doneList.filter(item => item !== itemToRemove));
    };

    return (
        <div className="wrapper">
            <Title>Lista de Tarefas</Title>
            <TodoForm
                ref={input => inputRef = input}
                value={pendingItem}
                onChange={handlePendingItem}
                onSubmit={handleButtonSubmit}
            />
            <TodoList list={list} onRemove={handleRemove} onDone={handleDone} />
            <TodoList list={doneList} onRemove={handleRemoveDone}>
                Tarefas Prontas
            </TodoList>
        </div>
    );
};

export default App;
