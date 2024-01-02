import React,{useState} from 'react'

export default function Textform(props) {

  const hadleUpclick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLowclick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearclick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newtext = '';
    setText(newtext);
    props.showAlert("Text is cleared","success");
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //to don't select the text when it gets copied
    props.showAlert("Text copied to clipboard","success");
  }

  const handleExtraSpaces = ()=>{
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed","success");
  }

  const hadleOnchange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = "newtext";  //wrong way to change text
  // settText("newtext"); //correct way to change text
  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" placeholder="Enter text here" style={{backgroundColor:props.mode==='light'?'white':'#13466e' , color:props.mode==='light'?'#042743':'white'}}
                value={text} onChange={hadleOnchange} id="myBox" rows="6">
              </textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hadleUpclick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
          
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  )
}
