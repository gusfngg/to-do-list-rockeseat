import styles from './Empty.module.css'

import Clipboard from '../../assets/Clipboard.svg'

export function Empty() {
   return (
      <div className={styles.empty}>
         <img src={Clipboard} alt="icone de um prancheta"/>

         <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
         </p>
      </div>
   )
}