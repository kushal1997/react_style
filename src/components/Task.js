import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
import "./task.css"

export const Task = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record Videos", completed: false },
    { id: 2, name: "Listem Music", completed: true },
    { id: 3, name: "Study", completed: false }
  ]);
  const [show, setShow] = useState(true);
  const styles = {
    color: "red",
    border: "2px solid",
        // ======================
        // DYNAMIC INLINE LEVEL STYLING
        // ======================
    
    borderColor: show? "green":"red",
    padding: "20px"
}

function handleDelete(id) {
  setTasks(tasks.filter(task => id !== task.id));

}

return (
  <section className="taskList">
    {/* ======================
    INLINE LEVEL STYLING
    ====================== */}
    <h1 style={
      styles
    }>Task List</h1>
    <ul>
      <button onClick={() => setShow(!show)}>{show?"Hide":"Show"}</button>
      {
        show && tasks.map((task) => (
          <TaskCard info={info} key={task.id} task={task} handleDelete={handleDelete} />
        ))
      }

    </ul>
    <BoxCard result="success">
      <p className="title">Lorem ipsum dolor sit amet.</p>
      <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fugiat?</p>
    </BoxCard>
    <BoxCard result="warning">
      <p className="title">Lorem ipsum dolor sit.</p>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus fuga aliquam, beatae officia possimus.</p>
    </BoxCard>
    <BoxCard result="alert">
      <p className="title">Lorem, ipsum dolor.</p>
      <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum omnis atque quos neque et. Dignissimos quae itaque voluptatibus doloribus vero?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, natus repellat illum repudiandae rem quia dignissimos ut dolore consectetur provident eaque ducimus cupiditate nemo numquam?</p>
    </BoxCard>
  </section>
)
}
