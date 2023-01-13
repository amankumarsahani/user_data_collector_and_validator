import React from "react";
import Card from "../UI/Card";
import List from "./List";
import classes from "./UserList.module.css";

function UserList(props) {
  console.log(props.data)
  return (
    <Card className={classes.users}>
      <ul>
        {props.data.map((info) =>
        <List key={info.id} info={info}/> 
        )}
      </ul>
    </Card>
  );
}

export default UserList;
{/* <li key={info.id}>{`Name: ${info.name} - Height: ${info.height} - Weight: ${info.weight} - BMI:${info.weight/(info.height*info.height)}`}</li> */}
