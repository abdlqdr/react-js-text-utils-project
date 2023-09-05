import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    var [count, setCount] = useState(0)

    const handleOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Upper Case', "success")
    }
    const handleOnClickLo = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', "success")

    }
    const handleClearText = () =>{
        let newText = '';
        setText(newText)
        props.showAlert('Text is Cleared', "success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const handleVowels = () => {
        const vowels = ['a','e','i','o','u'];
        let _count = 0;
        for(let i in text) {
            if(vowels.indexOf(text[i]) > -1 || vowels.indexOf(text[i].toLowerCase()) > -1) {
                _count++;
            }
        }
        setCount(_count);
        props.showAlert('Vowels Counted Successfully', "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard..!", "success" )      
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed..!","success");
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickLo}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleVowels}>Total Vowels</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters {count} Vowels are there.</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length > 0 ? text : "Nothing to preview...!!"}</p>
    </div>
    </>
  );
}
