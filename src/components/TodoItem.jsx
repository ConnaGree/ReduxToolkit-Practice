import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/features/todolist/todoSlice';

const TodoItem = ({ todoData }) => {
  const dispatch = useDispatch()

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md flex items-center justify-between">
      <div>
        <h2 className={`text-lg font-semibold ${todoData.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todoData.text}
        </h2>
        <p className="text-sm text-gray-500">ID: {todoData.id}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-500">
          {todoData.completed ? 'Completed' : 'Incomplete'}
        </p>
        <button 
          onClick={() => dispatch(removeTodo(todoData.id))}
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
        <button 
          onClick={() => dispatch(toggleTodo(todoData.id))}
          className={`py-1 px-2 rounded ${todoData.completed ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
        >
          {todoData.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
