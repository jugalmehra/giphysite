import React,{ useState } from 'react';
import './App.css';
import {useHistory} from 'react-router-dom';
import './upload.css';


export default function Upload() {

  const [file, setFile] = useState("")
  const [uploadfile, setUploadfile] = useState()
  const [gifid, setGifid] = useState("")

  const history = useHistory()
  console.log(history)

  

  const makepreviewpage = (e) => {
    e.preventDefault()
    history.push(`/Previewpage/${gifid}`)
  }
  
  const Previewpage = () =>{
    if(gifid){
      return(
        <div><button onClick={makepreviewpage}>Previewpage</button></div>
      );
    }else{
      return(
        <></>
      );
    }
  }

  const handlesubmit = async (e) => {
    console.log(e)
    e.preventDefault();


    const formdata = new FormData()
    formdata.append('file', uploadfile)
    formdata.append('api_key', '2kHnLOxPLxfkSzU1Dj63PhKBOnX1oIRF' )
    console.log(formdata)

    await fetch("https://upload.giphy.com/v1/gifs",{
      method: "POST",
      body: formdata
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      setGifid(data.data.id)
    })
    .catch(error => {
      console.error(error)
    })

    

  }

  const handlefilechange = (e) => {
    
    
    setFile(URL.createObjectURL(e.target.files[0]))
    setUploadfile(e.target.files[0])
    console.log(e.target.files[0])

  }

  const Previewimg = () => {
    if(file){
      return(
        <img src={file} alt="preview of uploaded img" />
      );
    }else{
      return(
        <div></div>
      );
    }
    
  }

  return (
    <>
      <h1>Upload Your Gifs </h1>
      <div className="formarea">
      <form>
        <input type="file" onChange={handlefilechange}  accept="image/gif" />
        <button onClick={handlesubmit}>Upload</button>
      </form>
      <div className="previewarea">
      <Previewimg />
      <Previewpage />
      </div>
      </div>
    </>
  );
}