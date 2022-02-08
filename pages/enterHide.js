import { renderToHTML } from "next/dist/server/render"
import { HtmlProps } from "next/dist/shared/lib/utils"

export function WhatWork() {
 const workData = event => {
  event.preventDefault()
  //add form logic

  return (
   <>
   <form onSubmit={workData}>
    <label htmlFor='whatWork'>Work URL or ID</label>
    <input id='whatWork' type='text' required/>
   </form>
   </>
  )
 }
}