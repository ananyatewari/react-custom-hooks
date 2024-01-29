import React, { useState } from 'react'
import useInput from "./components/TakeInput"

export default function App() {
  const [state, setState] = useInput("key","")
  return (
    <>
      <input type="text" onChange={(e) => {setState(e.target.value)}} value={state}/>
    </>
  )
}
