import React, { useEffect, useState } from 'react';
import Cards from './Card';
import axios from 'axios';
import './cards.css'
import Paginate from './Paginate';



function Trending() {

  const [gifdata, setGifdata] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1)
  const [gifsperpage, setGifsperpage] = useState(8)
  const indexoflastgif = currentpage*gifsperpage
  const indexoffirstgif = indexoflastgif - gifsperpage
  const currentgifs = gifdata.slice(indexoffirstgif, indexoflastgif)

  const rendergif = () => {
    if(isloading){
      return <p> please wait......</p>
    }
    return currentgifs.map(el => {
      return (
        <Cards gifurl={el.images.fixed_height.url} gifusername={`AnonymousUser`} avatarphoto={el.avatar_url} giftitle={el.title} gifdate={el.import_datetime} key={el.id} />
      )
    })
  }

  useEffect(() => {
    

    
    const fetchdata = async () => {
      setIsloading(true)
     
      try{
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "2kHnLOxPLxfkSzU1Dj63PhKBOnX1oIRF",
            limit: "48"
          }
        });

        setGifdata(results.data.data);
        setIsloading(false)
        console.log(results)
  

      }catch(err){
        console.log(err);

      }
      
      
      
    }

    fetchdata();
  
  }, []);

  const pageSelected = (pagenumber) => {
    setCurrentpage(pagenumber)
  }


  return (
    <>
      <h1>Trending Gifs</h1>
      <div className="gifcontainer">
        {rendergif()}
        
      </div>
      <Paginate pageSelected={pageSelected} currentpage={currentpage} itemsperpage={gifsperpage} totalitems={gifdata.length} />
    </>
  );
}

export default Trending;
