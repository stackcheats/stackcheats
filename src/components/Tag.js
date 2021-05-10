import React from 'react'
import { Link } from 'gatsby'

function Tag({ tags, ...props }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div {...props}>
      {tags.map(tag => (
        <Link
          key={tag}
          className="badge badge-primary font-weight-normal"
          to={`/tags/${tag}/`}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default Tag
