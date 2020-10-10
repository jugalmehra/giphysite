import React,{ useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Cards from './Card';
import './cards.css'
import axios from 'axios';

function Previewpage(props){

    const [previewgifdata, setPreviewgifdata] = useState([])

   
    //  const params = useParams
    //  console.log(params.id)
    const rendergif = () => {
        return previewgifdata.map(el => {
            var date = (el.import_datetime).split(" ")
            return (
              <Cards gifurl={el.images.fixed_height.url} gifusername={`JugalMehra`} avatarphoto={el.avatar_url} giftitle={el.title} gifdate={date[0]} key={el.id} />
            )
          });
    }


    useEffect(() => {
        console.log(props.match.params.id)

        const fetchdata = async () => {
            try{
                const results = await axios("https://api.giphy.com/v1/gifs", {
                  params: {
                    api_key: "2kHnLOxPLxfkSzU1Dj63PhKBOnX1oIRF",
                    ids: props.match.params.id
                  }
                });
        
                setPreviewgifdata(results.data.data);
                // setIsloading(false)
                console.log(results)
          
        
              }catch(err){
                console.log(err);
        
              }
        }

        fetchdata()
    },[])
    

    return(
        <>
            <h1>In the preview Page</h1>
            <div className="gifcontainer" id="forsinglegif">
                {rendergif()}
                
            </div>
        </>
    );
}

export default Previewpage;