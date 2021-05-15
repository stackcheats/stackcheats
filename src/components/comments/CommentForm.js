import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { firestore } from '../../utils/firebase'

const CommentForm = ({ parentId, slug }) => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const handleCommentSubmission = async e => {
    e.preventDefault()
    let comment = {
      author: author,
      content: content,
      slug: slug,
      _parentId: parentId || null,
      createdAt: new Date(),
    }

    setAuthor('')
    setContent('')

    firestore
      .collection(`comments`)
      .add(comment)
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="p-4">
      <form onSubmit={e => handleCommentSubmission(e)}>
        <div className="form-group">
          <label htmlFor="author">Name</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              id="author"
              className="form-control"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            onChange={e => setContent(e.target.value)}
            value={content}
            name="comment"
            required="required"
            rows="2"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CommentForm
