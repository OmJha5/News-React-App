import React, { Component } from 'react'
import NewsItems from "./NewsItems.js"
import Spinner from "./Spinner.js"
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    constructor(props){
        super(props)
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }

        document.title = `${this.capatalize(this.props.category)} : NewsShorts`
    }

    capatalize = (text) => {
        let lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    async updatePageArticles(){
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=13bebc5e6b834a9f98155d8b3c8b3f48&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        this.props.setProgress(30)
        let data = await fetch(url)
        this.props.setProgress(70)
        let parsedData = await data.json()
        this.props.setProgress(100)
        this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults , page : this.state.page , loading : false})
    }

    async componentDidMount(){
        this.updatePageArticles();
    }

    fetchData = async() => {
        this.setState({page : this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=13bebc5e6b834a9f98155d8b3c8b3f48&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : this.state.articles.concat(parsedData.articles) , totalResults : parsedData.totalResults , page : this.state.page , loading : false})
    }

  render() {
    return (
      <div>

        {this.state.loading ? <Spinner/> : ""}

        <div className="container my-3">
            <h1 className='my-5 text-center'>NewsShorts - Top {this.capatalize(this.props.category)} Headlines</h1>

            <InfiniteScroll
                dataLength={this.state.articles.length} 
                next={this.fetchData}
                hasMore={this.state.articles.length < this.state.totalResults}
                loader={<Spinner/>}
            >
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://g.foolcdn.com/editorial/images/802100/investor-smiling-computer.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>
            </InfiniteScroll>

        </div>

      </div>
    )
  }
}
