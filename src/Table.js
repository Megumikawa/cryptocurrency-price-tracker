import React from 'react'
import './Coin.css'

const Table = () => {
  return (
    <div className="table-container">
      <div className="coin-row">
        <div className="coin">
          <h1>Name</h1>
          <p>Symbol</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price</p>
          <p className="coin-volume">Volume</p>
          <p className="coin-percent">Changed</p>
          <p className="coin-marketcap">Market cap</p>
        </div>
      </div>
    </div>
  )
}
export default Table


