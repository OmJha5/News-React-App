import React, { Component } from 'react'
import NewsItems from "./NewsItems.js"
import Spinner from "./Spinner.js"

export default class News extends Component {

    constructor(){
        super()
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }
    }

    capatalize = (text) => {
        let lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    async updatePageArticles(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=13bebc5e6b834a9f98155d8b3c8b3f48&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults , page : this.state.page , loading : false})
    }

    async componentDidMount(){
        this.updatePageArticles();
    }

    handlePreviousClick = async() => {
        this.setState({page : this.state.page - 1});
        this.updatePageArticles();
    }

    handleNextClick = async() => {
        this.setState({page : this.state.page + 1});
        this.updatePageArticles();
    }

  render() {
    return (
      <div>

        {this.state.loading ? <Spinner/> : ""}

        <div className="container my-3">
            <h1 className='my-5 text-center'>NewsShorts -- Top Headlines({this.capatalize(this.props.category)})!</h1>

            <div className="row">
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://g.foolcdn.com/editorial/images/802100/investor-smiling-computer.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
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
