import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './Card'
import Paginate from './Paginate'

function Search() {

  const [searchgif, setSearchgif] = useState("");
  const [searchdata, setSearchdata] = useState([])
  const [isloading, setIsloading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1)
  const [gifsperpage, setGifsperpage] = useState(8)
  const indexoflastgif = currentpage*gifsperpage
  const indexoffirstgif = indexoflastgif - gifsperpage
  const currentgifs = searchdata.slice(indexoffirstgif, indexoflastgif)

  const rendersearchgif = () => {
    if(isloading){
      return <p> please wait......</p>
    }
    return currentgifs.map(item => {
      var date = (item.import_datetime).split(" ")
      return (
        <Cards gifurl={item.images.fixed_height.url} gifusername={`Anonymoususer`} avatarphoto={item.avatar_url} giftitle={item.title} gifdate={date[0]} key={item.id} />
      )
    })
  }





  const handleSearchchange = (event) => {
    setSearchgif(event.target.value)
  }

  const handlesubmit = async (event) => {
    event.preventDefault();
    
    
      const gifname = searchgif.trim();
      if(gifname!==''){
        setIsloading(true)
        try{
          const searchresults = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "2kHnLOxPLxfkSzU1Dj63PhKBOnX1oIRF",
            limit: 48,
            q: searchgif
          }
        });
        setSearchdata(searchresults.data.data);
        console.log(searchdata)
        setIsloading(false)
        }catch(err){
          console.log(err)
        }

      }else{
        alert("enter a valid input");
      }
      
      
    
  }

  const pageSelected = (pagenumber) => {
    setCurrentpage(pagenumber)
  }


  return (
    <>
      <h1>Search Gifs</h1>

      <form className="form-inline justify-content-center m-2">
        <input value={searchgif} onChange={handleSearchchange} type="text" placeholder="search" className="form-control" />
        <button onClick={handlesubmit} type="submit" className="btn btn-primary mx-2" >go</button>

      </form>
      <div className="gifcontainer"> 
        {rendersearchgif()}
      </div>
      <Paginate pageSelected={pageSelected} currentpage={currentpage} itemsperpage={gifsperpage} totalitems={searchdata.length} />
    </>
  );
}

export default Search;
