import React, { useEffect }  from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import Disabledbutton from "../components/disabledbutton";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRightShort } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";


//form validation
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
})


const Login = () => {
  //navigate
  const navigate = useNavigate();
  
  //dispatch
  const dispatch = useDispatch();
  
  //get data from store
  const user = useSelector(state => state?.user);
  const { userAppErr, userServerErr, userLoading, userAuth } = user;
  console.log(user)

  //formik form
  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    onSubmit: values =>{
      dispatch(loginAction(values))
    },
    validationSchema: formSchema,
  });

  //redirect
  useEffect(()=>{
    if(userAuth){
      navigate('/trading')
      toast("Login Successful")
    }
  },[userAuth])

  return (
    <div>
      <Navbar />
      <div className="login">
        <h1>Sign In To Your Account</h1>
        <div className="login-box">
          <div className="account-buttons">
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="registration">Registration</button>
            </Link>
          </div>

          {userAppErr || userServerErr ? <div className="show-error-top">{userServerErr}{userAppErr}</div> : null}
          <form className="login-form" action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur = {formik.handleBlur("email")}
            />
            <div className="show-error">
              {formik.touched.email && formik.errors.email}
            </div>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur = {formik.handleBlur("password")}
            />
            <div className="show-error">
              {formik.touched.password && formik.errors.password}
            </div>

            <div className="login-check">
              <input type="checkbox" id="checkbox" className="checkbox" />
              <label htmlFor="checkbox">
                Remember me <Link to="/forgot">Forgot your password?</Link>
              </label>
            </div>

            {
              userLoading? (<Disabledbutton/>):<button className="signin-btn">Sign in<p><BsArrowRightShort size={23} /></p></button>
            }

          </form>

          <div className="login-bottom">
            <h4>Sign in via</h4>

            <div className="login-media">
              <h2 className="login-fb">
                {" "}
                <BiLogoFacebook />
              </h2>
              <h2 className="login-gg">
                <FcGoogle />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
