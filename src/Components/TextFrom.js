import React,{useState} from 'react'

export default function TextFrom(props) {
    const [text,setText]=useState('Enter the text');

    const handleupchar = ()=>{
        console.log("change to upper case.");
       let newText=text.toUpperCase(); 
       setText(newText);
       props.showalert("Converted to uppercase.","Success !");
    }
    const handlechange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handlelochar=(event)=>{
      setText(text.toLowerCase());
    } 
    const handleclearchar=(event)=>{
      let newText="";
      setText(newText);
    }
    
  return (
    <>

        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="mytext" rows="4"  ></textarea>
        </div>

        <button className='btn btn-primary mx-1' onClick={handleupchar}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handlelochar}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleclearchar}>Clear Text</button>

        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary :</h2>
        <p> {text.length} char and {text.split(" ").length} words</p>
        <p>{0.08*text.split(" ").length} Read time </p>

        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        
        </>
  )
}
