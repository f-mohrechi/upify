import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="typing-indicator">
      <div className="typing-circle"></div>
      <div className="typing-circle"></div>
      <div className="typing-circle"></div>
      <div className="typing-shadow"></div>
      <div className="typing-shadow"></div>
      <div className="typing-shadow"></div>
    </div>
  );
}
