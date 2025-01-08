import React, {useState , useEffect ,Component }  from 'react'
import NewsItems from "./NewsItems.js"
import Spinner from "./Spinner.js"
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults , setTotalResults] = useState(0)

    let capatalize = (text) => {
        let lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    let updatePageArticles = async() => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url)
        props.setProgress(70)
        let parsedData = await data.json()
        props.setProgress(100)
        setLoading(false)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setPage(page)
    }

    useEffect(() => {
    
    document.title = `${capatalize(props.category)} : NewsShorts`
      updatePageArticles();
    }, [])
    

    let fetchData = async() => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        setLoading(false)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setPage(page)
    }

    return (
      <div>

        {loading ? <Spinner/> : ""}

        <div className="container my-3">
            <h1 className='my-5 text-center'>NewsShorts - Top {capatalize(props.category)} Headlines</h1>

            <InfiniteScroll
                dataLength={articles.length} 
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={<Spinner/>}
            >
                <div className="row">
                    {articles.map((element) => {
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
