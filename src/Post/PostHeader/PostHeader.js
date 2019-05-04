/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import './PostHeader.sass';

const PostHeader = props => (
  <div className="PostHeader">
    <img src={props.imgSrc} alt="" />
    <div className="Info">
      <div className="Name">{props.name}</div>
      <div className="Date">{props.postedAt}</div>
    </div>
  </div>
);

PostHeader.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
};

export default PostHeader;
