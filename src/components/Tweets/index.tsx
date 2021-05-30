import { MdRefresh } from 'react-icons/md'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'

import styles from "./tweets.module.scss"

export default function Hashtags() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Tweets relacionados</p>
                <MdRefresh className={styles.refreshButton} size="20" />
            </div>
            <section className={styles.tweets}>
                <div className={styles.tweet}>
                    <img src="" alt="" />
                    <div>
                        <div className={styles.heading}>
                            <div>
                                <h4>Sara Peachy</h4>
                                <p>@saradietschy <BsDot size="16" /> 6h </p>
                            </div>
                            <HiDotsHorizontal size="20" />
                        </div>
                        <div className={styles.message}>
                            <p>
                                I've been wanting to film a video about my creative life and how it has always been CHAOS. How you can still be successful if you're that unorganized / obsessive type which isn't super sexy to talk about but almost necessary when you're trying to build big things.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}