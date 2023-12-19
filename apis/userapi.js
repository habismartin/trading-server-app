const expressAsyncHandler = require("express-async-handler");
const { User } = require("../schema/userSchema");
const { generateToken } = require("../middleware/generateToken");


//signup
const createUserctrl = expressAsyncHandler(async(req,res)=>{
    const { email, password, currency, isAdmin, image, firstName, lastName, country, phone,balance, demoBalance, address, dob, verification, } = req?.body;

    const oldUser = await User.findOne({ email });

    if(oldUser) throw new Error( "email is already registered");
  
    try {
      const user = await User.create({
        email,
        password,
        currency,
        isAdmin,
        balance,
        demoBalance,
        image,
        firstName,
        lastName,
        country,
        phone,
        address,
        dob,
        verification,
      });
      res.status(200).json({user, message: "Signed up successfully", alert: true})
    } catch (error) {
      res.send({ message: "Unable to sign up", alert: false });
    }
});

//fetch all users
const fetchUsersctrl = expressAsyncHandler(async(req, res)=>{
  const {page} = req?.query;
  try {
    const users = await User.paginate({}, {limit: 10, page: Number(page)})
    res.json(users);
  } catch (error) {
    res.json(error)
  }
});

//update
//update user profile
const updateUsersctrl = expressAsyncHandler( async (req,res)=>{
  const {id} = req?.params;
  console.log(req?.body)
  try {
    const updateprofile = await User.findByIdAndUpdate(id, {
      email: req?.body?.email,
      currency: req?.body?.currency,
      isAdmin: req?.body?.isAdmin,
      balance: req?.body?.balance,
      demoBalance: req?.body?.demoBalance,
      status: req?.body?.status,
      image: req?.body?.image,
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      country: req?.body?.country,
      phone: req?.body?.phone,
      address: req?.body?.address,
      dob: req?.body?.dob,
      verification: req?.body?.verification,
    },
    {
      new: true,
      runValidators: true,
    });
    res.json(updateprofile)
  } catch (error) {
    console.error(error)
    res.json(error)
  }
})

//login
const loginUserctrl = expressAsyncHandler(async (req,res)=>{
    const { email, password } = req?.body;

    const userFound = await User.findOne({ email });

    if (userFound && (await userFound?.isPasswordMatch(password))){
      res.json({
        _id: userFound?._id,
        email: userFound?.email,
        currency: userFound?.currency,
        isAdmin: userFound?.isAdmin,
        image: userFound?.image,
        balance: userFound?.balance,
        demoBalance: userFound?.demoBalance,
        firstName: userFound?.firstName,
        lastName: userFound?.lastName,
        dob: userFound?.dob,
        verification: userFound?.verification,
        country: userFound?.country,
        phone: userFound?.phone,
        address: userFound?.address,
        token: generateToken(userFound?._id),
        message: "Logged in",
        alert: true,
      })
    }else{
      res.status(401);
      throw new Error ('Invalid login details')
    }
})


//user profile
const userProfilectrl = expressAsyncHandler( async (req,res)=>{
  try {
    const profile = await User.findById(req?.user?._id).populate(['deposit','withdrawal']);
    res.json(profile)
  } catch (error) {
    res.json(error)
  }
})
//update user profile
const updateProfilectrl = expressAsyncHandler( async (req,res)=>{
  try {
    const profile = await User.findByIdAndUpdate(req?.user?._id, {
      email: req?.body?.email,
      currency: req?.body?.currency,
      isAdmin: req?.body?.isAdmin,
      image: req?.body?.image,
      balance: req?.body?.balance,
      demoBalance: req?.body?.demoBalance,
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      country: req?.body?.country,
      phone: req?.body?.phone,
      address: req?.body?.address,
      dob: req?.body?.dob,
      verification: req?.body?.verification,
    },
    {
      new: true,
      runValidators: true,
    });
    res.json(profile)
  } catch (error) {
    res.json(error)
  }
})

module.exports = { createUserctrl, fetchUsersctrl, loginUserctrl,updateUsersctrl, userProfilectrl, updateProfilectrl }