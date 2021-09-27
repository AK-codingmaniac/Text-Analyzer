import React, { useState } from "react";
export default function TextForm(props) {
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase","success");
  };
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase","success");
  };
  const handleonchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handlecopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied!!!","success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handlecopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview it"}</p>
      </div>
    </>
  );
}
