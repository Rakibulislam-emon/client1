"use client"
import React from 'react'
import style from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
const Login = () => {
  const session = useSession()
  return (
    <div className={style.container}>
      <h1>Login Page</h1>
      <p>Login with your credentials</p>
      <br /><br /><br />
      <button onClick={() =>signIn('google') }>Login with google </button>
    </div>
  )
}

export default Login