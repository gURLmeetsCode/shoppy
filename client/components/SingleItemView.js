import React from 'react'
import {Link} from 'react-router-dom'

export default function SingleItemView({ show: { name, category}}){

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Name: { name }</h4>
        </div>
        <div className="col-md-3">
         <button className="btn btn-secondary">Item Details</button>
        </div>
      </div>
    </div>
  )
}
