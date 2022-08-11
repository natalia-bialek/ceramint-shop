import * as React from "react";
import "../styles/components/SecondaryButton.css";

export default function SecondaryButton(props) {
  const classes = `button--secondary text--bold ${props.className}`;
  return <button className={classes}>{props.children}</button>;
}
