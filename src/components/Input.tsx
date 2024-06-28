import styles from './Input.module.css'

export function Input({ ...rest }) {
   return (
      <input
         className={styles.input}
         placeholder='Adicione uma nova tarefa'
         type="text"
         {...rest}
      />
   )
}