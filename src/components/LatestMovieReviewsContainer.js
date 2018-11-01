import React, {
  Component
} from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

    componentDidMount() {
      console.warn('Latest Did Mount')
      this.getFetch()
    }


  getFetch() {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          this.setState({
            reviews: data.results
          })
        })
    }



      render() {

        return ( < div className = "latest-movie-reviews" ><h1>Latest Reviews:</h1>
                    <br />

                            <MovieReviews reviews={this.state.reviews}/>
                
                < /div>)


        }


      }
