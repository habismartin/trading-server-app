import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux";
import TradingNav from "../components/tradingnav";
import TradingTopNav from "../components/tradingTopNav";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { IoAlertOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom' 
import AccountTopNav from "../components/accountTopNav";
import Disabledbutton from "../components/disabledbutton";
import "../styles/depositMenu.css";
import DepositFooter from "../components/depositFooter";
import { depositAction } from "../redux/depositSlice";
import toast from "react-hot-toast";

  //form validation
  const formSchema = Yup.object({
    amount: Yup.number().required("Amount is required"),
    method: Yup.string().required("Deposit method is required"),
    status: Yup.string(),
  })

const DepositMenu = () => {

  const navigate = useNavigate();
  //get deposit methods
  const { filterby } = useParams();
  const methodData = useSelector((state) => state.method.methodList);
  const methodDisplay = methodData.filter((el) => el._id === filterby)[0];

    //dispatch
    const dispatch = useDispatch();

    //formik form
    const formik = useFormik({
      initialValues:{
        amount: "",
        method: "",
        status:"pending",
      },
      onSubmit: (values, {resetForm}) =>{
        dispatch(depositAction(values))
        resetForm({values: ''})
      },
      validationSchema: formSchema,
    })

    //get deposit created from store
    const state = useSelector(state => state?.deposit)
    const {appErr, loading, serverErr, depositCreated, isDepositCreated} = state;

    //redirect
    useEffect(()=>{
      if(isDepositCreated)
      toast("Deposited")
    }, [isDepositCreated, dispatch]);

  return (
    <div className="deposit-menu">
      <div className="top-nav">
        <TradingTopNav />
      </div>

      <div className="deposit-menu-body">
        <div className="sideNav">
          <TradingNav />
        </div>

        <div className="deposit-menu-body-wrapper">
          <AccountTopNav/>
        <div className="deposit-menu-card-wrapper">
          <div className="left-wrapper">
            <h1>Chosen payment method:</h1>
            <div className="deposit-menu-card">
              <div>
                <img src={methodDisplay?.image} />
                <p>{methodDisplay?.name}</p>
              </div>

              <h4>Deposit to: <span>{methodDisplay?.number}</span></h4>
              <h6>Account name: <span>{methodDisplay?.user}</span></h6>

              <p>
                Min amount: <span>N5,000</span>
              </p>
              <p>
                Max amount: <span>N50,000,000</span>
              </p>
            </div>
            <Link to="/deposit"><span><FaCircleChevronLeft/></span>Chose a different payment method</Link>
          </div>

          <div className="deposit-menu-card-options">
            {serverErr || appErr? <div>{serverErr}{appErr}</div>:null}
            <form action="" onSubmit={formik.handleSubmit}>

              <label htmlFor="amount">The Amount</label>
              <input type="number" name="amount" id="amount" placeholder={"NGN"} value={formik.values.amount} onChange={formik.handleChange("amount")} onBlur = {formik.handleBlur("amount")}/>
              <div className="show-error">
              {formik.touched.amount && formik.errors.amount}
              </div>

              <input type="text" name="status" id="status" placeholder={"status"} value={formik.values.status} onChange={formik.handleChange("status")} onBlur = {formik.handleBlur("status")}/>

              <label htmlFor="method">Deposit Method</label>
              <input type="text" name="method" id="method" placeholder={"Type your deposit method here"} value={formik.values.method} onChange={formik.handleChange("method")} onBlur = {formik.handleBlur("method")}/>
              <div className="show-error">
              {formik.touched.method && formik.errors.method}
              </div>

              {loading? <Disabledbutton/>:<button>Deposit<BsArrowRightCircleFill color = "rgba(255, 255, 255, 0.195)" size={20}/></button>}

              <div className="warning"><IoAlertOutline className="alert-icon"/>Attention! This is for {methodDisplay?.name} transfers only. Confirm details before making payments to avoid losing them.<br/><br/>
               Please transfer the amount exactly as you indicated, including the network fees.</div>
            </form>
          </div>
        </div>
        <DepositFooter/>
        </div>
      </div>
    </div>
  );
};

export default DepositMenu;
