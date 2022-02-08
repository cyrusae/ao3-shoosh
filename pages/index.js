import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { UseSelect } from './buttons/hidemute'
import Script from 'next/script'


export default function Home() {
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

     <p className={styles.disclaimer}>Note: Archive of Our Own does not currently have a true <em>block</em> function. What this tool can do is create CSS for you to paste into a skin on your account <b><em>TO DO: ADD LINK TO WHAT THIS MEANS</em></b>, which will prevent specific works - or users - from being displayed while you're logged in.</p>

      <div>
       <UseSelect />
      </div>

      <div id='hideWork'>

      </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
