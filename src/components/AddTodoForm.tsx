import { useContext, useState } from 'react';
import { AddTodoFormProps } from '../lib/types/types';
import Button from './Button';
import Input from './Input';
import { isValidDateFormat } from '../lib/utils/isValidDateFormat';
import { UserContext } from '../contexts/UserContext';

export default function AddTodoForm({
  activeTodos,
  addTodo,
  setTodoList,
}: AddTodoFormProps) {
  const user = useContext(UserContext)
  const canAddTodo = user?.uid || activeTodos < 5
  
  const [formInputs, setFormInputs] = useState({
    text: '',
    priority: '🟢',
    finishBy: '',
  });
  const [isWarningVisible, setIsWarningVisible] = useState(false)

  const handleChange = (value: string, name: string) => {
    setFormInputs((curr) => {
      return { ...curr, [name]: value };
    });
  };

  return (
    <form
      className='add-todo'
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();

        const isValidDate = isValidDateFormat(formInputs.finishBy)

        if (isValidDate && formInputs.text !== '' && canAddTodo) {
          
          addTodo(
            { ...formInputs, status: 'incomplete', id: `${new Date()}` },
            setTodoList
          );
          setFormInputs({
            text: '',
            priority: '🟢',
            finishBy: '',
          });
        } else {
          if (!isValidDate) {
            setTimeout(() => {
              setFormInputs((curr) => {
                const resetInputs = { ...curr };
                resetInputs.finishBy = '';
                return resetInputs;
              });
            }, 2000);
            setFormInputs((curr) => {
              const warningInputs = { ...curr };
              warningInputs.finishBy = 'INCORRECT DATE FORMAT';
              return warningInputs;
            });
          }
          if (!formInputs.text) {
            setTimeout(() => {
              setFormInputs((curr) => {
                const resetInputs = { ...curr };
                resetInputs.text = '';
                return resetInputs;
              });
            }, 2000);
            setFormInputs((curr) => {
              const warningInputs = { ...curr };
              warningInputs.text = 'PLEASE INSERT TODO';
              return warningInputs;
            });
          }
          if(!canAddTodo) {
            setTimeout(() => {
              setIsWarningVisible(false)
            }, 2000);
            setIsWarningVisible(true)
          }
        }
      }}
    >
      Add Todo
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
      <select
        id='dropdown'
        className='input'
        name='priority'
        value={formInputs.priority}
        onChange={(e) => {
          handleChange(e.target.value, 'priority');
        }}
      >
        <option id='dropdown1' value='🔴'>
          🔴 High Priority
        </option>
        <option id='dropdown2' value='🟡'>
          🟡 Mid Priority
        </option>
        <option id='dropdown3' value='🟢'>
          🟢 Low Priority
        </option>
      </select>
      <Button type='submit' id='add-todo-button'>
        ADD TODO
      </Button>
      {isWarningVisible && <p className='warning'>REGISTER OR SIGN IN TO ADD MORE TODOS</p>}
    </form>
  );
}
