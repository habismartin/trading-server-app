const expressAsyncHandler = require("express-async-handler");
const {Balance} = require('../schema/balanceSchema')


//create balance
const balancectrl = expressAsyncHandler(async (req, res) => {
  const { balance, demoBalance } = req.body;

  try { 
    const balance = await Balance.create({
      user: req?.user?._id,
      balance,
      demoBalance,
    });

      res.json({balance, message: "created", alert: true})
    
    

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

// fetch balance
const fetchbalancectrl = expressAsyncHandler(async (req, res) => {
  const {page} = req?.query;
  try {
    const balance = await Balance.paginate({}, {limit: 10, page: Number(page), populate: ["user"]});
    res.json(balance)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

// fetch single balance
const singlebalancectrl = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  try {
    const balance = await Balance.findById(id);
    res.json(balance)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

//update
const updateBalancectrl = expressAsyncHandler(async(req,res)=>{
  const {id} = req?.params;
  const { balance } = req.body;
  const { demoBalance } = req.body;
  try {
    const balance = await Balance.findByIdAndUpdate(id, {
      balance, demoBalance
    }, {new: true})
    res.json(balance)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
})


module.exports = { balancectrl, fetchbalancectrl, singlebalancectrl, updateBalancectrl };
