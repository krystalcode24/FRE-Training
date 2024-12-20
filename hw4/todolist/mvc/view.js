export const View = (() => {
    const domstr = {
        inputBox: "todolist-input",
        listContainer: "todolist-container",
        deleteBtn: "delete-btn",
    };

    const createTodoList = (todoArr) => {
        const container = document.createElement("div");
        todoArr.forEach((todo) => {
            const button = document.createElement("BUTTON");
            button.className = "delete-btn";
            button.id = todo.id;

            const xSymbol = document.createTextNode("\u00D7");
            button.appendChild(xSymbol);

            const span = document.createElement("SPAN");
            span.innerHTML = `${todo.id}-${todo.title}`;

            const li = document.createElement("LI");
            li.id = todo.id;

            if (todo.completed) {
                li.classList.add("completed");
            }

            li.appendChild(span);
            li.appendChild(button);

            container.appendChild(li);
        });
        return container.innerHTML;
    };

    const render = (ele, html) => {
        ele.innerHTML = html;
    };

    return { domstr, render, createTodoList };
})();