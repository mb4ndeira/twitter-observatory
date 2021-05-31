import { MdRefresh } from 'react-icons/md'

import Tweet from '../Tweet'

import styles from "./tweet_list.module.scss"

export default function TweetList() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Tweets relacionados</p>
                <MdRefresh className={styles.refreshButton} size="20" />
            </div>
            <section className={styles.tweets}>
                <Tweet />
            </section>
        </div>
    )
}