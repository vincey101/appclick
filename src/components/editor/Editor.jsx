import { useState } from 'react';
import Draggable from 'react-draggable';
import './editor.css';
import { BlockPicker } from "react-color";


export default function Editor() {
    // const [color, setColor] = useState({});
    const [message, setMessage] = useState('');
    const [blockPickerColor, setBlockPickerColor] = useState("#ff8a65");
    const [showColor, setShowColor] = useState(false);
    const [text, setText] = useState(false);



    const [updated, setUpdated] = useState(message);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdated(message);
        setMessage('');
    };


    const handleStart = () => console.log('here');
    const handleDrag = () => console.log('drag!');
    const handleStop = () => console.log('stop!');


    return (
        <div className='sidebar'>
            <button className='textfield' onClick={() => setText(text => !text)}>
                {text ? "Close Text field" : "Text Field"}

            </button>
            {text && (
                <div className='message'>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        placeholder="Enter text"
                        value={message}
                        style={{
                            width: "10vw",
                            height: "3.5vh",
                            borderRadius: "7px",
                            border: "none",
                            outline: "white",
                            padding: "5px",

                        }}
                    />
                    <h6 className='text'>Drag text on screen</h6>
                    <button onClick={handleClick}
                        style={{
                            margin: "10px",
                            padding: "5px",
                            border: 'none',
                            borderRadius: "7px",
                            backgroundColor: "black",
                            color: "white",
                        }}>
                        Add/Update text
                    </button>
                </div>
            )

            }


            <div className="color-picker">
                <button className='colorfield'
                    onClick={() => setShowColor(showColor => !showColor)}>
                    {showColor ? "Close palette" : "Pick a color"}
                </button>
                {/* Block Picker from react-color and handling color on onChange event */}
                {showColor && (
                    <BlockPicker
                        color={blockPickerColor}
                        onChange={color => {
                            setBlockPickerColor(color.hex);
                        }}
                    />

                )
                }

                <Draggable
                    axis="both"
                    handle=".ball"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    bounds={{ left: 350, top: -80, right: 1100, bottom: 330 }}
                    // bounds={{ left: 350, top: 0, right: 950, bottom: 450 }}
                    onStart={handleStart}
                    onDrag={handleDrag}
                    onStop={handleStop}>
                    <div>
                        <h2 className="ball" style={{ color: blockPickerColor, display: "block" }}>
                            {updated}
                        </h2>
                    </div>
                </Draggable>

            </div>

        </div>
    );
}
