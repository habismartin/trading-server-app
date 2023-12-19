const expressAsyncHandler = require("express-async-handler");
const { Withdrawal } = require("../schema/withdrawalSchema");
const {User} = require('../schema/userSchema')

const withdrawalctrl = expressAsyncHandler(async (req, res) => {
  const { type , amount, number, account, name, status } = req.body;

  try {
    const user = await User.findById(req?.user?._id);

    if (user.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance', alert: false });
    }
      user.balance -= amount;
      await user.save();
      const withdrawal = await Withdrawal.create({
        user: req?.user?._id,
        type,
        amount,
        number,
        account,
        name,
        status,
      });
  
      res.json({withdrawal,balance: user.balance, message: "Withdrawal placed", alert: true})

  } catch (error) {
    console.error("Error withdrawing funds:", error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

// fetch all withdrawals
const fetchwithdrawalctrl = expressAsyncHandler(async (req, res) => {
  const {page} = req?.query;
  try {
    const withdrawal = await Withdrawal.paginate({}, {limit: 10, page: Number(page), populate: "user"});
    res.json(withdrawal)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

// fetch single withdrawal
const singlewithdrawalctrl = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  try {
    const withdrawal = await Withdrawal.findById(id);
    res.json(withdrawal)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

//update
const updatewithdrawalctrl = expressAsyncHandler(async(req,res)=>{
  const {id} = req?.params;
  const { amount } = req.body;
  const { number } = req.body;
  const { account } = req.body;
  const { name } = req.body;
  const { status } = req.body;
  try {
    const withdrawal = await Withdrawal.findByIdAndUpdate(id, {
      amount, number, account, name,status
    }, {new: true})
    res.json(withdrawal)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
})

//delete
const deletewithdrawalctrl = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  try {
    const withdrawal = await Withdrawal.findByIdAndDelete(id);
    res.json(withdrawal)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});


module.exports = { withdrawalctrl, fetchwithdrawalctrl, singlewithdrawalctrl , updatewithdrawalctrl, deletewithdrawalctrl };