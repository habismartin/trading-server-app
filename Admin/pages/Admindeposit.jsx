import React from "react";
import { useState } from "react";
import Sidebar from "../components/adminSideNav.jsx";
import TopNav from "../components/adminNav";
import { IoMdClose } from "react-icons/io";
import { IoMdCloudUpload } from "react-icons/io";
import { ImagetoBase64 } from "../utility/ImagetoBase64.js";
import { toast } from "react-hot-toast"
import AdminDepositTable from "../components/depositTable.jsx";
import "../adminStyles/deposit.css";

const Admindeposit = () => {

  //showAdddeposit menu method
  const [showAddmethod, setShowAddmethod] = useState();
  const handleShowAddmethod = () => {
    setShowAddmethod((preve) => !preve);
  };

  //upload deposit methods
  const [data,setData] = useState({
    image: "",
    name: "",
    number: "",
    user: "",
    category: "",
  })

  const handleOnchange = (e) =>{
    const {name,value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })

  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(data)

    const { image,name,number,user,category,} = data

    if (image && name && number && user && category){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admindeposit`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes = await fetchData.json()
      console.log(fetchRes)
      toast(fetchRes.message)

      setData(()=>{
        return{
          image: "",
          name: "",
          number: "",
          user: "",
          category: "",
        }
      })

    }else {
      toast("Enter required fields")
    }
  }

  const uploadImage = async(e) =>{
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)
    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
  }

  return (
    <div className="admin-deposit">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="admin-deposit-page">
        <TopNav />

        <button className="add-method-btn" onClick={handleShowAddmethod}>ADD NEW DEPOSIT METHOD</button>
        
        <div className="admin-deposit-body">
  
        {showAddmethod && (
          <div className="method-position">
            <div className="new-method">
              <IoMdClose onClick={handleShowAddmethod} className="method-close"/>

              <form action="" onSubmit={handleSubmit}>
              <label htmlFor="image" id="image">Image</label>
                <div className="image">
                  {data.image? <img src={data.image}/> : <span><IoMdCloudUpload/></span>}
                    <input id="image" accept="image/*" name = "image" onChange={uploadImage} type="file"/>
                </div>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleOnchange} value = {data.name}/>

                <label htmlFor="number">Number</label>
                <input type="text" name="number" onChange={handleOnchange} value = {data.number}/>

                <label htmlFor="user">User</label>
                <input type="text" name="user" onChange={handleOnchange} value = {data.user}/>

                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleOnchange} value = {data.category}>
                  <option value="">Select category</option>
                  <option value={"Cards"}>Bank Cards</option>
                  <option value={"Cryptocurrencies"}>Cryptocurrencies</option>
                  <option value={"Transfers"}>Transfers</option>
                </select>
                <button>ADD</button>
              </form>

            </div>
          </div>
        )}

        <div className="deposit-list">
        <AdminDepositTable/>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Admindeposit;
