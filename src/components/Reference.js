import React from 'react'

const Reference = ({ title, description, hyperlink }) => {
  return (
    <a className="reference-card ul-disabled" href={hyperlink}>
      <div className="card">
        <div className="card-horizontal">
          <div className="card-body py-4 px-5">
            <h4 className="card-title mt-4">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Reference
