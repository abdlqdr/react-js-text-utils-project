import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    var [count, setCount] = useState(0)
    const handleOnClick = () =>{
        // console.log('this is on click '+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Upper Case', "success")
    }
    const handleOnClickLo = () =>{
        // console.log('this is on click '+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case', "success")

    }
    const handleClearText = () =>{
        // console.log('this is on click '+ text);
        let newText = '';
        setText(newText)
        props.showAlert('Text is Cleared', "success")
    }
    const handleOnChange = (event) =>{
        // console.log('this is on change ');
        setText(event.target.value)
    }
    
    const handleVowels = () => {
        const vowels = ['a','e','i','o','u'];
        let _count = 0;
        for(let i in text) {
            console.log(text[i])
            if(vowels.indexOf(text[i].toLowerCase()) > -1) {
                _count++;
            }
        }
        setCount(_count);
        props.showAlert('Vowels Counted Successfully', "success")
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
      <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleOnClickLo}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleVowels}>Total Vowels</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length === " "? 0: text.split(" ").length} words and {text.length} characters {count} Vowels are there.</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length > 0 ? text : "Please enter some text above in text box to preview...!!"}</p>
    </div>
    </>
  );
}
