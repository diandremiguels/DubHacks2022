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
      sustainabiity: "any",
    resources: [
      {
        Name:"Cherry Tomatoes",
        space:"Small",
        difficulty:"Easy",
        instructions:"Water every two days and give lots of sunlight. It doesn't need a lot of space and is an easy plant to grow from South America.",
        link:"https://cdn.shopify.com/s/files/1/0972/6282/products/cherry-bomb-tomato-organic-f1-hybrid-64-days-vegetables-pinetree-garden-seeds-731_800x.jpg?v=1602875855",
        state:"",
        sustainability:"Produce",
        lighting:"High"
      },
      {
        Name:"Hydrangea",
        space:"Large",
        difficulty:"Hard",
        instructions:"Make sure the soil is always moist. It also needs sunlight but is easy to burn. Make sure to give it lots of space. Delicate plant from Washington.",
        link:"https://static01.nyt.com/images/2020/06/29/realestate/01garden-hydrangeas1/01garden-hydrangeas1-mediumSquareAt3X-v2.jpg",
        state:"Washington",
        sustainability:"Local",
        lighting:"High"
      },
      {
        Name:"Mustard Greens",
        space:"Medium",
        difficulty:"Medium",
        instructions:"Keep moist, will grow quickly. Originates from Africa",
        link:"https://gardenerspath.com/wp-content/uploads/2020/10/Southern-Giant-Curled.jpg",
        state:"",
        sustainability:"Cover Crop",
        lighting:"Medium"
      },
    ],
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
    this.updateCare = this.updateCare.bind(this);
    this.updateLight = this.updateLight.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateSustainability = this.updateSustainability.bind(this);
    this.updateDifficulty = this.updateDifficulty.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
  }

  updateCare(event) {
    var e = document.getElementById("Difficulty");
    this.setState({care: e.options[e.selectedIndex].text});
  }

  updateLight(event) {
    var e = document.getElementById("Light");
    this.setState({filter: e.options[e.selectedIndex].text});
  }

  updateState(event) {
    var e = document.getElementById("State");
    this.setState({filter: e.options[e.selectedIndex].text});
  }

  updateSustainability(event){
    var e = document.getElementById("Sustainability");
    this.setState({filter: e.options[e.selectedIndex].text});
  }

  updateDifficulty(event){
    var e = document.getElementById("Difficulty");
    this.setState({filter: e.options[e.selectedIndex].text});
  }

  applyFilters(event){
    /* TODO */
  }

  render() {
    
    return(
      <div class="results-background">
        <div class="results-title">
          <h1>Recommendations</h1>
        </div>
        
        <a>
          <button class="filter-button" id="button" onClick={this.changeFilterDisplay}>{this.state.filter}</button>
        </a>
        <div id="filters" class="results-text no-display">
          
          <div>
            <div>
              Care Difficulty&nbsp;&nbsp;
              <select id="Difficulty" value={this.state.care} class="form-response" onChange={this.updateCare}>
                <option>Any</option>
               <option>Easy</option>
               <option>Medium</option>
               <option>Hard</option>
             </select>
            </div>
            <div>
              Space&nbsp;&nbsp;
              <select id="Space" class="form-response">
                <option>Any</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div>
              Light Conditions&nbsp;&nbsp;
              <select id="Light" class="form-response">
                <option>Any</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              Location&nbsp;&nbsp;
              <select id="Location" class="form-response">
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
              Sustainability Reason&nbsp;&nbsp;
              <select id="Sustainability" className="form-response">
                <option>Any</option>
                <option>Produce</option>
                <option>Local</option>
                <option>Soil</option>
              </select>
            </div>
            <button onClick={this.applyFilters} class="results-button">Search</button>
          </div>
          
        </div>
        <div>
        </div>

        
          {
            this.state.resources.map(resource =>(
              // (resource.sustainability === this.state.sustainabiity) &&
              // this.checkResource(resource) &&
              <div className="column">
                <div className="card-clone">
                  <div>
                    <img className="card-image-clone"src={resource.link}></img>
                  </div>
                  <h3>{resource.Name}</h3>
                  <p>{resource.instructions}</p>
                </div>
              </div>
              ))
          }
        
        

      </div>
    );
  }
}
