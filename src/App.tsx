import { FormEvent, SetStateAction, useState } from 'react';

import { Header as ListHeader } from './components/List/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Item } from './components/List/Item';
import { Header } from './components/Header';
import { Empty } from './components/List/Empty';

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';
import './global.css';

export interface ITask {
  id: string;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    const newTask = {
      id: uuidv4(),
      content: inputValue,
      isChecked: false
    };

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function handleCheckedOrNo(id: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const isNewTaskEmpty = inputValue.length === 0;

  function deleteTask(id: string) {
    const tasksWithoudDeleteOne = tasks.filter(task => {
      return task.id !== id;
    });

    setTasks(tasksWithoudDeleteOne);
  }

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <div className={styles.taskInfo}>
          <form onSubmit={handleNewTask}>
            <Input
              onChange={(e: { target: { value: SetStateAction<string> } }) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <Button
              type='submit'
              disabled={isNewTaskEmpty}
            />
          </form>
        </div>

        <main>
          <ListHeader
            tasksCreated={tasks.length}
            tasksCompleted={tasks.filter(task => task.isChecked).length}
          />
          <div>
            { tasks.length > 0 ? (
              <div className={styles.tasksList}>
                {tasks.map((task) => (
                  <Item
                    id={task.id}
                    content={task.content} 
                    isChecked={task.isChecked}
                    key={task.id}
                    onDeleteTask={deleteTask}
                    onToggleCheck={handleCheckedOrNo}
                  />
                ))}
              </div>
            ) : <Empty/>}
          </div>
        </main>
      </div>
    </div>
  );
}
