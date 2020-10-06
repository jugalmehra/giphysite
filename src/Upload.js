import React,{ useState } from 'react';
import './App.css';

function Upload() {

  const [file, setFile] = useState("") 

  const handlefilechange = (e) => {
    setFile(e.target.value)
  }

  const handleupload = async (e) => {
    e.preventDefault();

    
  }

  return (
    <div>
      <h1>Upload Your Gifs </h1>
      <form>
        <input type="file" value={file} onChange={handlefilechange} />
        <button onClick={handleupload} type="submit" className="btn btn-primary mx-2" >go</button>
      </form>
    </div>
  );
}

export default Upload;
