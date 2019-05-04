import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader/PostHeader';
import './Post.sass';

const Post = (props) => {
  const {
    imgSrc, name, postedAt, children,
  } = props;
  return (
    <div className="Post">
      <PostHeader imgSrc={imgSrc} name={name} postedAt={postedAt} />
      <p className="Content">{children}</p>
    </div>
  );
};

Post.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Post;
