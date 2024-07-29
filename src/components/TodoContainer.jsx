import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/features/todolist/todoSlice';

const TodoContainer = () => {
  const [task, setTask] = useState('');

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  const handleAddToDo = (e) => {
    e.preventDefault();
    dispatch(addTodo(task))
    setTask('')
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="add__todo mb-6">
        <form onSubmit={handleAddToDo} className="flex items-center space-x-2">
          <input 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            type="text" 
            placeholder="Enter your upcoming task..." 
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Todo
          </button>
        </form>
      </div>
      <div className="todoItems space-y-4">
        {todos.map((todoData, index) => (
          <TodoItem key={index} todoData={todoData} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
