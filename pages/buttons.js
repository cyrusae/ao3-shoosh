import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButtonGroup from 'react-bootstrap/button'
import ToggleButton from 'react-bootstrap/button'
import render from 'react'

export function HideMute() {
 return (
  <>
   <ToggleButtonGroup  
    type='radio' name='target' defaultValue={1}>
    <ToggleButton id='workHide' 
     type='radio' size='lg'  value={1} >Hide a Work</ToggleButton>
    <ToggleButton id='userMute'  
     type='radio' size='lg'  value={2}>Mute a User</ToggleButton>
   </ToggleButtonGroup>
  </>
 )
}

//render (<HideMute />)