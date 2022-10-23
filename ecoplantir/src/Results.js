import React, {Component} from "react";
import Explore from "./Explore";
export default class Results extends Component{
  constructor(props) {
    super(props);
    this.state={
      unitedstate: "",
      filter: "Filters",
      care: "any",
      space: "any",
      light: "any",
      location: "any",
      sustainabiity: "any"
    };
    this.changeFilterDisplay = this.changeFilterDisplay.bind(this);
  }

  changeFilterDisplay(event) {
    var display = document.getElementById("filters").style.display;
    if (display === "none" || display === "") {
      document.getElementById("filters").style.display = "block";
      this.setState({filter: "Close Filters"});
      document.getElementById("filters").style.paddingTop = "10px";
      document.getElementById("filters").style.paddingBottom = "10px";
    } else {
      document.getElementById("filters").style.display = "none";
      this.setState({filter: "Filters"});
      document.getElementById("filters").style.paddingTop = "0px";
      document.getElementById("filters").style.paddingBottom = "0px";
    }
  }

  render() {

    return(
      <div class="results-background">
        <div class="results-title">
          <h1>Recommendations</h1>
          <p>{this.props.sustainability}</p>
        </div>

        <a>
          <button class="filter-button" id="button" onClick={this.changeFilterDisplay}>{this.state.filter}</button>
        </a>
        <div id="filters" class="results-text no-display">

          <div>
            <div>
              Care Difficulty <br></br>
              <select class="form-response">
                <option>Any</option>
               <option>Easy</option>
               <option>Medium</option>
               <option>Hard</option>
             </select>
            </div>
            <div>
              Space <br></br>
              <select class="form-response">
                <option>Any</option>
                <option>Small (Desktop)</option>
                <option>Medium (Potted)</option>
                <option>Large (Outdoor)</option>
              </select>
            </div>
            <div>
              Light Conditions <br></br>
              <select class="form-response">
                <option>Any</option>
                <option>Low (Cloudy)</option>
                <option>Medium (Partly Cloudy)</option>
                <option>High (Sunny)</option>
              </select>
            </div>
            <div>
              Location <br></br>
              <select class="form-response">
                <option>Any</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Lousiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </select>
            </div>
            <div>
              Sustainability Reason <br></br>
              <select className="form-response">
                <option>Any</option>
                <option>Reduce Grocery Waste (Produce)</option>
                <option>Support Local Ecology (Local)</option>
                <option>Improve Soil Health (Cover Plants)</option>
              </select>
            </div>
            <button class="results-button">Search</button>
          </div>

        </div>
        <div>

        </div>
      </div>
    );
  }
}
