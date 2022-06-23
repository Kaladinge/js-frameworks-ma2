import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const MusicItemContainer = styled.div`
  text-align: center;
`
const Image = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
`

function MusicItem({id, name, title, image, link}) {
  return (
    <MusicItemContainer>
      <Link to={`detail/${id}`} className="text-decoration-none text-secondary">
        <h4 className="fs-5">{title}</h4>
        <Image src={image} alt={name}/>
      </Link>
      <div>
        <a href={link}>Show me lyrics</a>
      </div>
    </MusicItemContainer>
  )
}

MusicItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default MusicItem