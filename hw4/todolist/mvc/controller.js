import { Model } from './model.js';
import { View } from './view.js';

export const Controller = ((model, view) => {
    // TODO: todoList use map
    const state = new model.State();
    const todoContainer = document.querySelector(
        `.${view.domstr.listContainer}`
    );
    const inputbox = document.querySelector(`.${view.domstr.inputBox}`);

    const deleteTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.className === view.domstr.deleteBtn) {
                state.todolist = state.todolist.filter(
                    (todo) => +todo.id !== +e.target.id
                );
                model.deleteTodo(e.target.id);
            }
        });
    };

    const addTodo = () => {
        inputbox.addEventListener("keyup", (e) => {
            if (e.key === "Enter" && e.target.value.trim() !== '') {
                const newtodo = new model.Todo(e.target.value);

                model.addTodo(newtodo).then((todo) => {
                    state.todolist = [todo, ...state.todolist];
                });

                e.target.value = '';
            }
        });
    };

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
        });
    };

    const toggleCompleted = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                return;
            }

            const listItem = e.target.closest("li");
            if (listItem) {
                state.todolist = state.todolist.map((todo) => {
                    if (+todo.id === +listItem.id) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                });
            }
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
        toggleCompleted();
    };

    return { bootstrap };
})(Model, View);