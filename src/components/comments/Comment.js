import React, { useState } from 'react'
import PropTypes from 'prop-types'

// import { Terminal } from 'react-feather'
import { rhythm, scale } from '../../utils/typography'
import moment from 'moment'

// import CommentForm from './CommentForm'

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

const SingleCardComment = ({ comment }) => (
  <div className="comment card">
    <div className="card-body">
      <h5 className="comment-author card-title text-lowercase">
        @{comment.author}
      </h5>
      <p className="comment-content card-text" style={{ fontSize: 'small' }}>
        {comment.content}
      </p>
    </div>
    <div
      className="card-footer"
      style={{ backgroundColor: 'unset', border: 'unset' }}
    >
      {comment.createdAt && (
        <small className="text-muted">
          {moment(new Date(comment.createdAt)).calendar()}
        </small>
      )}
    </div>
  </div>
)

const Comment = ({ comment, child, slug }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)

  return (
    <div className="comment-container p-4 mt-2 mb-2">
      {child && (
        <div className="card-deck">
          <SingleCardComment comment={comment} />
          {child && <SingleCardComment comment={child} />}
        </div>
      )}
      {!child && (
        <>
          <SingleCardComment comment={comment} />
          {/* <div className="comment-reply mt-2">
            {showReplyBox ? (
              <div>
                <button
                  className="btn bare"
                  onClick={() => setShowReplyBox(false)}
                >
                  Cancel Reply
                </button>
                <CommentForm parentId={comment._id} slug={slug} />
              </div>
            ) : (
              <button
                className="btn btn-link btn-sm"
                onClick={() => setShowReplyBox(true)}
              >
                <Terminal />
              </button>
            )}
          </div> */}
        </>
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
