import { Trash, Check } from '@phosphor-icons/react';
import styles from './Item.module.css';

interface Task {
  id: string;
  content: string;
  isChecked: boolean;
  onDeleteTask: (id: string) => void;
  onToggleCheck: (id: string) => void;
}

export function Item({ id, onDeleteTask, onToggleCheck, content, isChecked }: Task) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleToggleCheck() {
    onToggleCheck(id);
  }

  return (
    <div className={styles.item}>
      <div>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggleCheck}
            className={styles.checkboxInput}
          />

          <div className={isChecked ? styles.checkboxCheck : styles.checkboxNoCheck}>
            {isChecked ? <Check weight="bold" size={13} /> : <span className={styles.checkbox} />}
          </div>
          <p className={isChecked ? styles.checkedText : ''}>{content}</p>
        </label>
      </div>
      <button
        title='Deletar task'
        onClick={handleDeleteTask}
      >
        <Trash size={17} color='#808080'/>
      </button>
    </div>
  );
}
