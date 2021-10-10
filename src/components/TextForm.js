import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]= useState("enter text here");

    let mystyle={
        backgroundColor: props.mode==='dark'? 'black':props.orangemode==='orange'? 'red':'#0073cf',
        color: props.mode==='dark'?'white':props.orangemode==='orange'? 'red':'white'
    }

    const handleUPclick= () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!","success");
    }
    const handleLOclick= () => {
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!","success");
    }
    const handleClearclick= () => {
        let newText="";
        setText(newText);
        props.showAlert("Text cleared successfully!","success");
    }
    const handleMULTclick= () => {
        let newText=text+text;
        setText(newText);
        props.showAlert("Text multiplied successfully!","success");
    }
    const handleCOPYclick= () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard successfully!","success");
    }
    const handleExtraSpaceclick= () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space cleared successfully!","success");
    }

    const handleOnChange= (event) => {
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={props.mode==='dark'? {color:'white'}: props.orangemode==='orange'?{color:'red'}:{color:'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={ props.mode==='dark'? {backgroundColor:'#0a2235', color:'white'}: props.orangemode==='orange'? {backgroundColor:'orange',color:'red'}: {backgroundColor:'white',color:'black'}} ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUPclick} style={mystyle}>convert to uppercase</button>      
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLOclick}  style={mystyle}>convert to Lowecase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleMULTclick}  style={mystyle}>Multiply words</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCOPYclick}  style={mystyle}>Copy</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaceclick}  style={mystyle}>Clear Extra Space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearclick}  style={mystyle}>Clear</button>
      </div>
      <div className="container" style={props.mode==='dark'? {color:'white'}: props.orangemode==='orange'?{color:'red'}:{color:'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element) => { return element.length!==0}).length } words and {text.length} characters</p>
          <p>Takes {0.008 * text.split(" ").filter((element) => { return element.length!==0}).length} Minutes to read</p>
          <h2>Preview</h2>
          <span>{text.length>0? text : "Nothing to preivew!..."}</span>
      </div>
      </>
    )
}
