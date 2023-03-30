import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("uppercase was clicked");
    let newText =text.toUpperCase();
    setText(newText)
  }
  const handleLowClick =()=>{
    console.log("lowercase was clicked");
    let newText =text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    console.log("on change is clicked");
    setText(event.target.value)
  }
  const handleCopy=()=>{
    console.log("text is copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const[text,setText]= useState(" ");
  return (
    <>
    <div classname="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
     <h1  >{props.heading} </h1>
   <div className ="mb-3" >
     
      <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="mybox" rows="6"></textarea>

   </div>
   <button className=" btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
   <button className=" btn btn-primary" onClick={handleLowClick}>convert to lowercase</button>
   <button className=" btn btn-primary" onClick={handleCopy}>copy text</button>

 </div>
 <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
  <h2  >summery</h2>
  <p> {text.split( " ").length} words and {text.length} characters</p>
  <p>{0.008* text.split( " ").length} min time will be taken to read the content</p>
 </div>
    </>
  )
}
