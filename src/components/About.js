import React, { useState } from 'react'

export default function About(){
 const[MyStyle,setMyStyle]= useState({

  color: "white",
  backgroundColor: 'black'
})
const[btntext,setBtnText]=useState("enable dark Mode")
 let toggleStyle=()=>{
  if(MyStyle.color==='white'){
    setMyStyle({
      color: "black",
  backgroundColor: 'white',
  
    })
    setBtnText("Enable dark mode")
  }
else{
  setMyStyle({
    color: "white",
backgroundColor: 'black'
  })
  setBtnText("Enable  white mode")
}
}
  return (
    <div className="container" style={MyStyle}>
      <h1>about us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
             <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Contact
              </button>
              </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body"  style={MyStyle}>
              <strong>To contact mail at ridhijain2412@gmail.com</strong>  <code></code>
         </div>
       </div>
    </div>
   <div className="accordion-item">
         <h2 className="accordion-header">
           <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             Info
           </button>
         </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"  style={MyStyle}>
            <strong>This site is made by Ridhi(website developer)</strong>  <code></code>          </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        vision
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <strong>To provide the user a all in one word playing website</strong><code></code>
           </div>
    </div>
  </div>
</div>
<div className= "container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
</div>

    </div>
  )
}
