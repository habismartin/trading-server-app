const expressAsyncHandler = require("express-async-handler");
const { Deposit } = require("../schema/depositSchema");

//create deposit
const depositctrl = expressAsyncHandler(async (req, res) => {
  const { type, method, amount, status } = req.body;

  console.log(req.user);

  try { 
    const deposit = await Deposit.create({
      user: req?.user?._id,
      type,
      method,
      amount,
      status,
    });

      res.json({deposit, message: "created", alert: true})
    
    

  } catch (error) {
    console.error("Error depositing funds:", error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

// fetch all deposit
const fetchdepositctrl = expressAsyncHandler(async (req, res) => {
  const {page} = req?.query;
  try {
    const deposit = await Deposit.paginate({}, {limit: 10, page: Number(page), populate: ["user", "method"]});
    res.json(deposit)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

// fetch single deposit
const singledepositctrl = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  try {
    const deposit = await Deposit.findById(id);
    res.json(deposit)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});

//update
const updateDepositctrl = expressAsyncHandler(async(req,res)=>{
  const {id} = req?.params;
  const { amount } = req.body;
  const { method } = req.body;
  const { status } = req.body;
  try {
    const deposit = await Deposit.findByIdAndUpdate(id, {
      amount, method, status
    }, {new: true})
    res.json(deposit)
  } catch (error) {
    console.error(error);
    res.json(error)
  }
})

//delete
const deleteDepositctrl = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  try {
    const deposit = await Deposit.findByIdAndDelete(id);
    res.json(deposit)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", alert: false });
  }
});


module.exports = { depositctrl, fetchdepositctrl, singledepositctrl, updateDepositctrl, deleteDepositctrl };
