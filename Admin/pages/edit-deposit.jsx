import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/adminSideNav.jsx";
import TopNav from "../components/adminNav";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { updateDepositAction } from "../../redux/depositSlice.js";
import Disabled from '../../components/disabledbutton'
import { toast } from "react-hot-toast";
import "../adminStyles/single.css";
import { useEffect } from "react";


  //form validation
  const formSchema = Yup.object({
    amount: Yup.number().required("Amount is required"),
    method: Yup.string().required("Amount is required"),
    status: Yup.string(),
  })

const Editdeposit = () => {

  const { filterby } = useParams();
  const depositData = useSelector((state) => state?.deposit?.depositList);
  const depositDisplay = depositData?.docs?.filter((el) => el._id === filterby)[0];
  console.log(depositData)
     //dispatch
     const dispatch = useDispatch();
      //formik form
      const formik = useFormik({
        initialValues:{
          amount: depositDisplay?.amount,
          method: depositDisplay?.method,
          status: depositDisplay?.status,
        },
        onSubmit: values =>{
          const data = {
            ...values,
            id: depositDisplay?.id,
          }
          dispatch(updateDepositAction(data))
        },
        validationSchema: formSchema,
      })

      const deposit = useSelector(state=>state.deposit);
      console.log(deposit)
      const {appErr, serverErr, depositUpdated, loading, isDepositUpdated} = deposit

      useEffect(()=>{
        if(isDepositUpdated)
        toast("Updated")
      }, [isDepositUpdated, dispatch]);


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
              <Link to="/admindeposit"><IoIosArrowBack className="icon"/>All deposits</Link>
              <h1>Deposit details</h1>
              <div className="item">
                <form action="" onSubmit={formik.handleSubmit}>
                  {appErr || serverErr? <div>{appErr}{serverErr}</div>:null}
                  <input type="number" value={formik.values.amount} onChange={formik.handleChange("amount")} onBlur = {formik.handleBlur("amount")}/>
                  <input type="text" value={formik.values.method} onChange={formik.handleChange("method")} onBlur = {formik.handleBlur("method")}/>
                  <input type="text" value={formik.values.status} onChange={formik.handleChange("status")} onBlur = {formik.handleBlur("status")}/>
                  {
                    loading?<Disabled/>: <button>Update</button>
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

export default Editdeposit;
