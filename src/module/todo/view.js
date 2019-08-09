import React,{ Component } from 'react';
import AddTodo from '@/module/todo/componments/AddTodo';
import TodoList from '@/module/todo/componments/TodoList';

class Todo extends Component {
    render(){
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}

export default Todo;
