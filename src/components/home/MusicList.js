import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { api } from '../data/api';
import MusicItem from './MusicItem';
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`

function MusicList() {

  const [apiArray, setApiArray] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const makeApiCall = async() => {

      const options = {"headers": {
      "x-rapidapi-key": "1ab071d27dmsh90fe78102c83ad5p193b7ajsndf23995ff514",
      "x-rapidapi-host": "genius.p.rapidapi.com",
      }};

      try {
        const response = await fetch(api, options);

        if (response.ok) {
          const json = await response.json();
          const musicArray = json.response.songs;
          setApiArray(musicArray);
        }

      } catch(error) {
        setError(error.toString())
      } finally {
        setLoader(false);
      }
    }
    makeApiCall();
  }, []);
  

  if (loader) {
    return <div className="text-center fs-2 mt-5 text-secondary">Loading...</div>
  }

  if (error) {
    return <div className="text-center fs-2 mt-5 text-danger">"An error occured"</div>
  }

  return (
    <Container>
      <GridContainer>
        {apiArray.map((artist) => {
        const {id, artist_names, full_title, header_image_thumbnail_url, url} = artist;
        return <MusicItem id={id} name={artist_names} title={full_title} image={header_image_thumbnail_url} link={url} key={id}/>})}
      </GridContainer>
    </Container>
  )
}

export default MusicList