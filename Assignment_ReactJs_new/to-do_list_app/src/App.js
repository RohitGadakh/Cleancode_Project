

import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'active'
  const [editTaskId, setEditTaskId] = useState(null);
  const [editPriority, setEditPriority] = useState('low');
  const [editDueDate, setEditDueDate] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, priority: 'low', dueDate: null }]);
      setNewTask('');
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setEditTaskId(null); // Clear edit mode if task is removed
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null); // Clear edit mode after editing
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const toggleEdit = (taskId) => {
    setEditTaskId(taskId === editTaskId ? null : taskId);
    const task = tasks.find(task => task.id === taskId);
    setEditPriority(task ? task.priority : 'low');
    setEditDueDate(task ? task.dueDate : null);
  };

  const isEditing = (taskId) => {
    return taskId === editTaskId;
  };

  const updateTaskDetails = () => {
    const updatedTasks = tasks.map(task =>
      task.id === editTaskId ? { ...task, priority: editPriority, dueDate: editDueDate } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null); // Clear edit mode after updating details
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className='add-div'>
      <div >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <button onClick={() => filterTasks('all')}>All</button>
        <button onClick={() => filterTasks('completed')}>Completed</button>
        <button onClick={() => filterTasks('active')}>Active</button>
      </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <React.Fragment key={task.id}>
              <tr className={task.completed ? 'completed' : ''}>
                <td>
                  {isEditing(task.id) ? (
                    <input
                      type="text"
                      value={task.text}
                      onChange={(e) => editTask(task.id, e.target.value)}
                    />
                  ) : (
                    task.text
                  )}
                </td>
                <td>
                  {isEditing(task.id) ? (
                    <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  ) : (
                    task.priority
                  )}
                </td>
                <td>
                  {isEditing(task.id) ? (
                    <input
                      type="date"
                      value={editDueDate || ''}
                      onChange={(e) => setEditDueDate(e.target.value)}
                    />
                  ) : (
                    task.dueDate || 'Not set'
                  )}
                </td>
                <td>{task.completed ? 'Completed' : 'Active'}</td>
                <td>
                  {isEditing(task.id) ? (
                    <>
                      <button onClick={updateTaskDetails}>Save</button>
                      <button onClick={() => toggleEdit(task.id)}>Cancel</button>
                    </>
                  ) : (
                    <>
                    <div className="actions-container">
                      <button onClick={() => toggleEdit(task.id)}>Edit</button>
                      <button onClick={() => toggleCompletion(task.id)}>
                        {task.completed ? 'Undo' : 'Complete'}
                      </button>
                      <button onClick={() => removeTask(task.id)}>Remove</button>
                      <button onClick={() => toggleEdit(task.id)}>Set Details</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {editTaskId && (
        <div className="modal">
          <div>
            <label>Priority:</label>
            <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label>Due Date:</label>
            <input type="date" value={editDueDate || ''} onChange={(e) => setEditDueDate(e.target.value)} />
          </div>
          <button onClick={updateTaskDetails}>Save Details</button>
          <button onClick={() => toggleEdit(editTaskId)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
