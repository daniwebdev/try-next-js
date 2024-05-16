import TodoListItem from "@/components/todo-list/list-item-component";
import TodoComponent from "@/components/todo-list/todo-component";
import { Metadata } from "next";
import { init } from "next/dist/compiled/webpack/webpack";
import { setRequestMeta } from "next/dist/server/request-meta";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";


export const metadata: Metadata = {
    title: 'Todo App',
    description: 'This is a Todo App',
  }  

export default function TodoList() {
    return (
        <>
        <TodoComponent />
        </>
    )
}