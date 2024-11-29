import { useState } from 'react';
import { AddTodoFormProps } from '../lib/types/types';
import Button from './Button';
import Input from './Input';

export default function AddTodoForm({
  addTodo,
}: AddTodoFormProps) {
  const [formInputs, setFormInputs] = useState({
    text: '',
    priority: '🟢',
    finishBy: '',
  });

  const handleChange = (value: string, name: string) => {
    setFormInputs((curr) => {
      return { ...curr, [name]: value };
    });
  };

  return (
    <form className='add-todo' onSubmit={(e)=>{e.preventDefault(); addTodo({...formInputs, id: `${new Date()}`})}}>
      <Input
        id='todo-text'
        name='text'
        placeholder='ENTER TODO HERE:'
        handleChange={handleChange}
        type='text'
        val={formInputs.text}
      />
      <Input
        id='finish-by'
        name='finishBy'
        placeholder='FINISH BY: YYMMDD'
        handleChange={handleChange}
        type='text'
        val={formInputs.finishBy}
      />
      <select name='priority' value={formInputs.priority} onChange={(e)=>{handleChange(e.target.value, 'priority')}}>
        <option value='🔴'>🔴 High Priority</option>
        <option value='🟡'>🟡 Mid Priority</option>
        <option value='🟢'>🟢 Low Priority</option>
      </select>
      <Button type="submit" id="add-todo-button">ADD TODO</Button>
    </form>
  );
}
