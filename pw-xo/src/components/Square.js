import React from 'react'

const Square =({ value = '', onClick })=> {
  return (
    <button className="square" onClick={onClick}>
        {value == null? '--': value}
    </button>
  )
}

export default Square