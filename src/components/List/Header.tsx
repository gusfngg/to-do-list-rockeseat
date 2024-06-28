import styles from './Header.module.css'
import React from 'react';

interface TasksCount {
   tasksCreated: number;
   tasksCompleted: number;
}

export function Header({ tasksCreated, tasksCompleted }: TasksCount): React.ReactElement {
   return (
      <header className={styles.header}>
         <aside>
            <p>Tarefas criadas</p>
            <span>{tasksCreated}</span>
         </aside>

         <aside>
            <p>Concluídas</p>
            <span>{tasksCompleted}</span>
         </aside>
      </header>
   )
}