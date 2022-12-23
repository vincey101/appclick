import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './index.css'


function Canvas() {
  const [youtubeVideo, setYoutubeVideo] = useState("")
  const [youtubeURL, setYoutubeURL] = useState("")
  const [videoFilePath, setVideoFilePath] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    setYoutubeURL(youtubeVideo);
  }


  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className='wrapper'>
      <form className='form-group form' action="">
        <div className='form-controls'>
          <div className='url-controls'>
            <input className='tube' type="text" placeholder='Enter youtube URL'
              onChange={(e) => setYoutubeVideo(e.target.value)}
            />
            <button type='submit' onClick={handleSubmit} className='btn'> Upload</button>
          </div>
          <h3 className='or'>OR</h3>
          <div className='file-controls'>
            <input type="file" placeholder='select file from folder'
              // onChange={(e) => setVideoFilePath(e.target.files[0])}
              onChange={handleVideoUpload}
            />
            {/* <button type='submit' className='btn btn-success btn-md' onClick={handleVideo}> Upload</button> */}
          </div>
        </div>

      </form>
      <div className="youtube-box">
        {
          youtubeURL ?
            <ReactPlayer url={youtubeURL} className="video" controls />
            :
            <ReactPlayer url={videoFilePath} width="100%" controls={true}
            />
        }

      </div>
    </div>
  )
}

export default Canvas 