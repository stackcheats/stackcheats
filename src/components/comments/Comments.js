import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
import CommentForm from './CommentForm'

const Comments = ({ comments, slug }) => {
  return (
    <div className="comments">
      {/* <CommentForm slug={slug} /> */}
      {comments.length > 0 &&
        comments.filter(comment => !comment.node._parentId).map(comment => {
          let child = undefined
          if (comment.node._id) {
            child = comments.map(c => c.node).find(c => comment.node._id === c._parentId)
          }
          return <Comment key={comment.node._id} child={child} comment={comment.node} slug={slug} />
        })}
    </div>
  )
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}

export default Comments
