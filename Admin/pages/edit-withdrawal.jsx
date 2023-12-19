import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/adminSideNav.jsx";
import TopNav from "../components/adminNav";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { updateWithdrawalAction } from "../../redux/withdrawalSlice.js";
import Disabled from '../../components/disabledbutton'
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import "../adminStyles/single.css";


  //form validation
  const formSchema = Yup.object({
    amount: Yup.number(),
    account: Yup.string(),
    number: Yup.number(),
    name: Yup.string(),
    status: Yup.string(),
  })

const Editwithdrawal = () => {

  const { filterby } = useParams();
  const withdrawalData = useSelector((state) => state?.withdrawal?.withdrawalList);
  const withdrawalDisplay = withdrawalData?.docs?.filter((el) => el._id === filterby)[0];

     //dispatch
     const dispatch = useDispatch();
      //formik form
      const formik = useFormik({
        initialValues:{
          amount: withdrawalDisplay?.amount,
          account: withdrawalDisplay?.account,
          number: withdrawalDisplay?.number,
          name: withdrawalDisplay?.name,
          status: withdrawalDisplay?.status,
        },
        onSubmit: values =>{
          const data = {
            ...values,
            id: withdrawalDisplay?.id,
          }
          dispatch(updateWithdrawalAction(data))
        },
        validationSchema: formSchema,
      })

      const withdrawal = useSelector(state=>state.withdrawal);
      const {appErr, serverErr, withdrawalUpdated, loading, isWithdrawalUpdated} = withdrawal

      useEffect(()=>{
        if(isWithdrawalUpdated)
        toast("Updated")
      }, [isWithdrawalUpdated, dispatch]);


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
              <Link to="/adminwithdrawal"><IoIosArrowBack className="icon"/>All wthdrawals</Link>
              <h1>Wthdrawal details</h1>
              <div className="item">
                <form action="" onSubmit={formik.handleSubmit}>
                  {appErr || serverErr? <div>{appErr}{serverErr}</div>:null}
                  <input type="number" value={formik.values.amount} onChange={formik.handleChange("amount")} onBlur = {formik.handleBlur("amount")}/>
                  <input type="text" value={formik.values.account} onChange={formik.handleChange("account")} onBlur = {formik.handleBlur("account")}/>
                  <input type="text" value={formik.values.number} onChange={formik.handleChange("number")} onBlur = {formik.handleBlur("number")}/>
                  <input type="text" value={formik.values.name} onChange={formik.handleChange("name")} onBlur = {formik.handleBlur("name")}/>
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

export default Editwithdrawal;
