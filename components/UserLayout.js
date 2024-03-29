import React from 'react'
import Nav from './Nav'
import { Footer } from './Footer'

export default function UserLayout({children}) {
  return (
    <>
        <Nav/>
        {children}
        <Footer/>
    </>
  )
}
