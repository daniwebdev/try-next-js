'use client'
import { useEffect, useState } from "react";
import TodoListItem from "./list-item-component";

export default function TodoComponent() {

    const [todos, setTodos] = useState<any[]>([]);
    const [state, setState] = useState<any>({
        inputLabel: ''
    });

    const isCheckedToggle = (index: number) => {
        const updateTodos: any = [...todos];
        updateTodos[index].is_checked = !updateTodos[index].is_checked;

        console.log(updateTodos)
        setTodos(updateTodos);

        localStorage.setItem('todos', JSON.stringify(todos))
    }

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todos))
    // }, [todos])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todos') ?? '[]');
        if (items) {
         setTodos(items);
        }

    }, []);


    const addNewItem = () => {
        const updateTodos = [...todos, {
            label: state.inputLabel,
            is_checked: false
        }];

        setState({
            ...state,
            inputLabel: ''
        })

        localStorage.setItem('todos', JSON.stringify(updateTodos))

        setTodos(updateTodos)
    }

    const onDelete = (index: number) => {
        const updateTodos = todos.filter((_, i) => i !== index);
        localStorage.setItem('todos', JSON.stringify(updateTodos))
        setTodos(updateTodos);

    }
    return (
        <>
            <div className="mb-10 flex justify-between items-center gap-3">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 w-1/3" onClick={addNewItem}>Add New</button>
                <input type="text" className="border rounded-md px-4 py-2 w-full text-gray-900" placeholder="Label" value={state.inputLabel} onChange={(e) => setState({ ...state, inputLabel: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
                {todos.map((todo: any, index: number) => (
                    <TodoListItem key={index} onClick={() => isCheckedToggle(index)} is_checked={todo.is_checked} onDelete={() => onDelete(index)}>
                        {todo.label}
                    </TodoListItem>
                ))}
            </div>
        </>
    );
}