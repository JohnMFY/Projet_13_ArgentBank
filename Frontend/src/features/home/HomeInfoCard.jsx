import React from 'react'

function HomeInfoCard(props) {
  return (
    <div className='homeInfoCard' >
        <i className={props.iconClass}></i>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default HomeInfoCard