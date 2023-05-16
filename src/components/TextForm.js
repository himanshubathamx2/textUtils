import React, {useState} from 'react'



export default function TextForm(props) 
{

    const [text, setText] = useState('Enter text here2'); 
  //text="new text"; //wrong way to change the state
  //setText("new2 text");//correct way to change state

  const handleUpClick= ()=>
  {
    console.log("Up button clicked new text is :  "+text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  } 
  const handleLoClick= ()=>
  {
    console.log("Lo button clicked new text is :  "+text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerrcase!","success");
  } 
  const handleEmailExtract= ()=>
  {
    console.log("Email extract button clicked new text is :  "+text);
    let newText="ff";
    setText(newText);
  } 
  
  const handleCopy= ()=>
  {
    //console.log("Copy module runs");
    // let text2= document.getElementById("myBox");
    // text2.select();
    navigator.clipboard.writeText(text);// if we r using navigator thn upper things are not required
    document.getSelection().removeAllRanges();
    // {to deselect after copy}
    props.showAlert("Text copied","success");
  }

  const handleExtraSpaces= ()=>
  {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces handled","success");
  }
  const handleOnChange= (event)=>
  {
    console.log("Handle on change");
    setText(event.target.value);// will set text to whatever user writes

  } 
 
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1d222b':'white', color: props.mode==='dark'?'white':'black'}}  value={text} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleEmailExtract}>Extracting emails</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Characters: {text.length}</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to review!"}</p>
    </div>
    </>
  )
}
