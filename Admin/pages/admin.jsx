import React from 'react'
import Sidebar from '../components/adminSideNav.jsx'
import TopNav from '../components/adminNav'
import Widget from '../components/adminWidgets'
import Featured from '../components/featured'
import Chart from '../components/charts'
import '../adminStyles/admin.css'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <div className="home-component">
        <TopNav/>
        <div className='widgets'>
          <Widget type = "user"/>
          <Widget type = "deposit"/>
          <Widget type = "withdrawal"/>
          <Widget type = "summary"/>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart/>
        </div>
      </div>
    </div>
  )
}

export default Admin
