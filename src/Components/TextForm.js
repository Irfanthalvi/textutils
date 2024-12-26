// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(""); //hoisting
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handledownclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleclearclick = () => {
        let newtext = ("")
        setText(newtext)
    }
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const handlecopyclick = () => {
        console.log("i am a copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    
    return (
       
        <div style={{Color: props.mode === 'dark' ? 'grey' : 'white', Color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Drak mode on/off</label>
            </div>
            <div className='text'>
                <h1>Text Input Utils And Change Into Different Phase </h1>
                <h2>Enter Your Text And Change Into The Following</h2>
            </div>
            <div className='box'>
                <textarea className='input' placeholder='EnterText Here' id='mybox' style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light' }} value={text} onChange={handleonchange} rows="10"></textarea>
            </div>
            <div className='btns'>
                <button className='btn' onClick={handleupclick}>UpperCase</button>
                <button className='btn' onClick={handledownclick}>LowerCase</button>
                <button className='btn' onClick={handlecopyclick}>CopyCase</button>
                <button className='btn' onClick={handleextraspaces}>R.E.space</button>
                <button className='btn' onClick={handleclearclick}>Clear</button>
            </div>
            <h1>Your Text Summery</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {text.length} Charactors</p>
            <p>{0.008 * text.split(" ").length} Minutes Reads</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    )
}
