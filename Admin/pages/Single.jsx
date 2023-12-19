import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/adminSideNav.jsx";
import TopNav from "../components/adminNav";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import Disabledbutton from "../../components/disabledbutton.js";
import { updateUserAction } from "../../redux/userSlice.js";
import { toast } from "react-hot-toast";
import "../adminStyles/single.css";
import { useEffect } from "react";


  //form validation
  const formSchema = Yup.object({
    email: Yup.string(),
    balance: Yup.number(),
    isAdmin: Yup.string(),
    status: Yup.string(),
  })

const Edituser = () => {

  const { filterby } = useParams();
  const userData = useSelector(state => state?.user?.userList) 
  const userDisplay = userData?.docs?.filter((el) => el._id === filterby)[0];
  console.log(userDisplay)
     //dispatch
     const dispatch = useDispatch();
      //formik form
      const formik = useFormik({
        initialValues:{
          balance: userDisplay?.balance,
          isAdmin: userDisplay?.isAdmin,
          email: userDisplay?.email,
          status: userDisplay?.status,
        },
        onSubmit: values =>{
          const data = {
            ...values,
            id: userDisplay?._id,
          }
          dispatch(updateUserAction(data))
        },
        validationSchema: formSchema,
      })

      const user = useSelector(state=>state.user);
      console.log(user)
      const {userAppErr, userServerErr, userUpdated, userLoading } = user

      useEffect(()=>{
        if(userUpdated)
        toast("Updated")
      }, [dispatch, userUpdated]);


  return (
    <div className="single">
      <div className="single-sidebar">
        <Sidebar />
      </div>
      <div className="single-container">
        <TopNav />
        <div className="single-content">
          <div className="single-top">
            <div className="left">
              <Link to="/adminusers"><IoIosArrowBack className="icon"/>All users</Link>
              <h1>User details</h1>
              <div className="item">
                <form onSubmit={formik.handleSubmit}>
                  {userAppErr || userServerErr? <div>{userAppErr}{userServerErr}</div>:null}
                  <input type="number" value={formik.values.balance} onChange={formik.handleChange("balance")} onBlur = {formik.handleBlur("balance")}/>
                  <input type="text" value={formik.values.isAdmin} onChange={formik.handleChange("isAdmin")} onBlur = {formik.handleBlur("isAdmin")}/>
                  <input type="email" value={formik.values.email} onChange={formik.handleChange("email")} onBlur = {formik.handleBlur("email")}/>
                  <input type="text" value={formik.values.status} onChange={formik.handleChange("status")} onBlur = {formik.handleBlur("status")}/>
                  {
                    userLoading?<Disabledbutton/>: <button type="submit">Update</button>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
