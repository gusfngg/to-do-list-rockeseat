import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.css'

export function Button({ ...rest }) {
   return (
      <button type='submit' className={styles.button} {...rest}>
         Criar

         <PlusCircle size={19}/>
      </button>
   )
}