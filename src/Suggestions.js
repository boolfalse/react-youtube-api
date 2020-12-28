import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map( (r,i) => (
      <li key={r.videoId + i}>
        <a href={"https://www.youtube.com/watch?v=" + r.videoId}>
          <img className="result-img" src={r.thumbnail} alt={"Image " + i} />
          <span className="result-title">{r.title.substring(0,50)}</span>
        </a>
      </li>
  ))
  return options
}

export default Suggestions