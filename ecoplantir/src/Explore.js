import React, {Component} from "react";
import './App.css';
import PlantPic from './images/pexels-julian-paolo-dayag-1673973.jpg'
import Results from './Results';
export default class Explore extends Component{
  constructor(props) {
    super(props);
    this.state={
      search:"",
      sustainability:"",
      value: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSustainability = this.handleSustainability.bind(this);
  }
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }
  handleSearchValue(event){
    this.setState({
      search: event.target.value
    });
  }
  handleSearch(event) {
    this.setState({
    value: true
    });
  //  this.state.search=document.getElementById("searchbar").textContent;
  }
  handleSustainability(event) {
    this.setState({
      sustainability: event.target.value
    })
  }
  render() {
    return(

      <div class="explore-page explore-background">
        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

        <div class="explore-display-text">
          <h1><b> Explore Sustainable Plants </b></h1>
          <p>Use the search bar to see if we recommend a certain plant, or explore plants that are sustainable for different reasons</p>
          <p>{this.state.value ? this.state.search : ""}</p>
        </div>
        <div>
          <input
            id="searchbar"
            class="explore-searchbar"
            type="search"
            placeholder="Search here"
            onChange={this.handleSearchValue}
            />
          <button className="search-button" onClick={this.handleSearch}>
            Submit
          </button>
        </div>
        <div class="cards">
            <a onClick={this.handleSustainability} href="/Results" class="card" value="Produce">
              <img class="card-image" src={PlantPic}/>
              <div class="card-text">
                <h4><b> Reduce Grocery Waste </b></h4>
                <p> With the purchase of groceries comes common additional side effects such as air pollution from trucks or
                  excessive waste from packaging. Growing edible plants at home can help reduce one's personal contribution
                  to this source of waste. </p>
              </div>
            </a>
            <a onClick={this.handleSustainability} href="/Results" class="card" value="Ecology">
              <img src={PlantPic}/>
              <div class="card-text">
                <h4><b> Support Local Ecology </b></h4>
                <p> Help support the local biodiversity by growing native plants that provide services to other local organisms.
                  Native plants can also help protect against foreign pests and diseases, and will generally need fewer additional
                  resources compared to imported plants. </p>
              </div>
            </a>
            <a onClick={this.handleSustainability} href="/Results" class="card" value="Soil">
              <img src={PlantPic}/>
              <div class="card-text">
                <h4><b> Improve Soil Health </b></h4>
                <p> Cover crops help lessen soil erosion and add organic nutrients to soil when they turn over to seed.
                  This can reduce the need for artificial fertilizers as well as reducing emissions from transportation of purchased
                  manure or compost for plants.</p>
              </div>
            </a>
        </div>
        <footer></footer>
      </div>
    );
  }
}