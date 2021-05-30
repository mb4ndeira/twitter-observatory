import { FiX } from 'react-icons/fi'

import styles from "./hashtags.module.scss"

export default function Hashtags() {
  return (
    <div className={styles.hashtags}>
      <div className={styles.hashtag}>
        <h3>#Berços</h3>
        <FiX className={styles.deleteButton} size="16" />
      </div>
    </div>
  )
}