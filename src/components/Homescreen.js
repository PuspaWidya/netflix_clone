import React from 'react'
import './Homescreen.css'
import Nav from './Nav'
import Banner from './Banner'
import request from './request'
import Row from './Rows'

export default function Homescreen() {


    return (
        <div className='homeScreen'>
            <Nav/>
            <Banner/>
            <Row
                title="Netflix Originals"
                fetchUrl={request.fetchNetFlixOrigin}
                isLargeRow={true}
            />
            <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
            <Row title="Popularity" fetchUrl={request.fetchPopularity}/>
            <Row title="Movies Action" fetchUrl={request.fetchActionMovies}/>
            <Row title="Movies Comedy" fetchUrl={request.fetchComedyMovies}/>
            <Row title="Movies Horor" fetchUrl={request.fetchHororMovies}/>
            <Row title="Movies Romance" fetchUrl={request.FetchRommanceMovies}/>
            <Row title="Documentaries" fetchUrl={request.FetchDocumentaries}/>
        </div>
    )
}
 