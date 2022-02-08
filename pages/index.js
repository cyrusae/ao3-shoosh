import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { initScriptLoader } from 'next/script'
import {HideMute} from './buttons'
import { WhatWork } from './enterHide'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ao3, shoosh.</title>
        <meta name="description" content="A tool to make muting and hiding AO3 content easier" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          ao3, shoosh.
        </h3>

        <p className={styles.description}>
          Not sure how to mute users or hide works on Archive of Our Own? This can help.
        </p>

        <p>Note: Archive of Our Own does not currently have a true <em>block</em> function. What this tool can do is create CSS for you to paste into a skin on your account <b>TO DO: ADD LINK TO WHAT THIS MEANS</b>, which will prevent specific works - or users - from being displayed while you're logged in.</p>

       <div>
        <HideMute />
       </div>
       <div id='WorkMute'>
        <WhatWork />
       </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
