import React from 'react'

const Reference = ({ title, description, hyperlink }) => {
  return (
    <a class="reference-card ul-disabled" href={hyperlink}>
      <div class="card">
        <div class="card-horizontal">
          <div class="card-body py-4 px-5">
            <h4 class="card-title mt-4">
              {title}
            </h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Reference
