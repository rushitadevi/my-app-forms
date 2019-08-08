import React, { Component } from "react";
//import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import ShowComments from "./ShowComments";

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      comments: []
    };
  }

  componentDidMount = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?i=" + this.props.match.params.imdbID + "&apikey=424da7b2" );
    var jSON = await response.json();
    this.setState({
      movie: jSON
    });
  }

  

  render() {
    console.log("hii" + this.props.match.params.imdbID);
    return (
      <>
        {this.state.movie && (
          <div className="container my-4">
            <div className="row">
              <div className="col-md-3">
                <div className="card mb-3" style={{ width: "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={this.state.movie.Poster}
                        className="card-img"
                        alt="..."
                        style={{
                          cursor: "pointer",
                          width: "150px"
                        }}
                      />
                    </div>
                    <div className="col-md-8" style={{ color: "black" }}>
                      <div className="card-body">
                        <h5 className="card-title">{this.state.movie.Title}</h5>
                        <p className="card-text">
                          Genre : {this.state.movie.Genre}
                        </p>
                        {/* <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
            {this.props.match &&  <ShowComments id={this.props.match.params.imdbID} /> }
           
        </div>
        
      </>
    );
  }
}

export default SingleMovie;
