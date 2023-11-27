import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperCase = () => {
    console.log("clicked button");
    setText("Your text area is updated");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "Success");
  };

  const handleLowerCase = () => {
    console.log("clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "Success");
  };

  const handleChangeTextArea = (e) => {
    console.log("onchange");
    setText(e.target.value);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All text are clear!", "Success");
  };

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied", "Success");
  };

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Extra spaces are removed", "Success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChangeTextArea}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>
          Remove extra space
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text === "" ? text.split(" ").length - 1 : text.split(" ").length}{" "}
          Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview here"}
        </p>
      </div>
    </>
  );
}
