import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUserAction } from '../../redux/userSlice';
import Edit from '../../images/edit.png'
import AdminUserCard from './adminUsercard'
import '../adminStyles/table.css'
import Pagination from './pagination';
import currencyFormatter from '../../utilities/currencyFormatter';
import dateFormatter from './dateFormatter';
import { useState } from 'react';

const DataTable = () => {

  const [ page, setPage ] = useState(1)

const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllUserAction(+page))
    },[dispatch, page, setPage])

    const userData = useSelector(state => state?.user?.userAuth);
    console.log(userData)
 
  const allUsers = useSelector(state => state?.user) 
  const { userAppErr, userServerErr, userList, userLoading, isUserUpdated } = allUsers;

      //filter only users
      const userListCard = userList?.docs?.filter(el => el,[]) 
      console.log(userListCard)

      const loadingArray = new Array(1).fill(null)

  return (
    <TableContainer component={Paper} className = "admin-table">
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Balance</TableCell>
            <TableCell className='tableCell'>Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>ID</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className='table-body'>
        {userLoading? <h1 className='deposit-loading'><l-mirage size="80" speed="2.5" color="black"></l-mirage></h1>: userAppErr || userServerErr? <div>Error</div>: userList?.length <= 0? <h1 className='deposit-loading'>No deposit found.</h1>: userList?.docs?.map((el)=>{
            return(
                
                        <TableRow item = {el} key={el?._id}>
                        <TableCell className='tableCell'>{el?.email}</TableCell>
                        <TableCell className='tableCell'>{currencyFormatter(userData?.currency,el?.balance)}</TableCell>
                        <TableCell className='tableCell'>{el?.currency}</TableCell>
                        <TableCell className='tableCell'><span className={`status ${el?.status}`}>{el?.status}</span></TableCell>     
                        <TableCell className='tableCell'><AdminUserCard id = {el?._id}></AdminUserCard></TableCell>     
                      </TableRow>
        )})}
                      <Pagination setPage=  {setPage} pageNumber = {userList?.totalPages}/>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable;

