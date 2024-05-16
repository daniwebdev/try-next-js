import Head from "next/head"

export default function TodoLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <section className="max-w-xl m-auto">
            <nav>
            <h1 className="text-3xl py-10">Todo List</h1>
            </nav>
    
            {children}
        </section>
        </>
    )
  }
  