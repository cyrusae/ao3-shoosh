import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { ToggleButtonProps } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
import { WorkInfo } from "./workmanage";


export function UseSelect() {
 return (
  <>
   <ToggleButtonGroup type='radio' size='lg' name='useWhich' defaultValue={1}>
    <ToggleButton id='hideWork' value={1} onClick={WorkInfo}>
     Hide a Work
    </ToggleButton>
    <ToggleButton id='muteUser' value={2}>
     Mute a User
    </ToggleButton>
   </ToggleButtonGroup>
  </>
 )
}

