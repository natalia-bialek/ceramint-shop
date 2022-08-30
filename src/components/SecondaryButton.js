import * as React from "react";
import "../styles/components/SecondaryButton.css";

export default function SecondaryButton(props) {
  const classes = props.className
    ? `button--secondary text--bold ${props.className}`
    : "button--secondary text--bold";
  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
