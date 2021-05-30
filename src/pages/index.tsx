import Head from 'next/head'

import HashtagsInput from '../components/HashtagsInput'
import Hashtags from '../components/Hashtags'
import Tweets from '../components/Tweets'

import styles from './main.module.scss'

export default function Home() {
  return (
    <>
      <Head><title>Twitter observer</title></Head>
      <main className={styles.main}>
        <h1> Monitore tweets a partir de <span>#hashtags</span></h1>
        <HashtagsInput />
        <Hashtags />
        <Tweets />
      </main>
    </>
  )
}
