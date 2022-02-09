import Head from 'next/head'
import Image from 'next/image'
import { Component, useState } from 'react'
import styles from '../styles/Home.module.css'
import { UseSelect } from './buttons/hidemute'
import Script from 'next/script'
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { WorkInfo } from './buttons/workmanage'


class Home extends Component {
 
 constructor() {
  super();
  this.state = {
   usecase: 'neutral',
   hints: 'default' | 'noDisclaim' | 'noPseud' | 'none',
   showDisclaim: false,
   showPseudtorial: true | false,
   useWork: false,
   useUser: false,
   useOutcome: false
  }
  this.chooseHints = this.chooseHints.bind(this);
//  this.chooseUseCase = this.chooseUseCase.bind(this);
 }

 chooseHints(hints) {
  switch (hints) {
   case 'showDisclaim':
    this.setState({ showDisclaim: !this.state.showDisclaim });
    break;
   case 'showPseudtorial': 
    this.setState({ showPseudtorial: !this.state.showPseudtorial });
    break;
//  }
// }

// chooseUseCase(usecase) {
//  switch (usecase) {
   case 'useWork':
    this.setState({ useWork: !this.state.useWork, useUser: false });
    break;
   case 'useUser':
    this.setState({ useUser: !this.state.useUser, useWork: false });
    break;
   default: 
    null;
  }
 }
  render() {
   const { 
    showDisclaim,
    showPseudtorial,
    useWork,
    useUser,
   } = this.state;
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

<div className={styles.disclaimer}>
     { showDisclaim && (
   <Button variant='outline-secondary' size='sm' onClick={ () => this.chooseHints('showDisclaim')}>Click to show disclaimer message</Button>
  )}
     { showDisclaim || (
      <><p>Note: Archive of Our Own does not currently have a true <em>block</em> function. What this tool can do is create CSS for you to paste into <a href='https://archiveofourown.org/faq/skins-and-archive-interface?language_id=en#createsiteskin'>a skin on your account</a>, which will prevent specific works - or users - from being displayed while you're logged in.
      </p>
  <Button variant='outline-secondary' size='sm' onClick={ () => this.chooseHints('showDisclaim')}>Click to dismiss this message</Button></>
  )}
  </div>


   <ToggleButtonGroup type='radio' size='lg' name='useWhich'>
     <ToggleButton id='hideWork' value={1} onClick={ () => this.chooseHints('useWork')}>Hide a Work</ToggleButton>
     <ToggleButton id='muteUser' value={2} onClick={ () => this.chooseHints('useUser')}>Mute a User</ToggleButton>
   </ToggleButtonGroup>  

   <div>
   {useWork && <div>
    <WorkInfo />
   </div>}

   {useUser && <div>
    Placeholder text showing useUser is active.
   </div>}
   </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
   }
}

export default Home