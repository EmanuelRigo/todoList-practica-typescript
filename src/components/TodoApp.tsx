import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listaTAreas, setListaTAreas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListaTAreas((tareasAnteriores) => [...tareasAnteriores, newTask]);
    setNewTask("");
  };

  const handleBorrarTarea = (index: number) => {
    setListaTAreas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nuevas Tareas"
        />
        <button onClick={handleAddTask}>agregar tarea</button>
      </div>
      <ListaTareas
        listaTareas={listaTAreas}
        borrarTarea={handleBorrarTarea}
      ></ListaTareas>
    </div>
  );
};
