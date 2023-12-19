const expressAsyncHandler = require("express-async-handler");
const { DepositMethod } = require("../schema/depositmethodSchema")

//upload deposit method
const postdepositMethodctrl = expressAsyncHandler(async(req,res)=>{
    const data = await DepositMethod(req.body);
    const datasave = await data.save();
    res.send({ message: "Uploaded successfully" });
})

//fetch deposit method
const fetchdepositMethodctrl = expressAsyncHandler(async(req,res)=>{
    const data = await DepositMethod.find({});
    res.send(JSON.stringify(data));
})

module.exports = {postdepositMethodctrl, fetchdepositMethodctrl}