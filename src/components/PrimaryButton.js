import * as React from "react";
import "../styles/components/PrimaryButton.css";

export default function PrimaryButton(props) {
  return <button className="button--primary text--bold">{props.value}</button>;
}
