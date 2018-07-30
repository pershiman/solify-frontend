import React, { Component } from 'react'
import Geocode from "react-geocode";
import { Button } from 'reactstrap';
import SearchResult from './SearchResult.js'
import { Redirect } from 'react-router';


class Search extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      query: '',
      searchResultVisible: false,
      responseObject: ''
    }
  }

  submitForm(event) {
    // prevent the form from reloading the entire page
    event.preventDefault();
    // call the callback with the search value
    this.getInfo();
    console.log("In event");
  }

  showSearchResult(action) {
    this.setState({
      searchResultVisible: action
    })
  }

  getInfo() {
    console.log("Fetching info");
    if(this.state.query === "") {
      this.showSearchResult(false);
    }
    else {
      Geocode.setApiKey(process.env.G_API_KEY);
      // Get latitude & longitude from address.
      Geocode.fromAddress(this.state.query).then(
        response => {
          this.getSoldata(response);     
        }),
        error => {
          console.error(error);
        };
    }
  }

  extractAndstoreVariables(props) {
    var responseObject = JSON.parse(props);

    console.log(responseObject);

    this.setState({
      responseObject: responseObject
    });

    this.showSearchResult(true)
  }

  getSoldata(response) {
    const {lng, lat} = response.results[0].geometry.location;
    console.log(lng);

    var options = {
        method: 'GET',
        uri: "http://ec2-35-159-9-30.eu-central-1.compute.amazonaws.com:8080/wms/solinstralning?longitude="+lng+
        "&latitude="+lat
    };

    console.log("Request uri: " + options.uri);
    var rp = require('request-promise');
    rp(options)
      .then(data => {
          console.log("Request received");
          this.extractAndstoreVariables(data);
        }    
      )
      .catch(function (err) {
          // Crawling failed or Cheerio choked...
      });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    if (this.state.searchResultVisible)
    return (<Redirect to={{
        pathname: '/result',
        state: { passedVal: this.state.responseObject }
    }} />)

    { this.state.searchResultVisible ? <SearchResult passedVal={this.state.responseObject} /> : null }  
    return (
      <form onSubmit={this.submitForm}>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}    
        />
        <Button color="primary" onClick={() => this.getInfo()}>Search</Button>
      </form>
    )
  }
}
export default Search