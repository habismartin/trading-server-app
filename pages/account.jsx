import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup"
import TradingNav from "../components/tradingnav";
import TradingTopNav from "../components/tradingTopNav";
import { MdOutlineClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import accountImage from '../images/account-img.png'
import { FaCamera } from "react-icons/fa";
import { ImagetoBase64 } from "../Admin/utility/ImagetoBase64";
import AccountTopNav from "../components/accountTopNav";
import toast from "react-hot-toast";
import Disabledbutton from "../components/disabledbutton";
import "../styles/account.css";
import { updateProfileAction } from "../redux/userSlice";
//form validation
const formSchema = Yup.object({
  image: Yup.string(),
  firstName: Yup.string(),
  lastName: Yup.string(),
  address: Yup.string(),
  dob: Yup.string(),
  phone: Yup.number(),
  email: Yup.string(),
  country: Yup.string(),
})

const Account = () => {

  const state = useSelector(state => state?.user);
  const {userLoading, userAppErr, userServerErr,userAuth, profile, userUpdate } = state

    //navigate
    const navigate = useNavigate();

    //dispatch
    const dispatch = useDispatch();
    
    //get data from store
    const user = useSelector(state => state?.user);  
    //formik form
    const formik = useFormik({
      enableReinitialize: true,
      initialValues:{
        image: userAuth?.image,
        firstName: userAuth?.firstName,
        lastName: userAuth?.lastName,
        address: userAuth?.address,
        dob: userAuth?.dob,
        phone: userAuth?.phone,
        email: userAuth?.email,
        country: userAuth?.country,
      },
      onSubmit: values =>{
        dispatch(updateProfileAction(values))
      },
      validationSchema: formSchema,
    })

     useEffect(()=>{
      if(userUpdate){
        navigate('/account')
        toast("Updated")
      }
    },[dispatch, userUpdate]);


  const userData = useSelector((state) => state?.user?.userAuth);

  return (
    <div>
      <div className="check">
        <div className="tradingNav">
          <TradingTopNav />
        </div>
      </div>

      <div className="trading-section">
        <div className="tradingnav">
          <TradingNav />
        </div>

        <div className="account-settings">
          <div className="account-options">
            <AccountTopNav/>
          </div>

          <form action="" onSubmit={formik.handleSubmit}>
            <h1>Identity info:</h1>

            <div className="account-image">
              <div className="account-img">
                <img src={accountImage} alt="" />
                <div className="icon-img"><p><FaCamera/></p><input type="file" accept="image/*"/></div>
              </div>

              <div>
                <h2>{userData?.email}</h2>
                <p>ID : {userData?._id}</p>
              </div>
            </div>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur = {formik.handleBlur("email")}/>

            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={formik.values.firstName}
            onChange={formik.handleChange("firstName")}
            onBlur = {formik.handleBlur("firstName")}/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              onBlur = {formik.handleBlur("lastName")}/>

            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" value={formik.values.country}
              onChange={formik.handleChange("country")}
              onBlur = {formik.handleBlur("country")}/>

            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" value={formik.values.address}
              onChange={formik.handleChange("address")}
              onBlur = {formik.handleBlur("address")}/>

            <label htmlFor="dob">Date Of Birth</label>
            <input type="date" name="dob" id="dob" value={formik.values.dob}
              onChange={formik.handleChange("dob")}
              onBlur = {formik.handleBlur("dob")}/>

            {/* <div className="verification-id">
              <input type="file"  value={formik.values.ID}
              onChange={formik.handleChange("ID")}
              onBlur = {formik.handleBlur("ID")}/>
            </div> */}

            {
              userLoading? <Disabledbutton/>:<button>Save</button>
            }
 
          </form>

          <form className="changePassword" action="">
            <label htmlFor="oldPassword">Old Password</label>
            <input type="passowrd" name="oldPassword" id="oldPassword" />

            <label htmlFor="newPassword"> New Password</label>
            <input type="password" name="newPassword" id="newPassword" />

            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              id="confirmNewPassword"
            />

            <button>Change Password</button>
          </form>

          <div className="card">
            <div>
              <h5>Credit / debit card verification:</h5>{" "}
              <button>ADD NEW CARD</button>
            </div>
            <p>You don't have any credit/debit cards for verification</p>
          </div>

          <h6>
            <MdOutlineClose />
            Delete Account
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Account;
