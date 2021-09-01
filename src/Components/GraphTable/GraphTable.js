import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./GraphTable.css";
const GraphTable=(props)=>{
// DISPLAYING THE TASK
const deleteTask=(id)=>{
  props.deleteHandler(id)
}
   let localTask = props.localStorage;
    let allTasks;
    if (localTask === null) {
      allTasks = <div>No Data Entered yet</div>;
    } else {
      allTasks = localTask.map((task) => {
        return (
          <tr key={task.taskId}>
            <td>{task.taskId}</td>
            <td>{task.data}</td>
            <td>
              <div className="delete-div"  id={task.taskId}
                onClick={(e) => {
                  return deleteTask(e.currentTarget.id);
                }}>
               <FontAwesomeIcon
                icon={faTrashAlt}
                className="trash"
               />
              </div>
            </td>
          </tr>
        );
      });
    }
    return (
      <div className="Task-div">
        <h2>Entered Data</h2>
        <hr></hr>
        <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
            <th>Title</th>
            <th>Data</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
             {allTasks}
          </tbody>
        </table>
        </div>
      </div>
    );
  
}
export default GraphTable;
