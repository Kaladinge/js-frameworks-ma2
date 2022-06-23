import React, { useEffect, useState } from 'react'
import { api2 } from "../data/api";
import { useParams, useNavigate } from "react-router-dom";
import MusicDetailItem from './MusicDetailItem';
import styled from "styled-components";

const DetailContainer = styled.div`
  text-align: center;
`

function MusicDetail() {

  const [apiArray, setApiArray] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams("/");

  if (!id) {
    navigate("/");
  }
  const url = api2 + "/" + id;

  useEffect(() => {

    const options = {"headers": {
      "x-rapidapi-key": "1ab071d27dmsh90fe78102c83ad5p193b7ajsndf23995ff514",
      "x-rapidapi-host": "genius.p.rapidapi.com",
      }};
    
    const makeApiCall = async() => {
      try {
        const response = await fetch(url,options);
      
        if (response.ok) {
          const results = await response.json();
          setApiArray(results.response.song);
        }
      } catch(error) {  
        setError(error.toString());
      } finally {
        setLoader(false);
      }
    }
    makeApiCall();
  }, [url]);

  if (loader) {
    return <div className="text-center fs-2 mt-5 text-secondary">Loading...</div>
  }

  if (error) {
    return <div className="text-center fs-2 mt-5 text-danger">An error occured</div>
  }

  const {artist_names, full_title, header_image_thumbnail_url} = apiArray;

  return (
    <DetailContainer>
      <MusicDetailItem name={artist_names} title={full_title} image={header_image_thumbnail_url}/>
    </DetailContainer>
  )
}

export default MusicDetail