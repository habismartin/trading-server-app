const expressAsyncHandler = require("express-async-handler");
const { Deposit } = require("../schema/depositSchema");
const { Withdrawal } = require("../schema/withdrawalSchema");
const {User} = require('../schema/userSchema')

const accountStatsctrl = expressAsyncHandler(async(req, res)=>{
    try {
            //user stats
    const userStats = await User.aggregate([
        //filter
        // {$match: {user: {$gte: 0}}},
        {
            $group: {
              _id: null,
              // totalUser: { $sum: "$amount" },
              // users: { $push: "$amount" },
              totalRecordUsers: { $sum: 1 },
              // percentage: { $multiply: [{ $divide: ["$totalRecordUsers"] }, 100] },
            },
        //    },
        // //   // Unwind the deposits array
        //      { $unwind: "$totalRecordUsers" },
        // //   // Calculate percentage for each deposit
        //   {
        //     $project: {
        //       _id: 0,
        //       user: "$users",
        //       percentage: { $multiply: [{ $divide: ["$users", "$totalUser"] }, 100] },
        //     },
        //   },
        //   // Group to calculate additional statistics
        // {
        //     $group:{
        //         _id: null,
        //         averageUser: { $avg: "$user" },
        //         totalUser: { $sum: "$user"},
        //         minimumUser: { $min: "$user" },
        //         maxUser: { $max: "$user" },
        //         totalRecordUser: { $sum: 1 },
        //         generalPercentage: { $avg: "$percentage" }, // Calculate the general percentage
        //     },
        }
    ])
            //deposit stats
    const depositStats = await Deposit.aggregate([
        //filter
        {$match: {amount: {$gte: 0}}},
        {
            $group: {
              _id: null,
              totalDeposit: { $sum: "$amount" },
              deposits: { $push: "$amount" },
              totalRecordDeposit: { $sum: 1 },
            },
          },
          // Unwind the deposits array
          { $unwind: "$deposits" },
          // Calculate percentage for each deposit
          {
            $project: {
              _id: 0,
              deposit: "$deposits",
              percentage: { $multiply: [{ $divide: ["$deposits", "$totalDeposit"] }, 100] },
            },
          },
          // Group to calculate additional statistics
        {
            $group:{
                _id: null,
                averageDeposit: { $avg: "$deposit" },
                totalDeposit: { $sum: "$deposit"},
                minimumDeposit: { $min: "$deposit" },
                maxDeposit: { $max: "$deposit" },
                totalRecordDeposit: { $sum: 1 },
                generalPercentage: { $avg: "$percentage" }, // Calculate the general percentage
            },
        }
    ])
    
    //withdrawal stats
    const withdrawalStats = await Withdrawal.aggregate([
        //filter
        {$match: {amount: {$gte: 0}}},

        {
            $group: {
              _id: null,
              totalWithdrawal: { $sum: "$amount" },
              withdrawals: { $push: "$amount" },
              totalRecordWithdrawal: { $sum: 1 },
            },
          },
          // Unwind the deposits array
          { $unwind: "$withdrawals" },
          // Calculate percentage for each deposit
          {
            $project: {
              _id: 0,
              withdrawals: "$withdrawals",
              percentage: { $multiply: [{ $divide: ["$withdrawals", "$totalWithdrawal"] }, 100] },
            },
          },
          // Group to calculate additional statistics
        {
            $group:{
                _id: null,
                averageWithdrawal: { $avg: "$withdrawals" },
                totalWithdrawal: { $sum: "$withdrawals"},
                minimumWithdrawal: { $min: "$withdrawals" },
                maxWithdrawal: { $max: "$withdrawals" },
                totalRecordWithdrawal: { $sum: 1 },
                generalPercentage: { $avg: "$percentage" }, // Calculate the general percentage
            },
        }
    ])

    res.json({depositStats, withdrawalStats, userStats})
    } catch (error) {
        res.json(error);
    }
})

module.exports = {accountStatsctrl}