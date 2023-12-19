import React from 'react'
import notAdminimg from '../images/notAdmin.gif'
import { Link } from 'react-router-dom'
import '../Admin/adminStyles/admin.css'

const NotAdmin = () => {
  return (
    <div className='not-admin'>
        <h1>ERROR 403!</h1>
        <h2>YOU ARE NOT AN ADMIN, please return to previous page.</h2>
        <div className="not-admin-img">
            <img src={notAdminimg}/>
        </div>
    </div>
  )
}

export default NotAdmin
