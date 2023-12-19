import React, {useEffect}  from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStatsAction } from '../../redux/accountStatsSlices';
import '../adminStyles/charts.css'

ChartJS.register(ArcElement, Tooltip, Legend);



const Charts = () => {
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchAllStatsAction())
},[dispatch]);

const statistics = useSelector( state => state?.statistics)
const {loading, appErr, serverErr, stats} = statistics;

const deposits = stats?.depositStats[0]?.totalRecordDeposit
const withdrawals = stats?.withdrawalStats[0]?.totalRecordWithdrawal

const data = {
  labels: ['Withdrawals', 'Deposits'],
  datasets: [
    {
      label: '# of transactions',
      data: [withdrawals, deposits],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="admin-chart">
      <h5>Transactions comparison</h5>
      <Pie data={data}/>
    </div>
  );
}

export default Charts;



