import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Terminal } from 'react-feather'
import { rhythm, scale } from '../../utils/typography'
import moment from 'moment'

const SingleComment = ({ comment }) => (
  <div className="comment">
    <div className="flex-container">
      <div className="flex">
        <p className="comment-author m-0 text-lowercase">@{comment.author}</p>
      </div>
    </div>
    <div className="flex-container mb-3">
      <div className="flex">
        {comment.createdAt && (
          <p
            className="comment-createdat text-muted"
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(0.5),
            }}
          >
            {moment(new Date(comment.createdAt)).calendar()}
          </p>
        )}
      </div>
    </div>
    <div className="flex-container">
      <div className="flex">
        <p className="comment-content m-0 pb-2">{comment.content}</p>
      </div>
    </div>
  </div>
)

const Comment = ({ comment, child, slug }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)

  return (
    <div className="comment-container p-4 mt-2 mb-2">
      <SingleComment comment={comment} />
      {child && <SingleComment comment={child} />}
      {!child && (
        <div className="comment-reply mt-2">
          {showReplyBox ? (
            <div>
              <button
                className="btn bare"
                onClick={() => console.log('Clicked')}
              >
                Cancel Reply
              </button>
              {/* Comment Form */}
            </div>
          ) : (
            <button
              className="btn btn-link btn-sm"
              onClick={() => console.log('Another Clicked')}
            >
              <Terminal />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
  child: PropTypes.object,
}

export default Comment
