import React, {Component} from "react";
export default class Home extends Component{
  render() {
    return(
      <div class="home-background home-text-background">
        <div>
          <h1 class="home-text"><b>Come along on our journey to sustainbility through planting.</b></h1>
          <p class="home-description">Growing plants at home is a dependable way to help combat pollution and other threats to the environment.
          Use our tool to learn about how growing plants can protect the environment and find plants to grow.</p>
          <a class="home-button-container" href="/Explore">
            <button class="home-button">Start</button>
          </a>
        </div>

      </div>

    );
  }
}
