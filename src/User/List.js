import React from "react";
import classes from "./UserList.module.css";

export default function List(props) {
  const bmi = (
    props.info.weight /
    (props.info.height * props.info.height)
  ).toFixed(2);
  return (
    <div className={classes.list}>
      <div
        style={{ width: "60%", padding: "10px", border: "2px solid #bbb" }}
        className={classes.listitem}
      >
        <p>{`${props.info.name}`}</p>
      </div>
      <div
        style={{ width: "40%", padding: " 10px ", border: "2px solid #bbb" }}
      >
        <div
          className={classes.listitem}
          style={{ margin: "5px 0" }}
        >{`Height : ${props.info.height} m`}</div>
        <div
          className={classes.listitem}
          style={{ margin: "5px 0" }}
        >{`Weight : ${props.info.weight} kg`}</div>
        <div
          className={classes.listitem}
          style={{ margin: "5px 0" }}
        >{`BMI : ${bmi}`}</div>
      </div>
    </div>
  );
}
