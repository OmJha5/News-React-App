import React, { Component } from 'react'
import NewsItems from "./NewsItems.js"

export default class News extends Component {
  render() {
    return (
      <div>

        <div className="container my-3">
            <h1 className='my-5'>NewsShorts -- Top Headlines!</h1>
            
            <div className="row">
                <div className="col-md-4">
                    <NewsItems title="Criket" description="This is Nice" />
                </div>

                <div className="col-md-4">
                    <NewsItems title="Movie" description="This is Movie" />
                </div>

                <div className="col-md-4">
                    <NewsItems title="Politics" description="This is Politics" />
                </div>

            </div>
        </div>

      </div>
    )
  }
}
