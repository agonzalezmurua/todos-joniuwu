import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, add, remove } = useTodos();

  return (
    <div className="bg-blue-500 text-white h-screen w-screen flex flex-col items-center ">
      <Form onSubmit={add} />
      <TodoList>
        {todos.map(({ id, title, description, important }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            description={description}
            important={important}
            onDelete={remove}
          />
        ))}
      </TodoList>
    </div>
  );
}
