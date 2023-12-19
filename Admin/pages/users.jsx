import React from 'react'
import Sidebar from '../components/adminSideNav.jsx'
import TopNav from '../components/adminNav'
import Datatable from '../components/dataTable'
import '../adminStyles/users.css'

const Users = () => {
  return (
    <div className='admin-users'>
        <div className="side-bar">
            <Sidebar/>
        </div>
        <div className="admin-list">
            <TopNav/>
            <div className='users-table'>
            <Datatable/>
            </div> 
        </div>
    </div>
  )
}

export default Users;
