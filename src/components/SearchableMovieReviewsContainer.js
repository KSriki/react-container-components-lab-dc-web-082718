import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super();
        this.state = {
            reviews:[],
            searchTerm: []
        }
    }

  getFetch() {
      fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            reviews: data.results
          })
        })
    }

    handleSearch = (event) => {
        const searchT = event.currentTarget.value;
        this.setState({
            searchTerm: searchT
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getFetch();
    }


    render() {

        return (<div className="searchable-movie-reviews"><h1>Search results: </h1>
        <form onSubmit={ this.handleSubmit }>
        <input type="text" name="search" onChange={this.handleSearch}
        value={this.state.searchTerm} />
          <button type="submit">Submit</button>
        </form>

        <div>
        <MovieReviews reviews={this.state.reviews}/>
        </div>
        <br /><br />
        </div>);

    }



}
