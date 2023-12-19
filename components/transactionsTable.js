import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userProfileAction } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from '../utilities/currencyFormatter';
import dateFormatter from '../Admin/components/dateFormatter'
import Pagination from '../Admin/components/pagination'
import '../Admin/adminStyles/table.css'

const Transactionstable = () => {

    const [ page, setPage ] = useState(1)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(userProfileAction(+page))
    },[dispatch, page, setPage])

    const state = useSelector(state => state?.user);
    const {userLoading, userAppErr, userServerErr, profile } = state

    const deposits = profile?.deposit || [];
    const withdrawals = profile?.withdrawal || [];

    const transactions = [...deposits, ...withdrawals];

    console.log(state)

  const userData = useSelector((state) => state.user);

  return (
    <TableContainer component={Paper} className = "admin-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
        {userLoading? <h1 className='deposit-loading'><l-mirage size="80" speed="2.5" color="black"></l-mirage></h1>: userAppErr || userServerErr? <div>{userAppErr}{userServerErr}</div>: profile?.docs?.length <= 0? <h1 className='deposit-loading'>No transactions found.</h1>: transactions?.map(exp =>{
            return(
                        <TableRow item = {exp} key={exp?._id}>
                        <TableCell className='tableCell'>{dateFormatter(exp?.createdAt)}</TableCell>
                        <TableCell className='tableCell row-cell'><span className={`status ${exp?.status}`}>{exp?.status}</span> {exp?.type}</TableCell>
                        <TableCell className='tableCell row-cell'>{currencyFormatter("usd",exp?.amount)} {exp?.method}</TableCell>        
                      </TableRow>
        )})}
                      <Pagination setPage=  {setPage} pageNumber = {profile?.docs?.totalPages}/>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Transactionstable
