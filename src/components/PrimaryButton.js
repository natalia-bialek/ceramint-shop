import * as React from "react";
import "../styles/components/PrimaryButton.css";

export default function PrimaryButton(props) {
  const classes = `button--primary text--bold ${props.className}`;
  return <button className={classes}>{props.children}</button>;
}
