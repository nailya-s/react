import React from 'react';


const Friend = (props) => {
  return (
    <div>
      <img src={props.img} />
      <div>
        {props.name}
      </div>

    </div>
  )
}

export default Friend;