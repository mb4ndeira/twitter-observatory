import { HiOutlinePlus } from 'react-icons/hi'

import styles from "./hashtags_input.module.scss"

export default function HashtagsInput() {
  return (
    <div className={styles.hashtagsInput}>
      <input placeholder="Adicione hashtags"></input>
      <HiOutlinePlus className={styles.addButton} size="25" />
    </div>
  )
}