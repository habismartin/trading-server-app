import './App.css';
import {BrowserRouter as Router,Routes,Route,Switch,RouterProvider} from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './components/protectedRoute'
import Home from './pages/home'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import FAQ from './pages/FAQ'
import About from './pages/about'
import Trading from './pages/trading'
import Demo from './pages/demo'
import Account from './pages/account';
import Deposit from './pages/deposit';
import Admin from './Admin/pages/admin'
import AdminWithdrawal from './Admin/pages/Adminwithdrawal'
import AdminDeposit from './Admin/pages/Admindeposit'
import AdminUsers from './Admin/pages/users'
import Single from './Admin/pages/Single';
import DepositMenu from './pages/depositMenu';
import AdminTransactions from './Admin/pages/transactions'
import Analytics from './pages/analytics'
import toast, { Toaster } from 'react-hot-toast';
import { setDataMethod } from './redux/methodSlice';
import Withdrawal from './pages/withdrawal';
import NotAdmin from './components/notAdmin';
import AdminRoute from './components/adminRoute';
import Editdeposit from './Admin/pages/edit-deposit';
import Editwithdrawal from './Admin/pages/edit-withdrawal';
import Transactions from './pages/transactions';
import Trades from './pages/trades';
import { loginRedux } from './redux/userSlice';
import './LDM/light.css'
import { LightModeContext } from './context/lightModeContext';

function App() {

  const {lightMode} = useContext(LightModeContext)

  const dispatch = useDispatch()
  const methodData = useSelector((state)=>state.method)
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admindeposit`)
      const resData =  await res.json()
      dispatch(setDataMethod(resData))
    })()
  },[])

  return (
    <>
    <Toaster />
    <div className={lightMode? "app light":"app"}>

      <div className="pages">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/trades' element={<Trades/>}/>

          <Route path='/not-admin' element={<NotAdmin/>}/>
          <Route path='/trading' element={<ProtectedRoute/>}>
            <Route path='/trading' element = {<Trading/>}/>
          </Route>

          <Route path='/demo' element={<ProtectedRoute/>}>
            <Route path='/demo' element = {<Demo/>}/>
          </Route>
          
          <Route path='/account' element={<Account/>}/>
          <Route path='/deposit' element={<Deposit/>}/>
          <Route path='/depositmenu/:filterby' element={<DepositMenu/>}/>
          <Route path='/admintransactions' element={<AdminTransactions/>}/>
          <Route path='/analytics' element={<Analytics/>}/>

          <Route path='/withdrawal' element={<ProtectedRoute/>}>
            <Route path='/withdrawal' element = {<Withdrawal/>}/>
          </Route>

          {/* //////fornow */}
          <Route path='/admin' element={<AdminRoute/>}>
            <Route path='/admin' element={<Admin/>}/>
          </Route>

          <Route path='/adminusers' element={<AdminRoute/>}>
            <Route path='/adminusers' element={<AdminUsers/>}/>
          </Route>
          <Route path='/adminusers'>
            <Route index element={<AdminUsers/>}/>
            <Route path=':filterby' element={<Single/>}/>
          </Route>

          <Route path='/admindeposit' element={<AdminRoute/>}>
            <Route path='/admindeposit' element={<AdminDeposit/>}/>
          </Route>
          <Route path='/admindeposit'>
            <Route index element={<AdminDeposit/>}/>
            <Route path=':filterby' element={<Editdeposit/>}/>
          </Route>

          <Route path='/adminwithdrawal' element={<AdminRoute/>}>
            <Route path='/adminwithdrawal' element={<AdminWithdrawal/>}/>
          </Route>
          <Route path='/adminwithdrawal'>
            <Route index element={<AdminWithdrawal/>}/>
            <Route path=':filterby' element={<Editwithdrawal/>}/>
          </Route>

        </Routes>
      </Router>  
      </div>

    </div>
    </>

  );
}

export default App;
