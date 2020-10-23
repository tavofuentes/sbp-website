import React from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header.js';
import Stains from './Stains.js';
import './layout.css'

export default function Layout({ children }) {
  return (
    <main>
      <Helmet>
        <title>Snail Book Pals</title>
      </Helmet>
      <div className="page-container">
        <Header></Header>
        <div className="main-content">
          <Stains></Stains>
          {children}
        </div>
      </div>
    </main>
  )
}
