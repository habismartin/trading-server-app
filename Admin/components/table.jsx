import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import '../adminStyles/table.css'

const Admintable = () => {

  const userData = useSelector((state) => state.user);
  console.log(userData)
    
    const rows = [
        {
            id: 1111111,
            trade: "upstake",
            email: "email@gmail.com",
            date: "1 march",
            amount: 1000,
            method: "Binance",
            status: "Approved"
        },
        {
            id: 1111111,
            trade: "upstake",
            email: "email@gmail.com",
            date: "1 march",
            amount: 1000,
            method: "Binance",
            status: "Pending"
        },
        {
            id: 1111111,
            trade: "upstake",
            email: "email@gmail.com",
            date: "1 march",
            amount: 1000,
            method: "Binance",
            status: "Pending"
        },
        {
            id: 1111111,
            trade: "upstake",
            email: "email@gmail.com",
            date: "1 march",
            amount: 1000,
            method: "Binance",
            status: "Approved"
        },
        {
            id: 1111111,
            trade: "upstake",
            email: "email@gmail.com",
            date: "1 march",
            amount: 1000,
            method: "Binance",
            status: "Approved"
        }
    ] 



  return (
    <TableContainer component={Paper} className = "admin-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>User ID</TableCell>
            <TableCell className='tableCell'>Trade</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>{row.trade}</TableCell>
              <TableCell className='tableCell'>{row.email}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Admintable
