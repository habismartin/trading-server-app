import React from 'react'
import Sidebar from '../components/adminSideNav.jsx'
import TopNav from '../components/adminNav'
import AdminWithdrawalTable from '../components/withdrawalTable.jsx'
import '../adminStyles/withdrawal.css'


const Admindwithdrawal = () => {
  return (
    <div className='admin-withdrawal'>
        <div className="side-bar">
            <Sidebar/>
        </div>
        <div className="admin-withdrawal-page">
            <TopNav/>
            <div className="admin-withdrawal-body">
              <AdminWithdrawalTable/>
            </div>
        </div>
    </div>
  )
}

export default Admindwithdrawal
