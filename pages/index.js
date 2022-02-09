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
   hideDisclaim: false,
   hidePseudtorial: true | false,
   useWork: false,
   useUser: false,
   useOutcome: false
  }
  this.chooseHints = this.chooseHints.bind(this);
//  this.chooseUseCase = this.chooseUseCase.bind(this);
 }

 chooseHints(hints) {
  switch (hints) {
   case 'hideDisclaim':
    this.setState({ hideDisclaim: !this.state.hideDisclaim });
    break;
   case 'hidePseudtorial': 
    this.setState({ hidePseudtorial: !this.state.hidePseudtorial });
    break;
//  }
// }

// chooseUseCase(usecase) {
//  switch (usecase) {
   case 'useWork':
    this.setState({ useWork: true, useUser: false });
    break;
   case 'useUser':
    this.setState({ useUser: true, useWork: false });
    break;
   case 'useOutcome':
    this.setState({ useOutcome: true, useUser: this.state.useUser, useWork: this.state.useWork })
   default: 
    null;
  }
 }
  render() {
   const { 
    hideDisclaim,
    hidePseudtorial,
    useWork,
    useUser,
    useOutcome
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
     { hideDisclaim && (
   <Button variant='outline-secondary' size='sm' onClick={ () => this.chooseHints('hideDisclaim')}>Click to show disclaimer message</Button>
  )}
     { hideDisclaim || (
      <><p>Note: Archive of Our Own does not currently have a true <em>block</em> function. What this tool can do is create CSS for you to paste into a skin on your account <b><em>TO DO: ADD LINK TO WHAT THIS MEANS</em></b>, which will prevent specific works - or users - from being displayed while you're logged in.
      </p>
  <Button variant='outline-secondary' size='sm' onClick={ () => this.chooseHints('hideDisclaim')}>Click to dismiss this message</Button></>
  )}
  </div>


   <ToggleButtonGroup type='radio' size='lg' name='useWhich'>
     <ToggleButton id='hideWork' value={1} onClick={ () => this.chooseHints('useWork')}>Hide a Work</ToggleButton>
     <ToggleButton id='muteUser' value={2} onClick={ () => this.chooseHints('useUser')}>Mute a User</ToggleButton>
   </ToggleButtonGroup>  

   <div className={styles.container}>
   {useWork && <div>
    Placeholder text showing useWork is active.
    <WorkInfo />
   </div>}

   {useUser && <div>
    Placeholder text showing useUser is active.
   </div>}
   </div>

   <div className={styles.container}>
    {useOutcome && <div>
     Placeholder demonstrating where you put an outcome.
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