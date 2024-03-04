import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const [count, setcount] = useState(0);
  const [words, setwords] = useState(0);
  const [time, setTime] = useState(0 + " Minutes");
  const [clear, setclear] = useState("");

  const handleupclick = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handleonChange = (event) => {
    settext(event.target.value);
  };

  const handledownclick = () => {
    let oldtext = text.toLowerCase(0);
    settext(oldtext);
  };

  const CalculatingLetters = () => {
    let letters = text.length;
    setcount(letters);
  };
  const CalculatingWords = () => {
    let Words = text.split(" ").length;
    setwords(Words);
  };
  const TimeToRead = () => {
    let time = words * 0.008;
    setTime(time);
  };
  const ClearText = () => {
    settext(clear);
  };
  return (
    <div className="container">
      <h1 className="mx-5 my-3">{props.heading}</h1>
      <div className="form-floating my-3 mx-5">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="floatingTextarea2"
          style={{ height: "300px" }}
        ></textarea>
      </div>
      <h2 className="mx-5 my-2">Number of Letters in the above Paragraph</h2>
      <div className="my-2 mx-5">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          value={count}
          onChange={CalculatingLetters}
          style={{ height: "40px" }}
        ></textarea>
      </div>
      <h3 className="mx-5 my-2">The Number of Words in Above Paragraph</h3>
      <div className="my-2 mx-5">
        <textarea
          className="form-control"
          value={words}
          id="floatingTextarea2"
          style={{ height: "40px" }}
        ></textarea>
      </div>
      <h4 className="mx-5 my-2">Time to Read the Above Paragraphs</h4>
      <div className="my-2 mx-5">
        <textarea
          className="form-control"
          value={time}
          id="floatingTextarea2"
          style={{ height: "40px" }}
        ></textarea>
      </div>
      <h5 className="mx-5 my-2">Preview</h5>
      <p className="my-3 mx-5">{text}</p>
      <button
        type="button"
        className="btn btn-primary mx-1 "
        onClick={handleupclick}
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={handledownclick}
      >
        Convert to Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={CalculatingLetters}
      >
        Calculate Letters
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={CalculatingWords}
      >
        Calculate Words
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={TimeToRead}
      >
        Time to Read
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={ClearText}
      >
        Clear Text
      </button>
    </div>
  );
}
