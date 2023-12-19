import React, {useEffect} from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiTrade } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { MdAccountBalanceWallet, MdDifference } from "react-icons/md";
import { fetchAllStatsAction } from '../../redux/accountStatsSlices';
import currencyFormatter from '../../utilities/currencyFormatter';
import "../adminStyles/widget.css"

const AdminWidgets = ({ type }) => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllStatsAction())
  },[dispatch]);

  const statistics = useSelector( state => state?.statistics)
  console.log(statistics)
  const {loading, appErr, serverErr, stats} = statistics;

  const deposits = stats?.depositStats[0];
  const withdrawals = stats?.withdrawalStats[0];
  const users = stats?.userStats[0];

  const userData = useSelector(state => state.user.userAuth);
    let data;

    const zero = 0;

    const summarytotal = ((deposits?.totalDeposit - withdrawals?.totalWithdrawal)/(deposits?.totalDeposit + withdrawals?.totalWithdrawal))
    const sumperc = summarytotal * 100


    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                amount: [users?.totalRecordUsers],
                diff: [(users?.totalRecordUsers/200)*100],
                icon: <FaRegUser className='icon' style={{ backgroundColor:"rgba(255, 0, 0, 0.266)", color: "red"}}/>,
            };
            break;
            
        case "deposit":
            data = {
                title: "DEPOSITS",
                isMoney: true,
                link: "See all deposits",
                diff: [deposits?.generalPercentage],
                amount: [deposits?.totalDeposit],
                icon: <GiTrade className='icon' style={{ backgroundColor:"rgba(255, 255, 0, 0.209)", color: "yellow"}}/>,
            };
            break;
 
            case "withdrawal":
            data = {
                title: "WITHDRAWALS",
                isMoney: true,
                link: "See all withdrawals",
                diff: [withdrawals?.generalPercentage],
                amount:  [withdrawals?.totalWithdrawal],
                icon: <CiMoneyCheck1 className='icon' style={{ backgroundColor:"rgba(172, 255, 47, 0.259)", color: "greenyellow"}}/>,
            };
            break;
  
            case "summary":
            data = {
                title: "SUMMARY",
                isMoney: true,
                link: "See details",
                diff: [sumperc],
                amount: [deposits?.totalDeposit - withdrawals?.totalWithdrawal],
                icon: <MdAccountBalanceWallet className='icon' style={{ backgroundColor:"rgba(239, 0, 239, 0.283)", color: "rgb(239, 0, 239)"}}/>,
            };
            break;
            default:
            break;
    }

  return (
    <div className='admin-widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney ? currencyFormatter(userData?.currency,data?.amount): data?.amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className={data.diff <zero? "percentage negative":"percentage positive"}>{data.diff <0 ?<FaAngleDown/>:<IoIosArrowUp/>}{Math.floor(data.diff)}%</div>
        {data.icon}
      </div>
    </div>
  )
}

export default AdminWidgets
