import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Error from "../UI/Error";

function AddUser(props) {
    const clearData={
        name: "",
        height: "",
        weight: "",
        id:""
      }
  const [userData, setUserData] = useState(clearData);

  const [error,setError]=useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if(userData.name.trim().lenght===0 || userData.height.trim().lenght===0 || userData.weight.trim().length===0){
        setError({title:"Invalid Data",message:"Try to Add Some Data in Name or Age or Weight"})
        setUserData(clearData);
        return
    }
    if(+userData.height<0 && +userData.weight<0){
        setError({title:"Invalid Age and Weight Data",message:"Try to Add Age or Weight [Greater than 0]"})
        setUserData(clearData);
        return
    }
    if(+userData.height<0 || +userData.height>100){
        setError({title:"Invalid Age",message:"Try to Add Age [Between 0 to 100]"})
        setUserData(clearData);
        return 
    }
    if(+userData.height<0 ){
        setError({title:"Invalid Weight",message:"Try to Add Weight [Greater than 0]"})
        setUserData(clearData);
        return
    }
    props.addData({...userData,id:Math.random()});
    // console.log(userData);
    setUserData(clearData);
  };

  const handleUsernameChange = (e) => {
    setUserData((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAgeChange = (e) => {
    setUserData((prevState) => {
      return { ...prevState, height: e.target.value };
    });
  };

  const handleWeightChange = (e) => {
    setUserData((prevState) => {
      return { ...prevState, weight: e.target.value };
    });
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
    {error && <Error title={error.title} message={error.message} onClick={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Name : </label>
          <input
            type="text"
            id="username"
            value={userData.name}
            onChange={handleUsernameChange}
          />
          <label htmlFor="height">Height (in Meters) : </label>
          <input
            type="number"
            id="height"
            value={userData.height}
            onChange={handleAgeChange}
          />
          <label htmlFor="weight">Weight (in Kg) : </label>
          <input
            type="number"
            id="weight"
            value={userData.weight}
            onChange={handleWeightChange}
          />
          <Button type={'submit'} >Add</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
