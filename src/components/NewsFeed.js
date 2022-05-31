import {useEffect, useState} from "react"
import axios from "axios";


const NewsFeed = () => {
    const [articles, setArticles] = useState(null)
    const [articlesComments, setArticlesComments] = useState(null)
    var currentTime = new Date()
    useEffect(() => {
        const axios = require("axios")

        const options = {
            method: "GET",
            url: "https://old.reddit.com/r/news+worldnews.json",

        }

        axios.request(options).then(function (response) {
            setArticles(response.data)

        }).catch(function (error) {
            console.error(error);
        })


    }, [])

    const first5Articles = articles?.data.children.slice(0, 5)


    return (
        <div className={"news-feed"}>
            <h1>News Feed</h1>
            {first5Articles?.map((article, i) => (
                <div key={i} className={"posts"}>
                    <div className={"score"}>
                        <h2>{Math.round(article.data.score/100)/10}k</h2>
                        <div className={"hours-ago"}>




                            {Math.round((currentTime.getTime()/1000 - article.data.created_utc)/3600)}h
                        </div>
                    </div>
                    <div className={"links"}>
                        <a href={"https://old.reddit.com/" + article.data.id}>
                            <h3>{article.data.title}</h3>
                        </a>
                    </div>


                </div>))}
        </div>
    )


}

export default NewsFeed