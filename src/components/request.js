const API_KEY = '7388f5b7cb247908f3c5108503957bf3'

const request = {
fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetFlixOrigin: `discover/tv?api_key=${API_KEY}`,
fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchPopularity:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
fetchActionMovies :`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=28`,
fetchComedyMovies:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
fetchHororMovies:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=27`,
FetchRommanceMovies : `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres= 10749`,
FetchDocumentaries: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=99`
}

export default request