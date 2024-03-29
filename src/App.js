import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Documentaries Now" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
