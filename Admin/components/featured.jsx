import React, {useEffect}from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import {CircularProgressbar} from "react-circular-progressbar"
import { IoIosArrowUp } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { fetchAllStatsAction } from '../../redux/accountStatsSlices';
import currencyFormatter from '../../utilities/currencyFormatter';
import "react-circular-progressbar/dist/styles.css"
import '../adminStyles/featured.css'

const Featured = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllStatsAction())
  },[dispatch]);

  const statistics = useSelector( state => state?.statistics)
  const {loading, appErr, serverErr, stats} = statistics;

  const deposits = stats?.depositStats[0]
  const withdrawals = stats?.withdrawalStats[0]
  const users = stats?.userStats[0];

  const userData = useSelector(state => state.user.userAuth);

  const percentplus = deposits?.generalPercentage+withdrawals?.generalPercentage

  return (
    <div className='featured'>
      <div className="featured-top">
        <h1>Total revenue</h1>
        <HiDotsVertical/>
      </div>
      <div className="featured-bottom">
        <div className="featured-chart">
            <CircularProgressbar value={percentplus} text = {Math.floor(percentplus)+"%"} strokeWidth ={7}/>
        </div>
        <p className='title'>Total transactions</p>
        <p className='amount'>{currencyFormatter(userData.currency,deposits?.totalDeposit + withdrawals?.totalWithdrawal)}</p>
        <p className='desc'>This contians the total records for each major sections <br /> <br /> of the broker</p>

        <div className="target">
            <div className="target-item">
                <div className="item-title">Users</div>
                <div className="item-result positive">
                    <IoIosArrowUp/>
                    <div className="item-Amount">{users?.totalRecordUsers}</div>
                </div>
            </div>
            <div className="target-item">
                <div className="item-title">Deposits</div>
                <div className="item-result positive">
                    <IoIosArrowUp/>
                    <div className="item-Amount ">{currencyFormatter(userData.currency,deposits?.totalDeposit)} </div>
                </div>
            </div>
            <div className="target-item">
                <div className="item-title">Withdrawals</div>
                <div className="item-result positive">
                    <IoIosArrowUp/>
                    <div className="item-Amount">{currencyFormatter(userData.currency,withdrawals?.totalWithdrawal )}</div>
                </div>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Featured
