import React, {Component} from "react";
export default class Home extends Component{
  render() {
    return(
      <div class="home-background home-text-background">
        <div>
          <h1 class="home-text"><b>Have you considered growing plants at home?</b></h1>
          <p class="home-description">Plants are super sexy</p>
          <a class="home-button-container" href="/Explore">
            <button class="home-button">Begin</button>
          </a>
        </div>
        
      </div>
      
    );
  }
}
