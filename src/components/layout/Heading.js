import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const MainHeading = styled.h1`
  color: black;
  text-align: center;
  margin: 30px auto;
`

function Heading({title}) {
  return (
    <MainHeading>{title}</MainHeading>
  )
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Heading