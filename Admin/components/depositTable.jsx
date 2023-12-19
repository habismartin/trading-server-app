import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDepositAction } from '../../redux/depositSlice';
import Edit from '../../images/edit.png'
import AdminDepositCard from '../components/adminDepositcard'
import '../adminStyles/table.css'
import Pagination from './pagination';
import currencyFormatter from '../../utilities/currencyFormatter';
import dateFormatter from './dateFormatter';
import { useState } from 'react';
import { mirage } from 'ldrs'

mirage.register()

const AdminDepositTable = () => {

  const [ page, setPage ] = useState(1)

const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllDepositAction(+page))
    },[dispatch, page, setPage])

    const userData = useSelector(state => state?.user?.userAuth);
 
  const allDeposit = useSelector(state => state?.deposit) 
  const {loading, appErr, serverErr, depositList} = allDeposit;


      //filter only deposits
      const depositListCard = depositList?.docs?.filter(el => el.type === "Deposit",[]) 
      console.log(depositListCard)
      const loadingArray = new Array(1).fill(null)

  return (
    <TableContainer component={Paper} className = "admin-table">
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>Transaction ID</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className='table-body'>
        {loading? <h1 className='deposit-loading'><l-mirage size="80" speed="2.5" color="black"></l-mirage></h1>: appErr || serverErr? <div>{appErr}{serverErr}</div>: depositList?.docs?.length <= 0? <h1 className='deposit-loading'>No deposits found.</h1>: depositListCard?.map((el)=>{
            return(
                
                        <TableRow item = {el} key={el?._id}>
                        <TableCell className='tableCell'>{el?.user?.email}</TableCell>
                        <TableCell className='tableCell'>{currencyFormatter(userData?.currency,el?.amount)}</TableCell>
                        <TableCell className='tableCell'>{dateFormatter(el?.createdAt)}</TableCell>
                        <TableCell className='tableCell'>{el?.method}</TableCell>
                        <TableCell className='tableCell'><span className={`status ${el?.status}`}>{el?.status}</span></TableCell>     
                        <TableCell className='tableCell'><AdminDepositCard id = {el?._id}><button><img src={Edit}/></button></AdminDepositCard></TableCell>     
                      </TableRow>
        )})}
                      <Pagination setPage=  {setPage} pageNumber = {depositList?.totalPages}/>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminDepositTable;

