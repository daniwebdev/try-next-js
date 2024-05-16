import React from "react";

type TodoListItemProp = {
    children: React.ReactNode,

    onClick?: () => void,
    onDelete?: () => void,
    
    is_checked?: boolean
}

export default function TodoListItem(props: React.PropsWithChildren<TodoListItemProp>) {

    return (
        <div className="w-full py-2 px-3 border flex items-center justify-between gap-3 border-gray-900 rounded-md hover:bg-gray-800 cursor-pointer">
            <div onClick={props.onClick}  className="flex items-center justify-start w-full">
                {props.is_checked ? (
                    <span className="flex items-center justify-center w-10 h-10 text-xl text-green-500">✓</span>
                ) : (    
                    <span className="flex items-center justify-center w-10 h-10 text-xl text-red-500">✗</span>
                )}
                { props.children }
            </div>
            <button onClick={props.onDelete} className="text-red-500">Delete</button>
        </div>
    )
}