import Editor from "../editor/Editor"
import Canvas from "../../Canvas";
import './page.css'

import React from 'react'
// import Sidebar from "../sidebar/Sidebar";

function Page() {
    return (
        <div className="page">
            {/* <Sidebar /> */}

            <Editor />
            <Canvas />
            {/* <canvas id="canvas" width="100%" height="100%" /> */}
            {/* </Canvas> */}

        </div>
    )
}

export default Page