import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Error.module.css";

function Error(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClick}></div>

      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="submit" onClick={props.onClick}>OK</Button>
        </footer>
      </Card>
    </>
  );
}

export default Error;
