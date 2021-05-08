import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const Comments = ({ comments, slug }) => {
  return (
    <div className="comments">
      {comments.length > 0 &&
        comments.map(comment => {
          return <Comment key={comment._id} comment={comment} slug={slug} />
        })}
    </div>
  )
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}

export default Comments
