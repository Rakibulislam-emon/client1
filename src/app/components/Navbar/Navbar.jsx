"use client"
import Link from 'next/link';
import React from 'react'
import style from './page.module.css'
import DarkMode from '../DarkMode/DarkMode';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function Navbar() {
  const router = useRouter()
const session = useSession()
  console.log('session:', session.status)
   const handleRedirect = () => {
    router.push('/dashboard/login')
  }
  return (
    <div className={style.container}>
      {/* logo */}
      <Link className={style.logo} href="/">
        <span>logo</span>
      </Link>
      {/* links */}
      <div className={style.links}>
        <DarkMode/>
        {
          links.map((link) => (
            <Link className={style.link} href={link.url} key={link.id}>
              {link.title}
            </Link>
          ))
        }

       {session.status === "authenticated" ? <button  className={style.logout} onClick={() => signOut()}>
          logout
        </button> :  <button  className={style.logout} onClick={handleRedirect}>
          Login
        </button>} 
      </div>
    </div>
  )
}
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default Navbar

