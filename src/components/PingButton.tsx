import React from "react";
import "./PingButton.css";

export interface PingButtonProps {
  onClick: () => void;
}

export default function PingButton(props: PingButtonProps) {
  return (
    <button className="button" onClick={props.onClick}>
      Ping
    </button>
  );
}
