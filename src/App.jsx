import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "estudar e desenvolver o projeto",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "fazer as compras da semana",
      isCompleted: false,
    },
  ]);

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id == tasksId)
        return { ...tasks, isCompleted: "tasks.isCompleted" };

      return tasks;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
