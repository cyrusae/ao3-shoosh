import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class WorkHide extends React.Component {
 
 constructor(props) {
  super(props);
  this.state = {fic: ''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(e) {
  this.setState({fic: e.target.value})
 }

 handleSubmit(e) {
  console.log(this.state.fic);
  e.preventDefault();
 }

 render() {
  const fic = this.state.fic;
  return (
   <form onSubmit={this.handleSubmit}>
    <label>URL or Work ID:<br/>
    <input type='text' value={fic} onChange={this.handleChange} /></label>
   </form>
  )
 }
}


export function WorkInfo() {
 return (
  <>
   Test of WorkInfo
  </>
 )
}

export default WorkHide 