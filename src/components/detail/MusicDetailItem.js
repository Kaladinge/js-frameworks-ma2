import React from 'react';
import Heading from '../layout/Heading';
import PropTypes from "prop-types";

function MusicDetailItem({name, title, image}) {
  return (
    <div className="mx-auto">
      <Heading title={name}/>
      <h3 className="fs-4 text-primary">{title}</h3>
      <img className="w-25" src={image} alt={name}/>
    </div>
  )
}

MusicDetailItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default MusicDetailItem