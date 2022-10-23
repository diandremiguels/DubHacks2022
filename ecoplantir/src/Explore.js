import React, {Component} from "react";
import './App.css';
import PlantPic from './images/pexels-julian-paolo-dayag-1673973.jpg'

export default class Explore extends Component{
  render() {
    return(
      <div class="explore-page">
        <div class="explore-display-text">
          <h1><b> Explore Sustainable Plants </b></h1>
        </div>
        <div>
          <input
            class="explore-searchbar"
            type="search"
            placeholder="Search here"
            />
          <button>
            Go
          </button>
        </div>
        <div class="cards">
            <a href="/Login" class="card">
              <img class="card-image" src={PlantPic}/>
              <div class="card-text">
                <h4><b> Grocery Waste </b></h4> 
                <p> With the purchase of groceries comes common additional side effects such as air pollution from trucks or 
                  excessive waste from packaging. Growing edible plants at home can help reduce one's personal contribution
                  to this source of waste. </p> 
              </div>
            </a>
            <div class="card">
              <img src={PlantPic}/>
              <div class="card-text">
                <h4><b> Local Ecology </b></h4> 
                <p> Help protect the local biodiversity by growing native plants and reduce the chances of success for
                  potential invasive species </p> 
              </div>
            </div>
            <div class="card">
              <img src={PlantPic}/>
              <div class="card-text">
                <h4><b> Soil Health </b></h4> 
                <p>Grow protective plants if you r hot</p> 
              </div>
            </div>
        </div>
      </div>
    );
  }
}