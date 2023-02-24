import React from 'react'

const Image = ({ url, title }) => {
  return (
    <div>
        <img src={url} alt={title}></img>
    </div>
  )
}

export default Image