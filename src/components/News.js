import React, { Component } from 'react'
import NewsItems from "./NewsItems.js"

export default class News extends Component {

    constructor(){
        super()
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13bebc5e6b834a9f98155d8b3c8b3f48&page=1&pageSize=20"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults})
    }

    handlePreviousClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13bebc5e6b834a9f98155d8b3c8b3f48&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles , page : this.state.page - 1})
    }

    handleNextClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13bebc5e6b834a9f98155d8b3c8b3f48&page=${this.state.page + 1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles , page : this.state.page + 1})
    }

  render() {
    return (
      <div>

        <div className="container my-3">
            <h1 className='my-5'>NewsShorts -- Top Headlines!</h1>

            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-3" key={element.url}>
                        <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://g.foolcdn.com/editorial/images/802100/investor-smiling-computer.jpg"} newsUrl={element.url} />
                    </div>
                })}

            </div>

            <div className="container my-3 d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" disabled={Math.ceil(this.state.totalResults / 20) == this.state.page} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

            </div>

        </div>

      </div>
    )
  }
}
