import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
    let {title , description , imageUrl , newsUrl , date , author , source} = this.props;

    return (
      <div>
        <div className="card my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"95%" , zIndex:"1"}}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}
